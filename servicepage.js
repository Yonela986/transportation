document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  // Retrieve user inputs
  const selectedOption = document.getElementById("selectList").value;
  const pickupOne = document.getElementById("pickupOne").value;
  const dropOff = document.getElementById("pickupTwo").value;
  const selectedTime = document.getElementById("selectedTime").value;
  const tripType = document.getElementById("tripType").value;


  //Error message when nothing has been selected
  //Validate each input field
  // Perform validation for missing inputs
  let isValid = true;
  const errorMessages = [];

  if (!selectedOption || !pickupOne || !dropOff || !selectedTime || !tripType) {
    isValid = false;
    errorMessages.push("Please fill in all fields.");
  }

  // Display error messages if any
 
   
    const errorMessageElement = document.getElementById("selectListError");
    errorMessageElement.textContent = errorMessages.join(" ");
    document.body.appendChild(errorMessageElement);

    // Set timer to remove error message after 5 seconds
    const timerId = setTimeout(() => {
        document.body.removeChild(errorMessageElement);
        // Optional: Cleanup tasks associated with the timer
        clearTimeout(timerId);
    }, 5000); // 5 seconds in milliseconds



  // Calculate total price if all inputs are valid
  if (isValid) {
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
//   let isValid = true;

//   // Validate selectList
//   if (!selectedOption) {
//     document.getElementById("selectListError").textContent = "Please choose an option.";
//     isValid = false;
//   } else {
//     document.getElementById("selectListError").textContent = "";
//   }

//   // Validate pickupOne
//   if (!pickupOne) {
//     document.getElementById("pickupOneError").textContent = "Please enter a pickup location.";
//     isValid = false;
//   } else {
//     document.getElementById("pickupOneError").textContent = "";
//   }

//   // Validate pickupTwo
//   if (!pickupTwo) {
//     document.getElementById("pickupTwoError").textContent = "Please enter a drop-off location.";
//     isValid = false;
//   } else {
//     document.getElementById("pickupTwoError").textContent = "";
//   }

//   // Validate selectedTime
//   if (!selectedTime) {
//     document.getElementById("selectedTimeError").textContent = "Please select a time.";
//     isValid = false;
//   } else {
//     document.getElementById("selectedTimeError").textContent = "";
//   }

//   // Validate tripType
//   if (!tripType) {
//     document.getElementById("tripTypeError").textContent = "Please select a trip type.";
//     isValid = false;
//   } else {
//     document.getElementById("tripTypeError").textContent = "";
//   }

//   // Perform calculations based on user inputs (this is a placeholder)
//   // You need to implement your own logic for calculating the total price
//  if(isValid){
//   const totalPrice = calculateTotalPrice(
//     selectedOption,
//     pickupOne,
//     dropOff,
//     selectedTime,
//     tripType
//   );
//    // Update the total price element with the calculated result
//    document.getElementById("total-price").textContent =
//    "Total Price: " + totalPrice;
//  } 

 
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

        return busPrice *= 2;
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
