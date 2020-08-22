# Polx's Bookmarklets

A set of source code for use as bookmarklets which allows 
a careful user to call JS functions of others on useful website. 

- - -

## Going Electric "Stromtankstelle => Maps"

When e-driving and searching for a charging station, the
[directory of "Stromtankstellen"](https://www.goingelectric.de/stromtankstellen/) 
(charging stations) of GoingElectric is an 
effective independent list of stations. However, requesting
a navigation on the mobile having chosen a station is rather
error-prone. Kicking this bookmarklet on the information page
of a charging station will take the Maps application to there.
Click navigate and start driving.

Copy the bookmarklet's URL to your bar:

- For Apple Maps
    - `javascript:void%20function(){(function(){var%20a,b=/.*\/static\/(-%3F[0-9]+.[0-9]+),(-%3F[0-9]+.[0-9]+),([0-9]+)\/.*/;return%20a=document.querySelector(%22img[src^=\%22%22+%22https://api.goingelectric.de/maps/%22+%22\%22]%22).src.replace(b,%22https://maps.apple.com/%3Fsll=$2,$1%26z=$3%26q=$2,$1%22),window.location.href=a,!1})()}();`
- For Google Maps
    - `javascript:void%20function(){(function(){var%20a,b=%22https://api.goingelectric.de/maps/%22,c=/.*\/static\/(-%3F[0-9]+.[0-9]+),(-%3F[0-9]+.[0-9]+),([0-9]+)\/.*/;return%20a=document.querySelector(%22img[src^=\%22%22+b+%22\%22]%22).src.replace(c,%22comgooglemaps://?center=$2,$1%26zoom=$3%26q=$2,$1%22),window.location.href=a,!1})()}();`

More information on the [source page](GoingElectricStromtankstelleToMaps.js).

- - -

## About bookmarklets

Conceptually, bookmarklets are pieces of JavaScript which a somewhat advanced user lets execute
on frequently used pages. They are generally done by independent developers and add function to
particular websites. 

For users: 

- For mobile: Creating a bookmarklet requires you to trick 
  (thanks [cult of mac](https://www.cultofmac.com/500532/how-to-add-bookmarklet-mobile-iphone-safari/)): 
  First create a bookmark to a visited URL, then copy the bookmarklet content, 
  then paste this as URL.
- For desktop: You should be able to find visible links (`a` elements) that users can copy and paste. 
  This cannot be displayed with GitHub.
 
- Only use bookmarklets that you trust! They are as dangerous as pieces of VBScript in Word files.
  However, they can only act if you press them.


For developers:

- Maintain a readable source code
- Compress to the URL-encoded `javascript:` URL using tools such as 
  Chris Zarate's [Bookmarkleter](https://chriszarate.github.io/bookmarkleter/)
  (note: you need to remove comments first)
  
