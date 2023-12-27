"use strict";

/*
###Задание 1
Необходимо создать класс Library. Конструктор класса, должен принимать начальный 
список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив 
не содержит дубликатов; в противном случае необходимо выбросить ошибку.
1. Класс должен содержать приватное свойство #books, которое должно хранить 
книги, переданные при создании объекта.
2. Реализуйте геттер-функцию allBooks, которая возвращает текущий список книг.
3. Реализуйте метод addBook(title), который позволяет добавлять книгу в список. 
Если книга с таким названием уже существует в списке, выбросьте ошибку с 
соответствующим сообщением.
4. Реализуйте метод removeBook(title), который позволит удалять книгу из списка 
по названию. Если книги с таким названием нет в списке, выбросьте ошибку с 
соответствующим сообщением.
5. Реализуйте метод hasBook(title), который будет проверять наличие книги в 
библиотеке и возвращать true или false в зависимости от того, есть ли такая 
книга в списке или нет.
*/

class Library {
	#books = [];

	constructor(books) {
    		this.#books = books;
  	}
	
	uniquenessListBooks() {
		const listBooks = new Set(this.#books);
		try {
			if(this.#books.length !== listBooks.size) {
				throw new Error("В списке есть повторяющиеся книги");
			}
			return console.log("Ваш список уникален");
			
		} catch (error) {
			console.log(error.message);
		}
	}

  	getListBooks() {
    		return console.log(this.#books.join(",\n"));
  	}

  	addBookToList(title) {
    		try {	
      			if (this.#books.includes(title)) {
        			throw new Error(`Такая книга уже есть в библиотеке.`);
      			}
      			this.#books.push(title);
    		} catch (error) {
      			console.log(error.message);
    		}
 	}

 	removeBookFromList(title) {
 		const index = this.#books.indexOf(title);
  		try {
    	   		if (index === -1) {
    	     			throw new Error(`Такой книги нет в библиотеке.`);
    	   		}
    	   		this.#books.splice(index, 1);
    		} catch (error) {
       			console.log(error.message);
    		}
  	}
}

const listBooks = new Library([
	"Война и мир",
	//"Нос",
	"Отцы и дети",
	"Отрочество",
	"Мертвые души",
	"Нос",
	"Идиот",
]);

// выводим список
listBooks.getListBooks();
// проверяем на уникальность
listBooks.uniquenessListBooks();
// удаляем книгу из списка
listBooks.removeBookFromList("Нос");
listBooks.getListBooks("Нос");
// проверяем ошибку
listBooks.removeBookFromList("Нос");
// добавляем книгу
listBooks.addBookToList("Нос");
listBooks.getListBooks();
// проверяем ошибку
listBooks.addBookToList("Нос");
