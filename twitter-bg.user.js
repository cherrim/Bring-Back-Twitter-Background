// ==UserScript==
// @name       Bring Back Twitter Background
// @namespace  http://twitter.com/cherrim
// @version    0.1
// @description  lets you set a personal background for your twitter homepage & notifs. 
// @match      https://twitter.com 
// @match      https://twitter.com/*
// @grant      none
// ==/UserScript==

function addCss(cssString) { 
  var head = document.getElementsByTagName('head')[0]; 
  var newCss = document.createElement('style'); 
  newCss.type = "text/css"; 
  newCss.innerHTML = cssString; 
  head.appendChild(newCss); 
} 
addCss ( 
// ************************************* INSTRUCTIONS *************************************
// Replace #000000 with whatever hex code colour you want
// erase the url(xxx) part if you don't want a background image
// if you want an image:
// upload it to twitter (or, if it's still there, use the url from your old bgimage in your Design tab)
// replace xxx with that image's URL
  // **NOTE**: The image MUST be on twitter's domain (twimg, etc.) or else twitter won't load it for security reasons
  'body { background: #000000 url(xxx) ! important; }' 

);
