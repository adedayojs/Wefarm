function attachEventListner() {
  const form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();

  });
  console.log("her");
}

attachEventListner();
function onSubmit() {
    const phone = document.getElementById('phonenumber')
    if(phone.value){
        // Value is Present
    }
}

function displyError(){
    
}