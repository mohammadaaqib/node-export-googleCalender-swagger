
const clientModel = require('../models/client')
const { Parser } = require('json2csv');
const fields = [{
    label: 'First Name',
    value: 'firstName'
}, {
    label: 'Last Name',
    value: 'lastName'
},
{
    label: 'Status',
    value: (row) => row.active === true ? 'Active' : 'InActive'
},
{
    label: 'Gender',
    value: 'gender'
}];
module.exports = class ExportCsv {
    static async generateCsv(req, res) {
        let clietnObj = await _getClientData();
        const json2csvParser = new Parser({ fields });
        const csv = json2csvParser.parse(clietnObj);
        res.attachment('client.csv');
        res.status(200).send(csv);


    }
}
function _getClientData() {
    return clientModel.find({ 'clientId': { $exists: true } }).exec()
}