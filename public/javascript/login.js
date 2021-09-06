const loginFormHandler = async function(event) {
    event.preventDefault();
    // Collect values from the login form
    const usernameEl = document.querySelector("#username-input-login").value.trim();
    const passwordEl = document.querySelector("#password-input-login").value.trim();
    fetch("/api/user/login", {
      // Send a POST request to the API endpoint
      method: "post",
      body: JSON.stringify({
        username: usernameEl.value,
        password: passwordEl.value
      }),
      headers: { "Content-Type": "application/json" }
    })
      .then(function() {
        // If successful, redirect the browser to the dashboard page
        document.location.replace("/dashboard");
      })
      .catch(err => console.log(err));
  };
  
  document
    .querySelector("#login-form")
    .addEventListener("submit", loginFormHandler);