const books = require('../books');

const getAllBookHandler = (request, h) => {
  const { reading, finished, name: nameQuery } = request.query;

  const bookLists = books.map((book) => {
    const { id, name, publisher } = book;

    if (reading !== undefined) {
      if (reading === '1') {
        if (reading === true) return { id, name, publisher };
      } else if (reading === '0') {
        if (reading === false) return { id, name, publisher };
      }
    }

    if (finished !== undefined) {
      if (finished === '1') {
        if (finished === true) return { id, name, publisher };
      } else if (finished === '0') {
        if (finished === false) return { id, name, publisher };
      }
    }

    if (nameQuery !== undefined) {
      if (name.toLowerCase().includes(nameQuery.toLowerCase())) {
        return { id, name, publisher };
      }
    }

    return { id, name, publisher };
  });

  return {
    status: 'success',
    data: {
      books: bookLists,
    },
  };
};

module.exports = getAllBookHandler;
