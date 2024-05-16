-- SQLite

CREATE TABLE formData (
	selectedOption NOT NULL,
    pickupOne TEXT NOT NULL,
    dropOff TEXT NOT NULL,
    selectedTime INT NOT NULL,
    tripType NOT NULL
	
);

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

db.close(); 
