const formPage = document.getElementById("form-card");
const termsPage = document.getElementById("terms-card");
const formLink = document.getElementById("form-link");
const termsLink = document.getElementById("terms-link");

termsLink.addEventListener("click",(e)=>{
    e.preventDefault();
    formPage.style.display = "none";
    termsPage.style.display = "block";
})

formLink.addEventListener("click",(e)=>{
    e.preventDefault();
    termsPage.style.display = "none";
    formPage.style.display = "block";
})

