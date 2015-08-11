# jquery-urlparams
jQuery plugin to get URL parameters

Usage:
var urlVars = $.getUrlVars();

Keys in the URL:
var keys = urlVars.url_param_keys;

Example URL: http://mysite.com/index.php?page=1&category=10

var page= urlVars.page;
var category = urlVars.category;
