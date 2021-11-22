# memory-game
A simple memory game made to run on mobile devices as a PWA.

Installing the PWA should make it work perfectly fine on the mobile device even if it has no internet connection.

To do it, just just serve the app by any means (VSCode Live Server plugin, npx serve or even XAMPP) and simulate a https certificate 
(like using "chrome://flags/#unsafely-treat-insecure-origin-as-secure" on the mobile device to trust the ip of the server).

As you do it and access the app, an install banner should pop-up at the bottom of the page.
