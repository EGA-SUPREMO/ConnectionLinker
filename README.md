# bot-linkedin
Bot to get connections faster in LinkedIn, I recommend use Tapermonkey or Greasemonkey

The bot uses cookies to store the links of the profiles and the current positition, in order to store the links, you need to put the URLs in a cookie named 'links' like this:

    function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        var expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires;
    }
    
    
    setCookie('counter', 0, 200);
    
    setCookie('links', 'alejandro-garcia-83b3b4141,anotherone', 200);

Note that instead use https://www.linkedin.com/in/alejandro-garcia-83b3b4141 I put 'alejandro-garcia-83b3b4141', to save space and store more links. The links are separate by comma without spaces.

License:

This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.
