//
// GoingElectricStromtankstelleToMaps.js
//
// A bookmarklet to take you to Maps from the description page
// of a charging station of GoingElectric.

var t = function() {
    var mode = 'AppleMaps';
    var srcPrefix = "https://api.goingelectric.de/maps/";
    var re = new RegExp('.*/static/(-?[0-9]+\.[0-9]+),(-?[0-9]+\.[0-9]+),([0-9]+)/.*');
    var url;
    if(mode==='AppleMaps') {
        url = document.querySelector('img[src^="'+srcPrefix+'"]')
            .src.replace(re,
                'https://maps.apple.com/?sll=$2,$1&z=$3&q=$2,$1');
    } else if (mode==='GoogleMaps') {
        url = document.querySelector('img[src^="'+srcPrefix+'"]')
            .src.replace(re,
                'comgooglemaps://center=$2,$1&zoom=$3&q=$2,$1');
    }
    window.location.href=url;
    return false;
}; t();
