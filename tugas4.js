const film = {
  judul: "Interstellar",
  tahunRilis: 2014,
  sutradara: "Christopher Nolan",
  genre: ["Sci-Fi", "Adventure", "Drama"],

  tampilkanDetail: function() {
    return `Judul: ${this.judul}\nTahun Rilis: ${this.tahunRilis}\nSutradara: ${this.sutradara}\nGenre: ${this.genre.join(", ")}`;
  }
};

console.log(film.sutradara);           // Output: Christopher Nolan
console.log(film.genre[1]);            // Output: Adventure
console.log(film.tampilkanDetail());   // Output: Semua detail film
