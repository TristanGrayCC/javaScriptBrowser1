createCatSection = function(){
  var newListItem = document.createElement("ul");
  newListItem.classList.add("ul");
  return newListItem;
};

createList = function(name, favourite_food, image){
  var name = document.createElement("li");
  name.innerText = name;
  var food = document.createElement("li");
  food.innerText = favourite_food;
  var pic = document.createElement("li");
  pic.innerText = image;
  return name;
};

appendListItems = function(name, favourite_food, image){

};

appendElements = function(section, list){
  section.appendChild(list);
  var catsSection = document.querySelector("#cats");
  catsSection.appendChild(section);
};

var CAT_ARRAY = [
  { name: "Rollo", favourite_food: "Anything", image: "https://scontent.xx.fbcdn.net/v/t31.0-8/17917916_10213301392038148_7901082137114936539_o.jpg?oh=8f8af800c6f0ed6740e580abda77b8f0&oe=59C0A7F9" }
];

var addCat = function(name, favourite_food, image) {
  var catSection = createCatSection();
  var list = createList(name, favourite_food, image);

  appendElements(catSection, list);
}

var app = function() {
  for (cat of CAT_ARRAY){
    addCat(cat.name, cat.favourite_food, cat.image);
  };
};

window.onload = app;
