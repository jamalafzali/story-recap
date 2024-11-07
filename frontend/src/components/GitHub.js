import React from 'react';
import { Button, Typography, Box } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

const GitHubLink = ({ githubUrl = 'https://github.com/jamalafzali' }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                padding: 3,
                borderRadius: '8px',
                boxShadow: 2,
                maxWidth: 400,
                margin: 'auto',
            }}
        >
            <Typography variant="h6" gutterBottom>
                Check out my GitHub!
            </Typography>

            <Button
                variant="contained"
                color="primary"
                href={githubUrl}
                target="_blank"
                startIcon={<GitHubIcon />}
                sx={{
                    fontWeight: 'bold',
                    fontSize: '16px',
                    padding: '10px 20px',
                }}
            >
                Visit GitHub
            </Button>
        </Box>
    );
};

export default GitHubLink;