import { Box, Paper } from "@mui/material";

import React from "react";
import ReactMarkdown from "react-markdown";

const Chatbox = ({ summary }) => {
  const MarkdownComponent = ({ markdownText }) => {
    const cleanMarkdown = (text) => text.replace(/<newline>/g, "\n");
    const cleanedText = cleanMarkdown(markdownText);
    return (
      <div>
        <ReactMarkdown>{cleanedText}</ReactMarkdown>
      </div>
    );
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: { xs: "100%", sm: "80%", md: "60%", lg: "50%", xl: "40%" },
        height: 500,
        border: 1,
        borderColor: "grey.300",
        borderRadius: 2,
        p: 2,
        boxShadow: 3,
        backgroundColor: "background.paper",
      }}
    >
      {/* Message Display Area */}
      <Paper
        elevation={2}
        sx={{
          flex: 1,
          overflowY: "auto",
          p: 2,
          mb: 2,
        }}
      >
        <MarkdownComponent markdownText={summary} />
      </Paper>
    </Box>
  );
};

export default Chatbox;
