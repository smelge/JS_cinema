const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.showTitles = function(){
  return this.films.map(function(film){
    return film.title;
  })
}

module.exports = Cinema;
