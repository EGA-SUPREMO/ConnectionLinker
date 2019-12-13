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
    
    var selected;

    try {
        var firstname;
        firstname = document.querySelector('.t-24').innerText.split(" ")[0];
        
        selected = document.querySelector(".pv-s-profile-actions");
        selected.click();
        selected = document.querySelector("[aria-label='Add a note']");
        selected.click();

        selected = document.querySelector('textarea[name="message"]');
        selected.focus();
        selected.value = 'Hi' + firstname + '! Custom message.';
    
        selected = document.querySelector("[aria-label='Send invitation']");
        if(selected == null){
            selected = document.querySelector("[aria-label='Done']");
        }
    
        selected.click();
    } catch(e) {
        localStorage.bug_log = localStorage.bug_log + ',' + window.location.href.toString();
        localStorage.bug_log1 = window.location.href.toString();
    }
    
    var i = localStorage.counter;
    localStorage.counter -= -1;

    window.location.href = "https://www.linkedin.com/in/" + localStorage.links.split(",")[i] + "/";
})();
