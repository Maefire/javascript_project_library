const myLibrary = [];

function Book(title, author, pageAmount, isRead) {
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }
    this.title = title;
    this.author = author;
    this.pageAmount = pageAmount;
    this.isRead = isRead;
    this.id = crypto.randomUUID();
}

function addBookToLibrary(title, author, pageAmount, isRead) {
  const newBook = new Book(title, author, pageAmount, isRead)
  myLibrary.push(newBook);
}

Book.prototype.togglePageRead= function () {
  this.isRead = !this.isRead;
}

addBookToLibrary("Test Title","Arbitrary Author",42069,false);

console.log(myLibrary[0]);