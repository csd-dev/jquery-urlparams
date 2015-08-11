/**
* https://github.com/csd-dev/jquery-urlparams
* jQuery plugin to get URL parameters
* 2015 - Daniel Csaba
*/

$.extend({
  getUrlVars: function(){
    var vars = [], element, keys = [];
	if(window.location.href.indexOf('?')>= 0) {
		var elements = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
		for(var i = 0; i < elements.length; i++)
		{
		  element = elements[i].split('=');
		  keys.push(element[0]);
		  vars[element[0]] = element[1];
		}
	}
	vars['url_param_keys']=keys;
	
    return vars;
  },
  getUrlVar: function(key){
    return $.getUrlVars()[key];
  }
})