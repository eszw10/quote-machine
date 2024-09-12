import { useState } from 'react';
import './quotes.scss';
import quotesData from './quotesData';

const Quotes = () => {
    const generateRandomQuote = () => {
        return quotesData[Math.floor(Math.random() * quotesData.length)];
    }
    const [quotes, setQuotes] = useState(generateRandomQuote())
    return (
        <div id="quote-box">
            <div id="text-container">
                <i className="fa-solid fa-quote-left"></i>
                <p id="text">{quotes.quote}</p>
            </div>
            <p id="author">~ {quotes.author}</p>
            <div className="btn-container">
                <button>
                    <a href="https://twitter.com/intent/tweet" target="_blank" id="tweet-quote"><i className="fa-brands fa-x-twitter"></i></a>
                </button>
                <button onClick={() => setQuotes(generateRandomQuote())} id="new-quote">New Quote</button>
            </div>
        </div>
    );
}
 
export default Quotes;