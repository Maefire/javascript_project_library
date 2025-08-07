const myLibrary = [];

class Book {
  constructor(title, author, pageAmount, isRead) {
    if (!new.target) {
      throw Error("You must use the 'new' operator to call the constructor");
    }
      this.title = title;
      this.author = author;
      this.pageAmount = pageAmount;
      this.isRead = isRead;
      this.id = crypto.randomUUID();
  }
}

function addBookToLibrary(title, author, pageAmount, isRead) {
  const book = new Book(title, author, pageAmount, isRead);
  myLibrary.push(book);
}

addBookToLibrary("Test Title","Arbitrary Author",42069,false);
addBookToLibrary("Test Two","Arbitrary Writer",69,true);
addBookToLibrary("Three Title","Arbiter Author",420,false);

if (typeof document !== "undefined") {
  const bookList = document.querySelector("#book-list");
  bookList.textContent = '';
  
  myLibrary.forEach(book => {
    const bookRow = document.createElement("tr");
    bookRow.classList.add("book-row");
    bookList.appendChild(bookRow);
    // Title
    const bookTitle = document.createElement("td");
    bookTitle.textContent = book.title;
    bookRow.appendChild(bookTitle); 
    // Author
    const bookAuthor = document.createElement("td");
    bookAuthor.textContent = book.author;
    bookRow.appendChild(bookAuthor);
    // Page Amount
    const bookPageAmount = document.createElement("td");
    bookPageAmount.textContent = book.pageAmount;
    bookRow.appendChild(bookPageAmount);
    // Read Status (isRead)
    const bookIsRead = document.createElement("td");
    bookIsRead.textContent = book.isRead ? "Read" : "Not Read";//TODO classlist for checkbox
    bookRow.appendChild(bookIsRead);
  });
}
  // {
  /*const bookId =
    const bookTitle =
    const bookAuthor =
    const bookPageAmount =
    const bookIsRead = 
  */
//}); 


/* console.log(myLibrary[0]);
console.log(myLibrary[1]);
console.log(myLibrary[2]); */
