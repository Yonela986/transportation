document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  // Retrieve user inputs
  const selectedOption = document.getElementById("selectList").value;
  const pickupOne = document.getElementById("pickupOne").value;
  const dropOff = document.getElementById("pickupTwo").value;
  const selectedTime = document.getElementById("selectedTime").value;
  const tripType = document.getElementById("tripType").value;

  // Display error message
  const isEmpty =
    !selectedOption || !pickupOne || !dropOff || !selectedTime || !tripType;

  if (isEmpty) {
    const errorMessageElement = document.createElement("div");
    errorMessageElement.className.add("error-message");
    errorMessageElement.textContent = "Please fill in all fields.";
    // body.appendChild(errorMessageElement);
    console.log(errorMessageElement);

    // Set timer to remove error message after 5 seconds
    const timerId = setTimeout(() => {
      body.removeChild(errorMessageElement);
      clearTimeout(timerId);
    }, 5000); // 5 seconds in milliseconds
  } else {
    // If all inputs are filled, calculate total price
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
  }
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
      if (tripType === "oneWay") {
        if (
          (selectedHour >= 5 && selectedHour < 8) ||
          (selectedHour >= 16 && selectedHour < 22)
        ) {
          return busPrice + peakHoursCharge;
        }
        return busPrice;
      } else if (tripType === "returnTrip") {
        if (
          (selectedHour >= 5 && selectedHour < 8) ||
          (selectedHour >= 16 && selectedHour < 22)
        ) {
          let fair = busPrice + peakHoursCharge;
          return (fair *= 2);
        }

        return (busPrice *= 2);
      } else {
        alert("Please select a valid trip type.");
      }
    }
    //calculating train for both trips and oneway trip
    else if (selectedOption === "Train") {
      if (tripType === "oneWay") {
        return trainPrice;
      } else if (tripType === "returnTrip") {
        return (trainPrice *= 2);
      } else {
        alert("Please select a valid trip type.");
      }
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
