function toggleOverlay() {

    var options = document.querySelector('#overlay');
    var circle = document.querySelector('#circle');

    if (options.value == 'noOverlay') {
        circle.style.background = '';
    }
    else if (options.value == 'CD') {
        circle.style.background = "url('images/circle.png')";
    }
    else if (options.value == 'Vinyl') {
        circle.style.background = "url('images/innercircle.png')";    }

    localStorage.setItem('Overlay', options.value);
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
    var artist = document.querySelector('#artist');

    text.innerHTML = "<span id='inside'>" + album.value + "<div class='artistName' id='artist'>"+ artist.innerHTML; +"</div> </span>";
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
    console.log('reload');

    if (localStorage.getItem('ArtistName') !== null) {
        document.querySelector('#ArtistName').value = localStorage.getItem('ArtistName');
        setArtistName();
    }
    if (localStorage.getItem('AlbumName') !== null) {
        document.querySelector('#AlbumName').value = localStorage.getItem('AlbumName');
        setAlbumName();
    }
    if (localStorage.getItem('ArtistFontValue') !== null){
        document.querySelector('#ArtistFont').value = localStorage.getItem('ArtistFontValue');
        updateArtistFont();
        
    }

    if (localStorage.getItem('ArtistColourValue') !== null) {
        document.querySelector('#ArtistFontColour').value = localStorage.getItem('ArtistColourValue');
        updateArtistFontColour();

    }


    if (localStorage.getItem('AlbumFontValue') !== null) {
        document.querySelector('#AlbumFont').value = localStorage.getItem('AlbumFontValue');
        updateAlbumFont();
    }

    if (localStorage.getItem('AlbumColourValue') !== null) {
        document.querySelector('#AlbumFontColour').value = localStorage.getItem('AlbumColourValue');
        updateAlbumFontColour();
    }

    if (localStorage.getItem('Overlay') !== null) {
        document.querySelector('#overlay').value = localStorage.getItem('Overlay');
        toggleOverlay();

    }

}
