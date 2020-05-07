const googleHandler = require('../handler/googleCalender')
const exportExcel = require('../handler/excelExport');
const exportCsv = require('../handler/exportCsv')

const routers = (app) => {
    /**
     * @swagger
     * /getURL:
     *   get: 
     *     responses: 
     *       200:
     *         description: get URL of google.
     */
    app.get('/getURL', googleHandler.getUrl);
    /**
     * @swagger
     * /savetoken:
     *   post: 
     *      parameters:
     *         - in: query
     *           name: code
     *           schema:
     *             type: string
     *           required: true
     *      responses: 
     *       200:
     *         description: save URL of DB.
     */
    app.post('/savetoken', googleHandler.saveToken);

    /**
     * @swagger
     * /getexcel:
     *   get: 
     *     responses: 
     *       200:
     *         description: get URL of google.
     */
    app.get('/getexcel', exportExcel.generateExcel);

    /**
     * @swagger
     * /getcsv:
     *   get: 
     *     responses: 
     *       200:
     *         description: get URL of google.
     */
    app.get('/getcsv', exportCsv.generateCsv);
}

module.exports = routers;