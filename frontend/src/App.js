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
    fetch(`${API_BASE_URL}/recapStory`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((data) => {
        setSummary(data.message);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching data:", error));
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
