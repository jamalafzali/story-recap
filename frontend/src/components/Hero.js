import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import InputLabel from "@mui/material/InputLabel";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import { visuallyHidden } from "@mui/utils";
import { styled } from "@mui/material/styles";

const StyledBox = styled("div")(({ theme }) => ({
  alignSelf: "center",
  width: "100%",
  height: 400,
  marginTop: theme.spacing(8),
  borderRadius: (theme.vars || theme).shape.borderRadius,
  outline: "6px solid",
  outlineColor: "hsla(220, 25%, 80%, 0.2)",
  border: "1px solid",
  borderColor: (theme.vars || theme).palette.grey[200],
  boxShadow: "0 0 12px 8px hsla(220, 25%, 80%, 0.2)",
  backgroundImage: `url(${
    process.env.TEMPLATE_IMAGE_URL || "https://mui.com"
  }/static/screenshots/material-ui/getting-started/templates/dashboard.jpg)`,
  backgroundSize: "cover",
  [theme.breakpoints.up("sm")]: {
    marginTop: theme.spacing(10),
    height: 700,
  },
  ...theme.applyStyles("dark", {
    boxShadow: "0 0 24px 12px hsla(210, 100%, 25%, 0.2)",
    backgroundImage: `url(${
      process.env.TEMPLATE_IMAGE_URL || "https://mui.com"
    }/static/screenshots/material-ui/getting-started/templates/dashboard-dark.jpg)`,
    outlineColor: "hsla(220, 20%, 42%, 0.1)",
    borderColor: (theme.vars || theme).palette.grey[700],
  }),
}));

export default function Hero({
  bookName,
  setBookName,
  pageNumber,
  setPageNumber,
  chapterNumber,
  setChapterNumber,
  callStoryRecap,
}) {
  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: "100%",
        backgroundRepeat: "no-repeat",
        backgroundImage:
          "radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 90%), transparent)",
        ...theme.applyStyles("dark", {
          backgroundImage:
            "radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 16%), transparent)",
        }),
      })}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack
          spacing={2}
          useFlexGap
          sx={{ alignItems: "center", width: { xs: "100%", sm: "70%" } }}
        >
          <Typography
            variant="h1"
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: "center",
              fontSize: "clamp(3rem, 10vw, 3.5rem)",
            }}
          >
            Story&nbsp;
            <Typography
              component="span"
              variant="h1"
              sx={(theme) => ({
                fontSize: "inherit",
                color: "primary.main",
                ...theme.applyStyles("dark", {
                  color: "primary.light",
                }),
              })}
            >
              Recap
            </Typography>
          </Typography>
          <Typography
            sx={{
              textAlign: "center",
              color: "text.secondary",
              width: { sm: "100%", md: "80%" },
            }}
          >
            Has it been a while since you last read your book? Are you confused
            as to the events of where you last left off? Try using Story Recap
            to jog your memory whilst being SPOILER FREE!
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={1}
            useFlexGap
            sx={{ pt: 2, width: { xs: "100%", sm: "550px" } }}
          >
            <InputLabel htmlFor="book-title-hero" sx={visuallyHidden}>
              Book Title
            </InputLabel>
            <TextField
              id="book-title-hero"
              hiddenLabel
              size="small"
              variant="outlined"
              aria-label="Enter your book title"
              placeholder="Book Title"
              fullWidth
              value={bookName}
              onChange={(e) => setBookName(e.target.value)}
              slotProps={{
                htmlInput: {
                  autoComplete: "off",
                  "aria-label": "Enter your book title",
                },
              }}
            />
            <InputLabel htmlFor="page-number-hero" sx={visuallyHidden}>
              Book Title
            </InputLabel>
            <TextField
              id="page-number-hero"
              hiddenLabel
              size="small"
              variant="outlined"
              aria-label="Enter the page number"
              placeholder="Page Number"
              fullWidth
              value={pageNumber}
              onChange={(e) => setPageNumber(e.target.value)}
              slotProps={{
                htmlInput: {
                  autoComplete: "off",
                  "aria-label": "Enter your page number",
                },
              }}
            />
            <InputLabel htmlFor="chapter-number-hero" sx={visuallyHidden}>
              Book Title
            </InputLabel>
            <TextField
              id="chapter-number-hero"
              hiddenLabel
              size="small"
              variant="outlined"
              aria-label="Enter chapter number"
              placeholder="Chapter Number"
              fullWidth
              value={chapterNumber}
              onChange={(e) => setChapterNumber(e.target.value)}
              slotProps={{
                htmlInput: {
                  autoComplete: "off",
                  "aria-label": "Enter the chapter number",
                },
              }}
            />
            <Button
              variant="contained"
              color="primary"
              size="small"
              sx={{ minWidth: "fit-content" }}
              onClick={callStoryRecap}
            >
              Recap
            </Button>
          </Stack>
          {/* <Typography
            variant="caption"
            color="text.secondary"
            sx={{ textAlign: 'center' }}
          >
            By clicking &quot;Start now&quot; you agree to our&nbsp;
            <Link href="#" color="primary">
              Terms & Conditions
            </Link>
            .
          </Typography> */}
        </Stack>
      </Container>
    </Box>
  );
}
