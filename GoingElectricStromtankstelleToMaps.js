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
        // See doc https://developer.apple.com/library/archive/featuredarticles/iPhoneURLScheme_Reference/MapLinks/MapLinks.html#//apple_ref/doc/uid/TP40007899-CH5-SW1
        url = document.querySelector('img[src^="'+srcPrefix+'"]')
            .src.replace(re,
                'https://maps.apple.com/?sll=$2,$1&z=$3&q=$2,$1');
    } else if (mode==='GoogleMaps') {
        // See doc at https://developers.google.com/maps/documentation/urls/ios-urlscheme
        url = document.querySelector('img[src^="'+srcPrefix+'"]')
            .src.replace(re,
                'comgooglemaps://?center=$2,$1&zoom=$3&q=$2,$1');
    }
    window.location.href=url;
    return false;
}; t();
