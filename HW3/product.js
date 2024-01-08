
const btnPageFeedbacks = document.getElementById("btnPageFeedbacks");
const listProduct = document.getElementById("listProduct");

// // вывод списка отзывов на страницу
const contentHtml = feedbacksList()
    .map((el) => `<article>
                    <h1>${el.nameProduct}</h1>
                    <ul  class="feedbackList"  style="display: none;">
                        ${el.feedback.map((i) => `<li>${i}</li>`).join(" ")}
                    </ul>
                    <button id="btnFeedback" class="btnFeedback">Показать отзывы</button>
                </article>`
    ).join(" ");

listProduct.innerHTML = contentHtml;

const feedbackList = document.querySelectorAll(".feedbackList");
const btnFeedback = document.getElementById("btnFeedback");
const btnFeedbackList = document.querySelectorAll(".btnFeedback");

for (let i = 0; i < btnFeedbackList.length; i++) {
    btnFeedbackList[i].addEventListener("click",() => {
        if (feedbackList[i].style.display === "none") {
            feedbackList[i].style.display = "block";
            btnFeedbackList[i].innerHTML = "Скрыть отзывы";
        } else {
            feedbackList[i].style.display = "none";
            btnFeedback[i].innerHTML = "Показать отзывы";
        }
    })
}

function toggleVisibility() {
    const element = document.getElementById('feedbackList');
    if (element.style.display === 'none') {
        element.style.display = 'block';
    } else {
        element.style.display = 'none';
    }
}

// переход на страницу добавления отзывов
function movePageFeedbacks() {
    window.open("feedback.html", "_self");
}

btnPageFeedbacks.addEventListener("click", movePageFeedbacks);