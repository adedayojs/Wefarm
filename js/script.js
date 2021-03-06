function attachEventListner() {
  const form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    onSubmitPhoneForm();
  });
}

function onSubmitPhoneForm() {
  const phone = document.getElementById("phonenumber");
  if (!phone.value) {
    // Value is not Present. Ideally this should never pass because the html required attribute is present, however never trust user input to check!
    displyError("Please Input a Phone number");
    return;
  }
  const phoneRegex =
    /(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})/;
  if (!phoneRegex.test(phone.value)) {
    displyError("Please Input Valid Phone number", "phone-error");
    return;
  }

  alert(`Your Kenyan Phone number is ${phone.value}`);
  window.location.href = "connect.html";
}

function displyError(err, elementId) {
  const errorLabel = document.getElementById(elementId);
  errorLabel.innerText = err;
  errorLabel.style = "visibility: visible";

  setTimeout(() => {
    errorLabel.style = "visibility: hidden";
  }, 1500);
}

attachEventListner();
