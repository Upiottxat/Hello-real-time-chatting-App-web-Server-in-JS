// Define the URL endpoint where you want to send the POST request
const url = 'http://localhost:8000/api/auth/Signup';

// Define the data you want to send in the request body
const postData = {
    fullName: "John Doe",
    username: "John Doe",
    email: "hello@gmail.com",
    password: "123456",
    conformPassword: "1233456",
    gender: "male"
}
// Define options for the fetch request
const options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json' // Specify that you are sending JSON data
    },
    body: JSON.stringify(postData) // Convert the data object to JSON string
};

// Send the POST request using the Fetch API
fetch(url, options)
    .then(response => {
        // Check if the request was successful (status code 2xx)
        if (response.ok) {
            return response.json(); // Parse the JSON response
        } else {
            throw new Error('Failed to create post'); // Throw an error if request was not successful
        }
    })
    .then(data => {
        // Handle the response data
        console.log('Post created:', data);
    })
    .catch(error => {
        // Handle any errors that occurred during the request
        console.error('Error creating post:', error);
    });
