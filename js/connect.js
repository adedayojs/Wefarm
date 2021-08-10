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
    // This should be called. The rewuired value is not there by intention so you can see the error message feedback
    displyError("Please select a County", "county-error");
    return;
  }
  alert("Success. You Selected " + county.value);
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
