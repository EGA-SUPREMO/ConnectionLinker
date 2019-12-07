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

    selected = document.querySelector(".pv-s-profile-actions");
    selected.click();
    selected = document.querySelector("[aria-label='Add a note']");
    selected.click();

    selected = document.querySelector('textarea[name="message"]')
    selected.value = 'Message.';
    if(selected == null){
        selected.disabled = false;
        selected.click();
    } else {
        selected = document.querySelector("[aria-label='Done']");
        selected.disabled = false;
        selected.click();
    }
})();
