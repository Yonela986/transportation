document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  // Retrieve user inputs values of each form element and store them in separate variables.
  const selectedOption = document.getElementById("selectList").value;
  const pickupOne = document.getElementById("pickupOne").value;
  const dropOff = document.getElementById("pickupTwo").value;
  const selectedTime = document.getElementById("selectedTime").value;
  const tripType = document.getElementById("tripType").value;

  
// Retrieve values from form elements
const selectedOptionValue = selectedOption.value;
const pickupOneValue = pickupOne.value;
const dropOffValue = dropOff.value;
const selectedTimeValue = selectedTime.value;
const tripTypeValue = tripType.value;

// Create an object to hold the form data
const formData = {
    selectList: selectedOptionValue,
    pickupOne: pickupOneValue,
    pickupTwo: dropOffValue,
    selectedTime: selectedTimeValue,
    tripType: tripTypeValue
};

// Store the form data in localStorage after converting it to a JSON string using JSON.stringify()
localStorage.setItem("formData", JSON.stringify(formData));
   document.getElementById("myForm").reset();


  // Check if data is saved correctly
  console.log('Data saved to local storage:');
  console.log('selectedOption:', selectedOption);
  console.log('pickupOne:', pickupOne);
  console.log('dropOff:', dropOff);
  console.log('selectedTime:', selectedTime);
  console.log('tripType:', tripType);

  // Display error message
  const isEmpty =
    !selectedOption || !pickupOne || !dropOff || !selectedTime || !tripType;

  if (!isEmpty){
  // Display submit message
  const submitMessageElement = document.createElement("div");
  submitMessageElement.classList.add("submit");
  submitMessageElement.textContent = "Form submitted successfully!"; // You can customize this message
  submitMessageElement.style.color = "green"; // Set color to green
  // Append the submit message to a container within the form
  const formContainer = document.getElementById("myForm");
  formContainer.appendChild(submitMessageElement);

  // Set timer to remove submit message after 5 seconds
  const submitTimerId = setTimeout(() => {
      if (submitMessageElement.parentNode === formContainer) {
          formContainer.removeChild(submitMessageElement);
      }
      clearTimeout(submitTimerId);
  }, 3000); // 5 seconds in milliseconds
   }if(isEmpty) {
    const errorMessageElement = document.createElement("div");
    errorMessageElement.classList.add("error-message");
    errorMessageElement.textContent = "Please fill in all fields.";

    // Append the error message to a container within the form
    const formContainer = document.getElementById("myForm");
    formContainer.appendChild(errorMessageElement);
    // Set timer to remove error message after 5 seconds
    const timerId = setTimeout(() => {
      if (errorMessageElement.parentNode === formContainer) {
        formContainer.removeChild(errorMessageElement);
      }
      clearTimeout(timerId);
    }, 3000); // 5 seconds in milliseconds
  } 
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
      console.log(totalPrice)
  

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

  
  // Here, I'm just returning a static value for demonstration purposes.

  // Display the total price

  document.getElementById(
    "total-price"
  ).textContent = `Total Price: R${totalPrice.toFixed(2)}`;
  console.log(totalPrice);
}
