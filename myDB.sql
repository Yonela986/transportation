-- SQLite

CREATE TABLE formData (
	selectedOption NOT NULL,
    pickupOne TEXT NOT NULL,
    dropOff TEXT NOT NULL,
    selectedTime INT NOT NULL,
    tripType NOT NULL
	
);
const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('myDB.sql');

function insertFormData(formData, callback) {
    const insertQuery = `INSERT INTO formData (selectList, pickupOne, pickupTwo, selectedTime, tripType) VALUES (?, ?, ?, ?, ?)`;
    const values = [
        formData.selectList,
        formData.pickupOne,
        formData.pickupTwo,
        formData.selectedTime,
        formData.tripType
    ];

    db.run(insertQuery, values, function(err) {
        if (err) {
            console.error('Error inserting data into SQLite table:', err.message);
            callback(err);
        } else {
            console.log(`Rows inserted: ${this.changes}`);
            callback(null, this.changes);
        }
    });
}



module.exports = {
    insertFormData
};

-- db.run(`INSERT INTO formData (selectedOption, pickupOne, dropOff, selectedTime,tripType) VALUES (?, ?, ?)`, [
--   formData.selectedOption,
--   formData.pickupOne,
--   formData.dropOff,
--     formData.selectedTime,
--       formData.tripType,
-- ], (err) => {
--   if (err) {
--     console.error('Error inserting form data:', err);
--   } else {
--     console.log('Form data inserted successfully');
--   }
-- });


