var quotes = new Array();
quotes[0] = "https://api.paugram.com/wallpaper/?source=sina"
quotes[1] = "https://api.i-meto.com/bing"
quotes[2] = "https://source.unsplash.com/random/1920x1080"
quotes[3] = "https://source.unsplash.com/random/1920x1080"
quotes[4] = "https://source.unsplash.com/random/1920x1080"

var q = quotes.length;
var whichquote = Math.round(Math.random() * (q - 1));

function showquote() {
    document.write('<style>' + '@media only screen and (min-width:768px){body{background-image:url(' + quotes[
            whichquote] + ')}}' + '@media only screen and (max-width:768px){body{background-image:url(' +
        quotes[whichquote] + ')}}' + '</style>');
}

showquote();