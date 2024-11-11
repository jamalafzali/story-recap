import React, { useEffect, useState } from "react";

import API_BASE_URL from "./config";
import AppTheme from "./sharedTheme/AppTheme";
import Box from "@mui/material/Box";
import Chatbox from "./components/Chatbox";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import GitHubLink from "./components/GitHub";
import Hero from "./components/Hero";

function App() {
  const [bookName, setBookName] = useState("");
  const [pageNumber, setPageNumber] = useState("");
  const [chapterNumber, setChapterNumber] = useState("");
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);

  const callStoryRecap = () => {
    setLoading(true);
    const userData = { bookName, pageNumber, chapterNumber };

    const eventSource = new EventSource(
      `${API_BASE_URL}/recapStory?` + new URLSearchParams(userData).toString()
    );

    // Clear previous summary
    setSummary("");

    // Listen for each message from the server
    eventSource.onmessage = (event) => {
      if (event.data === "[DONE]") {
        eventSource.close();
        setLoading(false);
      } else {
        // Append the streamed chunk to the summary state
        setSummary((prevSummary) => prevSummary + event.data);
      }
    };

    // Handle errors
    eventSource.onerror = (error) => {
      console.error("Error receiving streaming data:", error);
      eventSource.close();
      setLoading(false);
    };
  };

  return (
    <AppTheme>
      <CssBaseline enableColorScheme />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          backgroundColor: "background.default",
        }}
      >
        <Hero
          bookName={bookName}
          setBookName={setBookName}
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
          chapter={chapterNumber}
          setChapterNumber={setChapterNumber}
          callStoryRecap={callStoryRecap}
          loading={loading}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexGrow: 1,
          }}
        >
          <Chatbox summary={summary} />
        </Box>
        <Box sx={{ flexGrow: 1 }} />
        <Divider sx={{ margin: "30px 0" }} />
        <GitHubLink />
      </Box>
    </AppTheme>
  );
}

export default App;
