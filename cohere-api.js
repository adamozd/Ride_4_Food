const fetch = require('node-fetch');

// Define the API endpoint URL // add ride4food link here
const url = '';

// Define the request payload
const getNutritionDetails = async (food) => {
  const payload = {
    food: food,
  };

  // Set any necessary headers (e.g., authentication tokens)
  const headers = {
    'Authorization': 'Bearer YOUR_API_TOKEN',
    'Content-Type': 'application/json',
  };

  try {
    // Send a POST request to the API
    const response = await fetch(url, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      const data = await response.json();
      // Process the data as needed
      console.log(data);
    } else {
      console.error('Request failed:', response.status);
    }
  } catch (error) {
    console.error('Request error:', error);
  }
};

// Usage example
const foodInput = ''; // implement user input accordingly
getNutritionDetails(foodInput);
