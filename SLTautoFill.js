// ==UserScript==
// @name         SLT Auto Fill
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Auto Fill Username and the Password
// @author       HiKi
// @match        https://www.internetvas.slt.lk/SLTVasPortal-war/application/index.nable
// @include      https://internetvas.slt.lk/SLTVasPortal-war/application/index.nable
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var username = 94373121984;
    var password = "970222839AkhilaSuraj";
    document.querySelector("div > div > div.col-md-8 > div:nth-child(1) > div > div.col-md-8 > div:nth-child(1) > div > form#j_idt6 > div:nth-child(2) > div > input").value = username;
    document.querySelector("div > div > div.col-md-8 > div:nth-child(1) > div > div.col-md-8 > div:nth-child(1) > div > form#j_idt6 > div:nth-child(3) > div.col-sm-8 > input").value = password;

})();
