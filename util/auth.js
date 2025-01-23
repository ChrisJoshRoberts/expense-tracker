import axios from "axios";

const FIREBASE_KEY = 'AIzaSyDSti_hrIG3icHffHp-F5ZsO5D8JqILBEY'

export async function createUser(name, email, password) {
  // Validate the environment variable
  if (!FIREBASE_KEY) {
    console.error('FIREBASE_KEY is not defined in environment variables.');
    throw new Error('FIREBASE_KEY is required to create a user.');
  }

  try {
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${FIREBASE_KEY}`;

    const response = await axios.post(url, {
      name, // Simplified property assignment
      email,
      password,
      returnSecureToken: true,
    });

    console.log('User created successfully:', response.data);

    // Return response data to the calling function
    return response.data;
  } catch (error) {
    // Handle and log errors
    console.error('Error creating user:', error?.response?.data || error.message);
    throw error; // Rethrow error for calling function to handle
  }
}
