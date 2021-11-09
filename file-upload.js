const fs = require('fs');
const xlsx = require('xlsx');
const {START_ROW, END_ROW} = require("./configs/constants.js");


module.exports = () => {

    const filePath = `${__dirname}/test_db.xlsx`;
    const workbook = xlsx.readFile(filePath);
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];

    const users = [];
    for ( let ind = START_ROW; ind < END_ROW; ind++) {

        const username = worksheet[`A${ind}`].v; 
        const email = worksheet[`B${ind}`].v; 
        const phone_number = worksheet[`C${ind}`].v; 
        const template_messages = worksheet[`D${ind}`].v;

        users.push({
            username: username,
            email: email,
            phone_number: phone_number,
            template_messages: template_messages
        })
    }

    return users;

}
