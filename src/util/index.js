function payloadValidator({ name, pageCount, readPage }) {
  if (!name) {
    return 'Gagal menambahkan buku. Mohon isi nama buku';
  }

  if (readPage > pageCount) {
    return 'Gadang menambahkan buku. readPage tidak boleh lebih besar dari pageCount';
  }

  return true;
}

module.exports = {
  payloadValidator,
};
