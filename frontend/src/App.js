import React, { useEffect, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/material';
import Divider from '@mui/material/Divider';
import Hero from './components/Hero';
import Chatbox from './components/Chatbox';
import AppTheme from './sharedTheme/AppTheme'
import GitHubLink from './components/GitHub';

function App() {
    const [bookName, setBookName] = useState('');
    const [pageNumber, setPageNumber] = useState('');
    const [chapterNumber, setChapterNumber] = useState('');
    const [summary, setSummary] = useState('')

    const callStoryRecap = () => {
        const userData = { bookName, pageNumber, chapterNumber }
        fetch("http://localhost:5000/recapStory", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData)
        }) // Request to backend API
            .then((response) => response.json())
            .then((data) => setSummary(data.message))
            .catch((error) => console.error("Error fetching data:", error));
    };

    return (

        <AppTheme>
            <CssBaseline enableColorScheme />
            <Hero
                bookName={bookName}
                setBookName={setBookName}
                pageNumber={pageNumber}
                setPageNumber={setPageNumber}
                chapter={chapterNumber}
                setChapterNumber={setChapterNumber}
                callStoryRecap={callStoryRecap}
            />
            <div>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        backgroundColor: 'background.default'
                    }}
                >
                    <Chatbox summary={summary} />
                </Box>
                <Divider sx={{ margin: `30px 0` }} />
                <GitHubLink />
            </div>
        </AppTheme>
    );
}

export default App;
