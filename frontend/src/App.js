// frontend/src/App.js
import React, { useEffect, useState } from 'react';

function App() {
    const [message, setMessage] = useState('');
    const [bookName, setBookName] = useState('book1');
    const [pageNumber, setPageNumber] = useState('page1');
    const [chapter, setChapter] = useState('chapter1');

    setBookName('A Game of Thrones')
    setPageNumber('200')
    setChapter('3')

    useEffect(() => {
        const fetchData = () => {
            const userData = { bookName, pageNumber, chapter }
        fetch("http://localhost:5000/recapStory", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(userData)
        }) // Request to backend API
        .then((response) => response.json())
        .then((data) => setMessage(data.message))
        .catch((error) => console.error("Error fetching data:", error));
        };

        // call fetchData once
        fetchData();

    }, []);


return (
    <div>
        <h1>Frontend Connected to Backend</h1>
        <p>Backend says: {message}</p>
    </div>
);
}

export default App;
