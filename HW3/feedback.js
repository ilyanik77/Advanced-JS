
const nameProductEl = document.getElementById("nameProduct");
const feedbackEl = document.getElementById("feedback");
const btnAddFeedback = document.getElementById("addFeedback");
const errorMessage = document.getElementById("error");
const btnProductPage = document.getElementById("btnProductPage");

function addFeedback() {
    const nameProduct = nameProductEl.value;
    const feedback = feedbackEl.value;
    
    if (nameProduct && feedback) {
        saveFeedbackInStorage(nameProduct, feedback);
    } else {
        errorMessage.textContent = "Заполните все поля";
    }

}

btnAddFeedback.addEventListener("click", addFeedback);

function moveProductPage() {
    window.open("product.html", "_self");
}

btnProductPage.addEventListener("click", moveProductPage);