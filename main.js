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

myLibrary.forEach(book => console.log(book))//testing, refactor to display on page
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
