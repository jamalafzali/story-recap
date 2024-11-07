const OpenAI = require('openai')

exports.recapStory = async (req, res) => {
    const { bookName, pageNumber, chapter } = req.body

    const openai = new OpenAI({ apiKey: apiKey });

    const completion = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [
            { role: "system", content: "You are a helpful book recapper. You will be provided a book name, and either a page number or a chapter. Your job is to recap the events of the book sofar, being extra cautious not to spoil any more of the story. This will upset the user if you do so. The user may ask questions about certain topics in the book; you should answer as if you only have the knowledge thusfar and not use any gained knowledge from later in the book." },
            {
                role: "user",
                content: `I am currently reading ${bookName} and have reached page ${pageNumber}. Its been a long time since I read the book last, can you help me remember what events had occurred so far?`,
            },
        ],
    });
    // gpt_response = completion.choices[0].message
    gpt_response = `I am currently reading ${bookName} and have reached page ${pageNumber}. Its been a long time since I read the book last, can you help me remember what events had occurred so far?`
    console.log(gpt_response)
    res.status(201).json({ message: gpt_response })
}