import React from 'react';
import quotes from '../quotes.json'
import { useState } from 'react';

const getRandom = () => Math.floor(Math.random() * quotes.length);

const colors = [ "#845EC2", "#D65DB1", "#FF6F91", "#FF9671", "#FFC75F", "#F9F871"]

const QuoteBox = () => {

    const [ quote, setQuote ] = useState(quotes[getRandom()])
    
    const changeQuote = () => {
        setQuote(quotes[getRandom()]);
    }

    const color = colors[Math.floor(Math.random()* 6)];

    document.body.style = `background: ${color}`;

    return (
        <div className='Quote' style={{color: color}}>
             <p><i class="fa-solid fa-quote-left"></i>{quote.quote}</p>
             <p className='Author'><i>{quote.author}</i></p>
             <div className='btn'>
             <button onClick={changeQuote} style={{backgroundColor: color}}><i class="fa-solid fa-greater-than"></i></button>
             </div>
        </div>
    );
};

export default QuoteBox;