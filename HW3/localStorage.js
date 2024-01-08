
const productKey = "product";
const feedbacksKey = "feedbacks";

// сохранение отзыва 
function saveFeedbackInStorage(nameProduct, feedback) {
    if (!localStorage.getItem(feedbacksKey)) {
        localStorage.setItem(feedbacksKey, JSON.stringify([{nameProduct, feedback: [feedback]}]));
    } else {
        const feedbacksList = JSON.parse(localStorage.getItem(feedbacksKey));
        let i = -1;
        feedbacksList.forEach((el, index) => {
            if (el.nameProduct === nameProduct) {
                i = index;
            } 
        });
        if (i === -1) {
            feedbacksList.push({nameProduct: nameProduct, feedback:[feedback]});
            localStorage.setItem(feedbacksKey, JSON.stringify(feedbacksList));
        } else {
            feedbacksList[i].feedback.push(feedback);
            localStorage.setItem(feedbacksKey, JSON.stringify(feedbacksList));
        } 
            
        
    }
}

// поиск отзыва по названию продукта
function findFeedbackByNameProduct(nameProduct) {
    const feedbacksList = JSON.parse(localStorage.getItem(feedbacksKey));
    return (
        feedbacksList.find((el) => {
            return el.nameProduct === nameProduct;
        }) || null        
    );
}

// список отзывов из localStorage
function feedbacksList() {
    const feedbacksList = JSON.parse(localStorage.getItem(feedbacksKey));
    return feedbacksList;
}

// удаление продукта по ключу
function deleteProduct() {
  localStorage.removeItem(productKey);
}
