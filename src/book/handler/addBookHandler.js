const { nanoid } = require('nanoid');
const books = require('../books');

const addBookHandler = (request, h) => {
  const {
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading,
  } = request.payload;

  const bookId = nanoid(16);
  const isReadFinished = readPage === pageCount;
  const insertedAt = new Date().toISOString();
  const updatedAt = insertedAt;
  let errorBody;

  const newBookData = {
    id: bookId,
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    isReadFinished,
    reading,
    insertedAt,
    updatedAt,
  };

  if (!name) {
    errorBody = {
      status: 'fail',
      message: 'Gagal menambahkan buku. Mohon isi nama buku',
    };

    const response = h.response(errorBody);
    response.code(400);
    return response;
  }

  if (readPage > pageCount) {
    errorBody = {
      status: 'fail',
      message:
        'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount',
    };

    const response = h.response(errorBody);
    response.code(400);
    return response;
  }

  books.push(newBookData);

  const isSuccess = books.filter((book) => book.id === bookId).length > 0;

  if (isSuccess) {
    const response = h.response({
      status: 'success',
      message: 'Buku berhasil ditambahkan',
      data: {
        bookId,
      },
    });
    response.code(201);
    return response;
  }

  const response = h.response(errorBody);
  response.code(400);
  return response;
};

module.exports = addBookHandler;
