const OpenAI = require("openai");

exports.recapStory = async (req, res) => {
  try {
    const { bookName, pageNumber, chapterNumber } = req.query;
    console.log(
      `Request made with bookName: ${bookName}, pageNumber ${pageNumber}, chapterNumber ${chapterNumber}`
    );

    if (!bookName || (!pageNumber && !chapterNumber)) {
      throw new Error("Value cannot be blank");
    }

    // Check if book is legitimate
    let openLibraryUrl = `https://openlibrary.org/search.json?title=${encodeURIComponent(
      bookName
    )}`;
    await fetch(openLibraryUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data.numFound === 0) {
          console.log("Cannot find this book in database");
          throw new Error("I seem to be unable to find this book :(");
        }
      });

    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    let current_position = "";
    if (pageNumber) {
      current_position += `page ${pageNumber}`;
    }
    if (chapterNumber) {
      if (pageNumber) {
        current_position += " and";
      }
      current_position += ` chapter ${chapterNumber}`;
    }

    const stream = await openai.chat.completions.create({
      model: "gpt-4o",
      stream: true,
      messages: [
        {
          role: "system",
          content: `You are a helpful book recapper. You will be provided a book name, and either a page number or a chapter. Your job is to recap the events of the book sofar, being extra cautious not to spoil any more of the story. This will upset the user if you do so. The user may ask questions about certain topics in the book; you should answer as if you only have the knowledge thusfar and not use any gained knowledge from later in the book. Please also ensure that your response is correctly formatted as markdown so that a downstream interpreter can correctly parse your response. Ensure the response is complete without ending with any additional questions or follow-ups. Focus on delivering the content directly.`,
        },
        {
          role: "user",
          content: `I am currently reading ${bookName} and have reached ${current_position}. Its been a long time since I read the book last, can you help me remember what events had occurred so far?`,
        },
      ],
    });

    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");

    for await (const chunk of stream) {
      let content = chunk.choices[0]?.delta?.content || "";
      content = content.replace(/\n/g, "<newline>");
      res.write(`data: ${content}\n\n`);
    }

    res.write("data: [DONE]\n\n");
    res.end();
  } catch (e) {
    console.log(e);
    res.status(400).json({ message: `Try again. ${e}` });
  }
};
