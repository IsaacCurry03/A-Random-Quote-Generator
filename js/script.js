/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// generates a random number, assigns it to a variable, then uses it to return a random object from the quotes array

// creates the currentQuoute variable and sets the value to the random object that is returned when the getRandomQuote function is called

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

/***
 * `getRandomQuote` function
***/
let quotes = [
{
    quote:'"Few are those who see with their own eyes and feel with their own hearts."' ,
    source:'Albert Einstein' ,
    citation:'intelligence.mag' ,
    year: 1921 
},
{
    quote:'" “What doesn’t kill you, simply makes you stranger!”"' ,
    source:'Arthur Fleck' ,
    citation:'EveryDayPower.com' ,
    year: 2019 
},
{
    quote:'"...To Live Is To Risk It All..."' ,
    source:'Rick Sanchez' ,
    citation:'ScreenRat.com' ,
    year: 2018 
},
{
    quote:'"Let the future tell the truth, and evaluate each one according to his work and accomplishments. The present is theirs; the future, for which I have really worked, is mine."' ,
    source:'Nikola Tesla' ,
    citation:'Goalcast.com' ,
    year: 1932 
},
{
    quote:'"When something is important enough, you do it even if the odds are not in your favor.".' ,
    source:'Elon Musk' ,
    citation:'INC.MAG' ,
    year: 2017
}];

/***
 * `printQuote` function
***/
// creates the currentQuoute variable and sets the value to the random object that is returned when the getRandomQuote function is called
const colors = [
    {
        background: "   #005670",    
    },
    {
        background: "#FFC0CB", 
    
    },
    {
        background: "#fed8b1", 
        
    },
    {
        background: "#808000", 
        
    },
    {
        background: "   #00FF00", 
        
    },
    {
        background: "#008080", 
        
    },
    {
        background: "#FF0000", 
        
    },
    {
        background: "#D358F7", 
        
    },
    {
        background: "   #ECF6CE", 
        
    },
    {
        background: "#04B4AE", 
        
    },
    {
        background: "#210B61", 
        
    },

];
let timer;

// random() Generates random numbers. Each time the random() function is called, it returns an unexpected value within the specified range.
function getRandomQuote() {
    let randomQuote = Math.floor(Math.random() * quotes.length);

    return quotes[randomQuote];
}
// random() Generates random input colors
function getRandomColor() {
    let randomColor = Math.floor(Math.random() * colors.length);

    return colors[randomColor];
}

// The setInterval() method calls a function or evaluates an expression at specified intervals (in milliseconds).
function startTimer() {
    timer = setInterval(printQuote, 5000);
}


function clearTimer() {
    clearInterval(timer);
}

function printQuote() {
    
    let currentQuote = getRandomQuote();
    let currentColor = getRandomColor();
    let html = "<p class='quote'> " + currentQuote.quote + "</p>";
    html += "<p class='source'> " + currentQuote.source;
    // If statements are logical blocks used within programming.
    if ("citation" in currentQuote) {
        html += "<span class='citation'> " + currentQuote.citation + "</span>";
    }
    
    if ("year" in currentQuote) {
        html += "<span class='year'> " + currentQuote.year + "</span>";
    }
    

    // The Document method getElementById() returns an Element object representing the element whose id property matches the specified string. 
    document.getElementById("quote-box").innerHTML = html;
    document.body.style.background = currentColor.background;
    document.getElementById("load-Quote").style.background = currentColor.button;

    
    clearTimer();
    startTimer();
}

// runs the printQuote function upon initial page load
printQuote();


document.getElementById('load-Quote').addEventListener("click", printQuote, false);

