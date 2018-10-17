const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.showTitles = function(){
  return this.films.map(function(film){
    return film.title;
  })
}

Cinema.prototype.getIndex = function(input){
  return
}

Cinema.prototype.findByTitle = function(title){
  return this.films.filter(film => film.title == title);
}

Cinema.prototype.findByGenre = function(genre){
  return this.films.filter(film => film.genre == genre);
}

Cinema.prototype.findByYear = function(year){
  var films = this.films.filter(film=>film.year == year);
  if (films.length == 0){
    return false;
  } else {
    return true;
  }
}

module.exports = Cinema;
