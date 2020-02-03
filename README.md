### SpotifyShortcut
Will allow for having a shortcut to automatically add the current song playing to a specified playlist by going to localhost:3000, this is done using spotify's REST API.

The reason this project has to run an express server is because spotify needs to redirect the user to a website after authenticating, (while sending the access token as part of this redirect request).

## Installation
1. Install node.js if you haven't already, this project is tested with 12.10.0
2. Inside the APIAuthentication/authPage.html you have to change the playlistId to your playlist id. This is found inside spotify by right-clicking your playlist->share->Copy spotify URI, you should only add the last part in this URI.
3. Clone the repository and run `npm install` in the SpotifyShortcut folder
4. Inside the same folder run `node server.js` (This will run on localhost port 3000)
5. Simply navigate to localhost:3000 in your browser and sign in to spotify.
6. Each time you go to localhost:3000 your current playing track will be added to your specified playlist from step 2
