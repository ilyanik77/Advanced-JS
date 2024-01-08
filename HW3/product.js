
const btnPageFeedbacks = document.getElementById("btnPageFeedbacks");
const listProduct = document.getElementById("listProduct");

// // вывод списка отзывов на страницу
const contentHtml = feedbacksList()
    .map((el) => `<article>
                    <h1>${el.nameProduct}</h1>
                    <ul  class="feedbackList"  style="display: none;">
                        ${el.feedback.map((i) => `<li>${i}</li><button id="btnDelFeedback" class="btnDelFeedback">Удалить отзыв</button>`).join(" ")}
                    </ul>
                    <button id="btnFeedback" class="btnFeedback">Показать отзывы</button>
                </article>`
    ).join(" ");

listProduct.innerHTML = contentHtml;

const feedbackList = document.querySelectorAll(".feedbackList");
const btnFeedback = document.getElementById("btnFeedback");
const btnFeedbackList = document.querySelectorAll(".btnFeedback");
const btnDelFeedback = document.getElementById("btnDelFeedback");
const btnDelFeedbackList = document.querySelectorAll(".btnDelFeedback");


for (let i = 0; i < btnFeedbackList.length; i++) {
    btnFeedbackList[i].addEventListener("click",() => {
        if (feedbackList[i].style.display === "none") {
            feedbackList[i].style.display = "block";
            btnFeedbackList[i].innerHTML = "Скрыть отзывы";
        } else {
            feedbackList[i].style.display = "none";
            btnFeedbackList[i].innerHTML = "Показать отзывы";
        }
    })
}

// переход на страницу добавления отзывов
function movePageFeedbacks() {
    window.open("feedback.html", "_self");
}

btnPageFeedbacks.addEventListener("click", movePageFeedbacks);