document.addEventListener("DOMContentLoaded", function () {

  const submitButton = document.querySelector("form button");

  if (submitButton) {
    submitButton.addEventListener("click", function (event) {
      event.preventDefault();
      alert("Form submitted successfully!");
    });
  }
});