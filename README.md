# Bot for LinkedIn
Bot to get connections faster in LinkedIn

This bot clicks in the button "connect" and the button "add a note" then in the textarea paste the custom message then manually you need to press any key and the bot click in the button Send, change the url and reloads the page.

If enable the feature of add a note, this bot would become semi-automatic. that means that you need to press any key after it pastes the custom message in the textarea to update its content and avoid send an empty message.

The bot uses localStorage to save the links of the profiles and the current positition, in order to store the links, you need to put the URLs in a command like this:
```javascript
    localStorage.counter = 0;
    
    localStorage.links = 'alejandro-garcia-83b3b4141,anotherone';
```
Note that instead use https://www.linkedin.com/in/alejandro-gar I put 'alejandro-gar', to save space and store more links. The links are separate by comma without spaces.

Is required either Tapermonkey or Greasemonkey

## License:

This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.
