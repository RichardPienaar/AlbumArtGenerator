function toggleOverlay() {
    
    var options = document.querySelector('#overlay');
    var circle = document.querySelector('#circle');

    if (options.value == 'noOverlay') {
        circle.style.background = '';
    }
    else if (options.value == 'CD') {
        circle.style.background = "url('images\circle.png')";
    }
    else if (options.value == 'Vinyl') {
        circle.style.background = "url('images\innercircle.png')";    }

}
    
function setArtistName() {
    // sets artist name
    var artist = document.querySelector('#ArtistName');
    var text = document.querySelector('#artist');
    text.innerHTML = artist.value;

    localStorage.setItem('ArtistName', text.innerHTML);

    return artist.value;
}

function setAlbumName() {
    // sets album name
    var album = document.querySelector('#AlbumName');
    var text = document.querySelector('#album');

    text.innerHTML = "<span id='inside'>" + album.value + "<div class='artistName' id='artist'>"+ setArtistName(); +"</div> </span>";
    localStorage.setItem('AlbumName', album.value);
}

function updateArtistFont() {
    var text = document.querySelector('#artist');
    var fontValue = document.querySelector('#ArtistFont').value;
    text.style.fontSize = fontValue + "px";

    localStorage.setItem('ArtistFontValue', fontValue);
}

function updateArtistFontColour() {
    var text = document.querySelector('#artist');
    var colorValue = document.querySelector('#ArtistFontColour').value;
    text.style.color = colorValue;

    localStorage.setItem('ArtistColourValue', colorValue);
}

function updateAlbumFont() {
    var text = document.querySelector('#album');
    var fontValue = document.querySelector('#AlbumFont').value;
    text.style.fontSize = fontValue + "px";

    localStorage.setItem('AlbumFontValue', fontValue);
}

function updateAlbumFontColour() {
    var text = document.querySelector('#album');
    var colorValue = document.querySelector('#AlbumFontColour').value;
    text.style.color = colorValue;

    localStorage.setItem('AlbumColourValue', colorValue);
}

window.onload = function reloadImage(){
    // Checks local storage for pre filled values
    if (localStorage.getItem('ArtistName') !== null) {
        var artist = document.querySelector('#ArtistName');
        artist.value = localStorage.getItem('ArtistName');
        var text = document.querySelector('#artist');
        text.innerHTML = artist.value;
    }

    if (localStorage.getItem('ArtistFontValue') !== null){
        document.querySelector('#ArtistFont').value = localStorage.getItem('ArtistFontValue');
        
        var text = document.querySelector('#artist');
        text.style.fontSize = document.querySelector('#ArtistFont').value + "px";
    }

    if (localStorage.getItem('ArtistColourValue') !== null) {
        
        document.querySelector('#ArtistFontColour').value = localStorage.getItem('ArtistColourValue');
        
        var text = document.querySelector('#artist');
        text.style.color = document.querySelector('#ArtistFontColour').value;

    }

    if (localStorage.getItem('AlbumName') !== null) {
        var album = document.querySelector('#AlbumName');
        album.value = localStorage.getItem('AlbumName');
        var text = document.querySelector('#album');

        text.innerHTML = "<span id='inside'>" + album.value + "<div class='artistName' id='artist'>"+ setArtistName(); +"</div> </span>";

    }
    
    if (localStorage.getItem('AlbumFontValue') !== null) {
        document.querySelector('#AlbumFont').value = localStorage.getItem('AlbumFontValue');
        var text = document.querySelector('#album');        

        text.style.fontSize = document.querySelector('#AlbumFont').value + "px";
    }

    if (localStorage.getItem('AlbumColourValue') !== null) {
        document.querySelector('#AlbumFontColour').value = localStorage.getItem('AlbumColourValue');

        var text = document.querySelector('#album');
        text.style.color = document.querySelector('#AlbumFontColour').value;
    }


}