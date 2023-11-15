const getTheTitles = function(books) {
  // let barr = [];
  // for (let i = 0; i < books.length; i++) {
  //   barr.push(books[i]['title']);
  // }
  // return barr;

  return books.map((item) => item.title);
};

// Do not edit below this line
module.exports = getTheTitles;
