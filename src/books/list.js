import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { deleteBook } from "./form";
import { Link } from "react-router-dom";

export async function fetchData(setBooks) {
  try {
    const res = await fetch("/books");
    const data = await res.json();
    console.log(data);
    setBooks(data);
  } catch (err) {
    throw err;
  }
}

const Books = ({ books, editMode, setEditMode, setBookID }) => {
  const bookRows = Object.values(books).map((book) => (
    <tr key={book.id}>
      <td>{book.id}</td>
      <td>{book.title}</td>
      <td>{book.author}</td>
      <td>{book.publisher}</td>
      <td>{book.shelf}</td>
      <td>{book.column}</td>
      <td>
        <Link to="/form">
          <button
            type="button"
            className="btn btn-info"
            onClick={() => {
              setEditMode(editMode + 1);
              setBookID(book.id);
            }}
          >
            <FontAwesomeIcon icon={faEdit} color="white" />
          </button>
        </Link>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => {
            deleteBook(book.id);
          }}
        >
          <FontAwesomeIcon icon={faTrashAlt} color="white" />
        </button>
      </td>
    </tr>
  ));

  return (
    <div className="container">
      <a href="/form">
        <button type="button" className="btn btn-primary">
          Cadastrar Livro
        </button>
      </a>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Título</th>
            <th>Autor</th>
            <th>Editora</th>
            <th>Prateleira</th>
            <th>Coluna</th>
            <th>Opções</th>
          </tr>
        </thead>
        <tbody>{bookRows}</tbody>
      </table>

      <a href="/form">
        <button type="button" className="btn btn-primary">
          Cadastrar Livro
        </button>
      </a>
    </div>
  );
};

export default Books;
