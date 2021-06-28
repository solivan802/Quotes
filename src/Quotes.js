import React, { useEffect, useState } from 'react';
import './Style.css';

const Quotes = () => {
    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');

    useEffect(() => {
        getQuote()
    },[]);

    const getQuote = () => {
        let url = `https://gist.githubusercontent.com/carmandomx/3d7ac5f15af87a587e1d25f5ba96de61/raw/e2d848b87c730a580077de221666343c15b1a243/gistfile1.txt`;
        fetch(url)
        .then(res => res.json())
        .then(data => {
            let dataQuotes = data.quotes;
            let randomNum = Math.floor(Math.random() * dataQuotes.length);
            let randomQuote = dataQuotes[randomNum];
            
            setQuote(randomQuote.quote);
            setAuthor(randomQuote.author);
        })
    }
    
    const handleClick = () => {
        getQuote();
    }
    return (
        <div id="quote-box"> <div id="text"> <p>{quote}</p></div>
            <div id="Author"> <p>-{author}</p> </div>
            
            <div id="buttons"> 
           
            <div onClick={handleClick}> <button id="new-quote">New Quote </button></div>
            </div>

        
        
    </div>);
    
}
export default Quotes;