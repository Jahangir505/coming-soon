const seconds = document.querySelector(".seconds .number");
minutes = document.querySelector(".minutes .number");
hours = document.querySelector(".hours .number");
days = document.querySelector(".days .number");

let secValue = 60,
  minValue = 60,
  hourValue = 2,
  dayValue = 9;

const timeFunction = setInterval(() => {
  secValue--;
  if (secValue === 0) {
    minValue--;
    secValue = 60;
  }
  if (minValue === 0) {
    hourValue--;
    minValue = 60;
  }
  if (hourValue === 0) {
    dayValue--;
    hourValue = 60;
  }

  if (dayValue === 0) {
    clearInterval(timeFunction);
  }
  seconds.textContent = secValue < 10 ? `0${secValue}` : secValue;
  minutes.textContent = minValue < 10 ? `0${minValue}` : minValue;
  hours.textContent = hourValue < 10 ? `0${hourValue}` : hourValue;
  days.textContent = dayValue < 10 ? `0${dayValue}` : dayValue;
}, 1000); // 1000ms = 1s

const progress = document.querySelector(".progress-done");

progress.style.width = progress.getAttribute("data-done") + "%";
progress.style.opacity = 1;

document.addEventListener("DOMContentLoaded", function () {
  const textContentBox = document.getElementById("text");
  const timeContent = document.getElementById("timeContent");
  const emailContent = document.getElementById("emailContent");
  const twitterContent = document.getElementById("twitterContent");
  const socialMediaContent = document.getElementById("socialMediaContent");
  const progressContent = document.getElementById("progressContent");

  const showTextCheckbox = document.getElementById("showTextContent");
  const showTimeContentCheckbox = document.getElementById("showTimeContent");
  const showEmailContentCheckbox = document.getElementById("showEmailContent");
  const showProgressContentBox = document.getElementById("showProgressContent");
  const showTwitterContentCheckbox =
    document.getElementById("showTwitterContent");
  const showSocialMediaContentCheckbox = document.getElementById(
    "showSocialMediaContent"
  );

  // Hide all content except countdown initially
  emailContent.style.display = "none";
  twitterContent.style.display = "none";
  socialMediaContent.style.display = "none";
  textContentBox.style.display = "none";
  progressContent.style.display = "none";

  // Show countdown by default
  timeContent.style.display = "block";

  showTextCheckbox.addEventListener("change", function () {
    textContentBox.style.display = showTextCheckbox.checked ? "block" : "none";
  });

  showTimeContentCheckbox.addEventListener("change", function () {
    timeContent.style.display = showTimeContentCheckbox.checked
      ? "block"
      : "none";
  });

  showEmailContentCheckbox.addEventListener("change", function () {
    emailContent.style.display = showEmailContentCheckbox.checked
      ? "block"
      : "none";
  });

  showTwitterContentCheckbox.addEventListener("change", function () {
    twitterContent.style.display = showTwitterContentCheckbox.checked
      ? "block"
      : "none";
  });

  // showSocialMediaContentCheckbox.addEventListener("change", function () {
  //   socialMediaContent.style.display = showSocialMediaContentCheckbox.checked
  //     ? "block"
  //     : "none";
  // });

  showProgressContentBox.addEventListener("change", function () {
    progressContent.style.display = showProgressContentBox.checked
      ? "block"
      : "none";
  });

  console.log(showSocialMediaContentCheckbox);

  // Progressbar

  // Email validation

  const emailInput = document.getElementById("emailInput");
  const emailError = document.getElementById("emailError");
  const subscribeForm = document.getElementById("subscribeForm");

  emailInput.addEventListener("input", function () {
    if (!isValidEmail(emailInput.value)) {
      emailError.textContent = "Please enter a valid email address";
    } else {
      emailError.textContent = "";
    }
  });

  subscribeForm.addEventListener("submit", function (event) {
    event.preventDefault();
    if (!isValidEmail(emailInput.value)) {
      emailError.textContent = "Please enter a valid email address";
    } else {
      // Reset error message
      emailError.textContent = "";
      // You can submit the form or perform other actions here
      alert("Thank you for subscribing!");
      subscribeForm.reset(); // Reset the form after submission
    }
  });

  function isValidEmail(email) {
    // Basic email validation using regular expression
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }
});
