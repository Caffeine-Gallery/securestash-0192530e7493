import { backend } from 'declarations/backend';

document.getElementById('registrationForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const messageElement = document.getElementById('message');

  try {
    const result = await backend.addUser(username, password);
    if (result) {
      messageElement.textContent = 'User registered successfully!';
      messageElement.style.color = 'green';
    } else {
      messageElement.textContent = 'Username already exists. Please choose a different one.';
      messageElement.style.color = 'red';
    }
  } catch (error) {
    console.error('Error:', error);
    messageElement.textContent = 'An error occurred. Please try again.';
    messageElement.style.color = 'red';
  }

  // Clear the form
  document.getElementById('username').value = '';
  document.getElementById('password').value = '';
});
