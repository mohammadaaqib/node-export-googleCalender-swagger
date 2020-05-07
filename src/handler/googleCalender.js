const fs = require('fs');
const { google } = require('googleapis');
const path = require("path");
const SCOPES = ['https://www.googleapis.com/auth/calendar'];

const TOKEN_PATH = 'token.json';


module.exports = class GoogleCalender {

    static async getUrl(req, res) {
        let oAuth2Client = await _getOAuth();
        const authUrl = oAuth2Client.generateAuthUrl({
            access_type: 'offline',
            scope: SCOPES,
        });
        res.send(authUrl);
    }


    static async saveToken(req, res) {
        let oAuth2Client = await _getOAuth();
        console.log(req.query)
        oAuth2Client.getToken(req.query.code, (err, token) => {
            if (err) res.send('Error retrieving access token');
            oAuth2Client.setCredentials(token);
            // Store the token to disk for later program executions
            fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
                if (err) return console.error(err);
                res.send('token is get success fully')
            });
        })

    }
}
function _getOAuth() {
    let promise = new Promise((res, rej) => {

        fs.readFile('credentials.json', (err, content) => {
            if (err) rej('Error loading client secret file:', err);
            let credentials = JSON.parse(content);
            const { client_secret, client_id, redirect_uris } = credentials.web;
            let oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);
            res(oAuth2Client);
        });
    });
    return promise


}