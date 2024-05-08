

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

  if (selectedOption === "Taxi") {
    basePrice = 25;
  } else if (selectedOption === "Bus") {
    basePrice = 21;
  } else if (selectedOption === "Train") {
    basePrice = 8;
  }
  if (pickupOne === "Delft" && dropOff === "Cape Town") {
    totalPrice += 25;
    console.log(totalPrice);
    alert("Pick-up Location: " + pickupOne + "\nDrop-off Location: " + dropOff);

    // Check if it's peak hours (e.g., between 7 AM and 9 AM or 5 PM and 7 PM)
    const selectedHour = parseInt(selectedTime.split(":")[0], 10);
    if (selectedOption === "Bus") {
      if (
        (selectedHour >= 5 && selectedHour < 8) ||
        (selectedHour >= 16 && selectedHour < 22)
      ) {
        if (pickupOne === "Delft" && dropOff === "Cape Town") {
          return peakHoursCharge ;
        }
      }
    }

    if (tripType === "oneWay") {
      alert("You selected One Way trip.");
      return basePrice;
      console.log(totalPrice);
    } else if (tripType === "returnTrip") {
      return totalPrice *= 2;
      console.log(totalPrice);
      alert("You selected Return Trip.");
    
    } else {
      alert("Please select a valid trip type.");
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
  // else if (pickupOne === "Delft" && dropOff === "Cape Town") {
  //   totalPrice += 25;
  //   console.log(totalPrice);
  //   alert("Pick-up Location: " + pickupOne + "\nDrop-off Location: " + dropOff);

    // Check if it's peak hours (e.g., between 7 AM and 9 AM or 5 PM and 7 PM)
    const selectedHour = parseInt(selectedTime.split(":")[0], 10);
    if (selectedOption === "Bus") {
      if (pickupOne === "Delft" && dropOff === "Cape Town") {
        if (
          (selectedHour >= 5 && selectedHour < 8) ||
          (selectedHour >= 16 && selectedHour < 22)
        ) {
          
            return basePrice + peakHoursCharge;
          }
          return basePrice;
          console.log(basePrice);
          alert("Pick-up Location: " + pickupOne + "\nDrop-off Location: " + dropOff);
        }
    
    
      // if (
      //   (selectedHour >= 5 && selectedHour < 8) ||
      //   (selectedHour >= 16 && selectedHour < 22)
      // ) {
      //   if (pickupOne === "Delft" && dropOff === "Cape Town") {
      //     peakHoursCharge += 15;
      //   }
      // }
    
    }

    if (tripType === "oneWay") {
      alert("You selected One Way trip.");
      return basePrice;
      console.log(totalPrice);
    } else if (tripType === "returnTrip") {
      return totalPrice *= 2;
      console.log(totalPrice);
      alert("You selected Return Trip.");
    
    } else {
      alert("Please select a valid trip type.");
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

