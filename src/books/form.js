import { Link } from "react-router-dom";

export async function newBook(
  bookID,
  bookTitle,
  bookAuthor,
  bookPublisher,
  bookShelf,
  bookColumn
) {
  const requestOptions = {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      id: parseInt(bookID, 10),
      title: bookTitle,
      author: bookAuthor,
      publisher: bookPublisher,
      shelf: parseInt(bookShelf, 10),
      column: parseInt(bookColumn, 10),
    }),
    mode: "cors",
  };
  const response = await fetch("/books", requestOptions);
  if (!response.ok) {
    throw new Error("Fail to create book!");
  }
}

export async function editBook(
  bookID,
  bookTitle,
  bookAuthor,
  bookPublisher,
  bookShelf,
  bookColumn
) {
  const requestOptions = {
    method: "PUT",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      id: parseInt(bookID, 10),
      title: bookTitle,
      author: bookAuthor,
      publisher: bookPublisher,
      shelf: parseInt(bookShelf, 10),
      column: parseInt(bookColumn, 10),
    }),
    mode: "cors",
  };
  const response = await fetch(`/books/${bookID}`, requestOptions);
  if (!response.ok) {
    console.log(bookID);
    throw new Error("Fail to edit book!");
  }
}

export async function deleteBook(bookID) {
  const requestOptions = {
    method: "DELETE",
    headers: { "content-type": "application/json" },
    mode: "cors",
  };
  const response = await fetch(`/books/${bookID}`, requestOptions);
  if (!response.ok) {
    throw new Error("Fail to delete book!");
  }
}

const Forms = ({
  handleSubmit,
  handleSubmitEdit,
  bookID,
  setBookID,
  bookTitle,
  setBookTitle,
  bookAuthor,
  setBookAuthor,
  bookPublisher,
  setBookPublisher,
  bookShelf,
  setBookShelf,
  bookColumn,
  setBookColumn,
  editMode,
}) => {
  if (editMode > 0) {
    return (
      <div className="formEdit">
        <div>
          <h1 align="center">Edit Book</h1>
        </div>
        <div className="container">
          <form onSubmit={handleSubmitEdit}>
            <label className="form-label">
              <p>ID</p>
            </label>
            <input
              type="number"
              name="id"
              className="form-control"
              onChange={(event) => setBookID(event.target.value)}
              value={bookID}
              disabled
            />
            <label>
              <p>Título</p>
            </label>
            <input
              type="text"
              name="title"
              className="form-control"
              onChange={(event) => setBookTitle(event.target.value)}
              defaultValue={bookTitle}
            />
            <label>
              <p>Autor</p>
            </label>
            <input
              type="text"
              name="author"
              className="form-control"
              onChange={(event) => setBookAuthor(event.target.value)}
              defaultValue={bookAuthor}
            />
            <label>
              <p>Editora</p>
            </label>
            <input
              type="text"
              name="publisher"
              className="form-control"
              onChange={(event) => setBookPublisher(event.target.value)}
              defaultValue={bookPublisher}
            />
            <label>
              <p>Prateleira</p>
            </label>
            <input
              type="text"
              name="shelf"
              className="form-control"
              onChange={(event) => setBookShelf(event.target.value)}
              defaultValue={bookShelf}
            />
            <label>
              <p>Coluna</p>
            </label>
            <input
              type="text"
              name="column"
              className="form-control"
              onChange={(event) => setBookColumn(event.target.value)}
              defaultValue={bookColumn}
            />
            <input
              type="submit"
              value="Editar"
              className="btn btn-primary"
            ></input>
            <Link to="/">
              <input
                type="submit"
                value="Voltar"
                className="btn btn-warning"
              ></input>
            </Link>
          </form>
        </div>
      </div>
    );
  } else {
    return (
      <div className="formNew">
        <div>
          <h1 align="center">Create Book</h1>
        </div>
        <div className="container">
          <form onSubmit={handleSubmit}>
            <label className="form-label">
              <p>ID</p>
            </label>
            <input
              type="number"
              name="id"
              className="form-control"
              onChange={(event) => {
                if (event.target.value > 0) {
                  setBookID(event.target.value);
                } else {
                  alert("ID deve ser maior que 0");
                }
              }}
              value={bookID}
            />
            <label>
              <p>Título</p>
            </label>
            <input
              type="text"
              name="title"
              className="form-control"
              onChange={(event) => setBookTitle(event.target.value)}
              value={bookTitle}
            />
            <label>
              <p>Autor</p>
            </label>
            <input
              type="text"
              name="author"
              className="form-control"
              onChange={(event) => setBookAuthor(event.target.value)}
              defaultValue={bookAuthor}
            />
            <label>
              <p>Editora</p>
            </label>
            <input
              type="text"
              name="publisher"
              className="form-control"
              onChange={(event) => setBookPublisher(event.target.value)}
              defaultValue={bookPublisher}
            />
            <label>
              <p>Prateleira</p>
            </label>
            <input
              type="text"
              name="shelf"
              className="form-control"
              onChange={(event) => setBookShelf(event.target.value)}
              defaultValue={bookShelf}
            />
            <label>
              <p>Coluna</p>
            </label>
            <input
              type="text"
              name="column"
              className="form-control"
              onChange={(event) => setBookColumn(event.target.value)}
              defaultValue={bookColumn}
            />
            <input
              type="submit"
              value="Cadastrar"
              className="btn btn-primary"
            ></input>
            <Link to="/">
              <input
                type="submit"
                value="Voltar"
                className="btn btn-warning"
              ></input>
            </Link>
          </form>
        </div>
      </div>
    );
  }
};

export default Forms;
