document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  // Retrieve user inputs
  const selectedOption = document.getElementById("selectList").value;
  const pickupOne = document.getElementById("pickupOne").value;
  const dropOff = document.getElementById("pickupTwo").value;
  const selectedTime = document.getElementById("selectedTime").value;
  const tripType = document.getElementById("tripType").value;

  // Perform calculations based on user inputs (this is a placeholder)
  // You need to implement your own logic for calculating the total price
  const totalPrice = calculateTotalPrice(
    selectedOption,
    pickupOne,
    dropOff,
    selectedTime,
    tripType
  );

  // Update the total price element with the calculated result
  document.getElementById("total-price").textContent =
    "Total Price: " + totalPrice;
});

// Function to calculate total price (replace this with your own logic)
function calculateTotalPrice(
  selectedOption,
  pickupOne,
  dropOff,
  selectedTime,
  tripType
) {
  let totalPrice = 0;
  let peakHoursCharge = 15;
  let taxiPrice = 25;
  let busPrice = 21;
  let trainPrice = 8;
  const selectedHour = parseInt(selectedTime.split(":")[0], 10);
//calculating taxi fair for both One way and Return
  if (pickupOne === "Delft" && dropOff === "Cape Town") {
    if (selectedOption === "Taxi") {
      if (tripType === "oneWay") {
        return taxiPrice;
      } else if (tripType === "returnTrip") {
        return (taxiPrice *= 2);
      } else {
        alert("Please select a valid trip type.");
      }
    }
    //calculating Bus fair for both retun and oneway and also check if its peak or none peak hour
     else if (selectedOption === "Bus") {
      if (pickupOne === "Delft" && dropOff === "Cape Town") {
        if (
          (selectedHour >= 5 && selectedHour < 8) ||
          (selectedHour >= 16 && selectedHour < 22)
        ) {
          if (tripType === "oneWay") {
            return busPrice + peakHoursCharge;
          } else if (tripType === "returnTrip") {
            let fair = busPrice + peakHoursCharge;
            return (fair *= 2);
          } else {
            alert("Please select a valid trip type.");
          }
        }
      } else if (tripType === "returnTrip") {
        return (busPrice *= 2);
      }
      return busPrice;
    } 
    //calculating train for both trips and oneway trip
    else if (selectedOption === "Train") {
      if (tripType === "oneWay") {
        return trainPrice;
      } else if (tripType === "returnTrip") {
        return trainPrice *= 2;
      } else {
        alert("Please select a valid trip type.");
      }
    }


    // This is just a placeholder function. You need to implement your own logic.
    // For example, you can calculate the total price based on the selected option, time, trip type, etc.
    // Here, I'm just returning a static value for demonstration purposes.
    // const totalPrice = basePrice + peakHoursSurcharge + returnTripSurcharge;

    // Display the total price
    document.getElementById(
      "total-price"
    ).textContent = `Total Price: R${totalPrice.toFixed(2)}`;
  }
}