var express = require('express');
const fs = require('fs');
const { google } = require('googleapis');
const readline = require('readline');
const router = require('./src/routes/router');
const mongo = require('./mongooes');

const swaggerDoc = require('./swaggerDoc');
require('dotenv').config();




let app = express();
router(app);
swaggerDoc(app);
let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


module.exports.db = {
    mongo
}

//app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// app.get('/', function (req, res) {
//     // res.send('Hello World!');



//     // If modifying these scopes, delete token.json.
//     const SCOPES = ['https://www.googleapis.com/auth/calendar'];
//     // The file token.json stores the user's access and refresh tokens, and is
//     // created automatically when the authorization flow completes for the first
//     // time.
//     const TOKEN_PATH = 'token.json';

//     // Load client secrets from a local file.
//     fs.readFile('credentials.json', (err, content) => {
//         if (err) return console.log('Error loading client secret file:', err);
//         // Authorize a client with credentials, then call the Google Calendar API.
//         authorize(JSON.parse(content), insertEvents);

//         //My Code
//         // let credentials = JSON.parse(content)
//         // const { client_secret, client_id, redirect_uris } = credentials.web;
//         // const oAuth2Client = new google.auth.OAuth2(
//         //     client_id, client_secret, redirect_uris[0]);
//         // authUrl = oAuth2Client.generateAuthUrl({
//         //     access_type: 'offline',
//         //     scope: SCOPES,
//         // });
//         // res.send(authUrl);

//     });
//     /**
//      * Create an OAuth2 client with the given credentials, and then execute the
//      * given callback function.
//      * @param {Object} credentials The authorization client credentials.
//      * @param {function} callback The callback to call with the authorized client.
//      */
//     function authorize(credentials, callback) {
//         console.log('credential', credentials)
//         const { client_secret, client_id, redirect_uris } = credentials.web;
//         const oAuth2Client = new google.auth.OAuth2(
//             client_id, client_secret, redirect_uris[0]);

//         // Check if we have previously stored a token.
//         fs.readFile(TOKEN_PATH, (err, token) => {
//             if (err) return getAccessToken(oAuth2Client, callback);
//             oAuth2Client.setCredentials(JSON.parse(token));
//             callback(oAuth2Client);
//         });
//     }
//     /**
//      * Get and store new token after prompting for user authorization, and then
//      * execute the given callback with the authorized OAuth2 client.
//      * @param {google.auth.OAuth2} oAuth2Client The OAuth2 client to get token for.
//      * @param {getEventsCallback} callback The callback for the authorized client.
//      */
//     function getAccessToken(oAuth2Client, callback) {
//         const authUrl = oAuth2Client.generateAuthUrl({
//             access_type: 'offline',
//             scope: SCOPES,
//         });
//         console.log('Authorize this app by visiting this url:', authUrl);
//         const rl = readline.createInterface({
//             input: process.stdin,
//             output: process.stdout,
//         });
//         rl.question('Enter the code from that page here: ', (code) => {
//             rl.close();
//             //  console.log('code', code)
//             console.log('in tet')
//             oAuth2Client.getToken(code, (err, token) => {
//                 if (err) return console.error('Error retrieving access token', err);
//                 oAuth2Client.setCredentials(token);
//                 // Store the token to disk for later program executions
//                 fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
//                     if (err) return console.error(err);
//                     console.log('Token stored to', TOKEN_PATH);
//                 });
//                 callback(oAuth2Client);
//             });
//         });
//     }
//     /**
//      * Lists the next 10 events on the user's primary calendar.
//      * @param {google.auth.OAuth2} auth An authorized OAuth2 client.
//      */

//     function insertEvents(auth) {
//         const calendar = google.calendar({ version: 'v3', auth });
//         var event = {
//             summary: 'Google I/O 2015',
//             location: '800 Howard St., San Francisco, CA 94103',
//             description: "A chance to hear more about Google's developer products.",
//             start: {
//                 dateTime: '2020-04-25T09:00:00-07:00',
//                 timeZone: 'America/Los_Angeles'
//             },
//             end: {
//                 dateTime: '2020-04-25T17:00:00-07:00',
//                 timeZone: 'America/Los_Angeles'
//             },
//             // recurrence: ['RRULE:FREQ=DAILY;COUNT=1'],
//             attendees: [{ email: 'fazeelanwar77@gmail.com' }, { email: 'maqib@stellatechnology.com' }],
//             reminders: {
//                 useDefault: false,
//                 overrides: [
//                     { method: 'email', minutes: 500 }
//                 ]
//             }
//         };
//         calendar.events.insert(
//             {
//                 auth: auth,
//                 calendarId: 'primary',
//                 resource: event
//             },
//             function (err, event) {
//                 if (err) {
//                     console.log(
//                         'There was an error contacting the Calendar service: ' + err
//                     );
//                     return;
//                 }
//                 console.log('Event created: %s', event.data.htmlLink);
//             }
//         );
//     }
//     // function listEvents(auth) {
//     //     console.log('in list event')
//     //     const calendar = google.calendar({ version: 'v3', auth });
//     //     calendar.events.list({
//     //         calendarId: 'primary',
//     //         timeMin: (new Date()).toISOString(),
//     //         maxResults: 10,
//     //         singleEvents: true,
//     //         orderBy: 'startTime',
//     //     }, (err, res) => {
//     //         if (err) return console.log('The API returned an error: ' + err);
//     //         const events = res.data.items;
//     //         if (events.length) {
//     //             console.log('Upcoming 10 events:');
//     //             events.map((event, i) => {
//     //                 const start = event.start.dateTime || event.start.date;
//     //                 console.log(`${start} - ${event.summary}`);
//     //             });
//     //         } else {
//     //             console.log('No upcoming events found.');
//     //         }
//     //     });
//     // }
// });

app.post('/setCode', function (req, res) {
    console.log(req.body.code)
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});