//variables
const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const isbnInput = document.querySelector("#isbn");
const button = document.querySelector(".btn");
const bookList = document.querySelector("#book-list");

button.addEventListener("click", function(){
   if( titleInput.value =="" && authorInput.value == "" && isbnInput.value == ""   ){
      alert("All details filled is necessary.");    
   }
   else{
     const bookListRow = document.createElement("tr");

     const newTitle = document.createElement("td");
     newTitle.innerHTML = titleInput.value;
     bookListRow.appendChild(newTitle);

     const newAuthor = document.createElement("td");
     newAuthor.innerHTML = authorInput.value;
     bookListRow.appendChild(newAuthor);

     const newIsbn= document.createElement("td");
     newIsbn.innerHTML = titleIsbn.value;
     bookListRow.appendChild(newIsbn);

     bookList.appendChild(bookListRow);

   }


});
