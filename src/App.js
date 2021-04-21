/* eslint-disable */
import React, { useEffect, useState } from "react";
import Books, { fetchData } from "./books/list";
import Forms, { editBook, newBook } from "./books/form";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = () => {
  const [books, setBooks] = useState([]);
  const [bookID, setBookID] = useState(0);
  const [bookTitle, setBookTitle] = useState("");
  const [bookAuthor, setBookAuthor] = useState("");
  const [bookPublisher, setBookPublisher] = useState("");
  const [bookShelf, setBookShelf] = useState(0);
  const [bookColumn, setBookColumn] = useState(0);
  const [editMode, setEditMode] = useState(0);

  useEffect(() => {
    fetchData(setBooks);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await newBook(
      bookID,
      bookTitle,
      bookAuthor,
      bookPublisher,
      bookShelf,
      bookColumn
    );
    setBookID("");
    setBookTitle("");
    await fetchData(setBooks);
  };

  const handleSubmitEdit = async (e) => {
    e.preventDefault();
    await editBook(
      bookID,
      bookTitle,
      bookAuthor,
      bookPublisher,
      bookShelf,
      bookColumn
    );
    setBookID("");
    setBookTitle("");
    await fetchData(setBooks);
  };

  return (
    <div>
      <div key=""></div>
      <BrowserRouter>
        <Switch>
          <Route path="/form">
            <Forms
              books={books}
              editMode={editMode}
              setEditMode={setEditMode}
              handleSubmit={handleSubmit}
              bookID={bookID}
              setBookID={setBookID}
              bookTitle={bookTitle}
              setBookTitle={setBookTitle}
              bookAuthor={bookAuthor}
              setBookAuthor={setBookAuthor}
              bookPublisher={bookPublisher}
              setBookPublisher={setBookPublisher}
              bookShelf={bookShelf}
              setBookShelf={setBookShelf}
              bookColumn={bookColumn}
              setBookColumn={setBookColumn}
              handleSubmitEdit={handleSubmitEdit}
              setBooks={setBooks}
            />
          </Route>
          <Route path="/">
            <h1 align="center">Biblioteca da Clara</h1>
            <Books
              books={books}
              fetchData={fetchData}
              editMode={editMode}
              setEditMode={setEditMode}
              bookID={bookID}
              setBookID={setBookID}
              setBooks={setBooks}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};
export default App;
