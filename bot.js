// ==UserScript==
// @name         New Userscript
// @namespace    https://testtoshowskills.000webhostapp.com/
// @version      0.1
// @description  try to take over the world!
// @author       EGA SUPREMO
// @match        https://www.linkedin.com/in/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    
    function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        var expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires;
    }

    function getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i <ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
            }
        }
        return "";
    }
    var selected;

    selected = document.querySelector(".pv-s-profile-actions");
    selected.click();
    selected = document.querySelector("[aria-label='Add a note']");
    selected.click();

    selected = document.querySelector('textarea[name="message"]')
    selected.focus();
    selected.value = 'Custom message.';
    
    if(selected == null){
        selected.click();
    } else {
        selected = document.querySelector("[aria-label='Done']");
        selected.click();
    }
})();
