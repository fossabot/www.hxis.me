var quotes = new Array();
quotes[0] = "https://api.i-meto.com/bing?new";
quotes[1] = "https://api.ikmoe.com/moeu-api.php";
quotes[2] = "https://api.paugram.com/wallpaper/?source=sina";

var q = quotes.length;
var whichquote = Math.round(Math.random() * (q - 1));

function showquote() {
    document.write('<style>' + '@media only screen and (min-width:768px){body{background-image:url(' + quotes[
            whichquote] + ')}}' + '@media only screen and (max-width:768px){body{background-image:url(' +
        quotes[whichquote] + ')}}' + '</style>');
}

showquote();
