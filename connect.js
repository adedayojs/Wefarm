function attachEventListner() {
  const form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    console.log("county Prevent");
    e.preventDefault();
    onSubmitCountyForm();
  });
}

function onSubmitCountyForm() {
  const county = document.getElementById("county");
  if (!county.value) {
    // Value is not Present. Ideally this should never pass because the html required attribute is present, however never trust user input to check!
    displyError("Please select a County", "county-error");
    return;
  }
  alert("Success");
}

function displyError(err, elementId) {
  const errorLabel = document.getElementById(elementId);
  errorLabel.innerText = err;
  errorLabel.style = "visibility: visible";

  setTimeout(() => {
    errorLabel.style = "visibility: hidden";
  }, 1500);

  // alert(err);
}

attachEventListner();
