//
// GoingElectricStromtankstelleToMaps.js
//
// A bookmarklet to take you to Maps from the description page
// of a charging station of GoingElectric.

var t = function() {
    var mode = 'AppleMaps'; // 'GoogleMaps'
    var srcPrefix = "https://api.goingelectric.de/maps/";
    var re = new RegExp('.*/static/([0-9]+\.[0-9]+),([0-9]+\.[0-9]+),([0-9]+)/.*');
    var url;
    if(mode==='AppleMaps') {
        // https://developer.apple.com/library/archive/featuredarticles/iPhoneURLScheme_Reference/MapLinks/MapLinks.html
        url = document.querySelector('img[src^="'+srcPrefix+'"]')
            .src.replace(re,
                'https://maps.apple.com/?sll=$2,$1&z=$3&q=$2,$1');
    } else if (mode==='GoogleMaps') {
        // https://developers.google.com/maps/documentation/ios-sdk/urlscheme
        url = document.querySelector('img[src^="'+srcPrefix+'"]')
            .src.replace(re,
                'comgooglemaps://center=$2,$1&zoom=$3&q=$2,$1');
    }
    window.location.href=url;
    return false;
}; t();
