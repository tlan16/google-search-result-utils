// ==UserScript==
// @name         Google Search Result Utils
// @namespace    https://github.com/tlan16/google-search-result-utils
// @version      1.0.1
// @description  Modifies google search result links
// @author       Frank Lan
// @match        https://www.google.com.au/*
// @match        https://www.google.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=google.com.au
// @run-at      document-idle
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const setNewTab = () => {
        const selectors = [`body a:not([href=""]):not([target="_blank"])`];
        for (const selector of selectors) {
            for (const h3 of document.querySelectorAll(selector)) {
                if (h3?.tagName === 'H3') {
                    if (!!h3.parentElement?.getAttribute("target")) continue;
                    h3.parentElement?.setAttribute("target", "_blank");
                }
                if (h3?.tagName === 'A') {
                    if (!!h3?.getAttribute("target")) continue;
                    h3?.setAttribute("target", "_blank");
                }
            }
        }
    }

    const cronJob = () => {
        setNewTab();
    }


    setInterval(cronJob, 1000)
})();
