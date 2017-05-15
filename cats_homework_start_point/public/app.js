createCatSection = function(){
  var newListItem = document.createElement("ul");
  newListItem.classList.add("ul");
  return newListItem;
};

createList = function(info){
  var item = document.createElement("li");
  item.innerText = info;
  return item;
};

appendElements = function(section, name, food, image){
  section.appendChild(name);
  section.appendChild(food);
  section.appendChild(image);
  var catsSection = document.querySelector("#cats");
  catsSection.appendChild(section);
};

var CAT_ARRAY = [
  { name: "Rollo", favourite_food: "Anything", image: "https://scontent.xx.fbcdn.net/v/t31.0-8/17917916_10213301392038148_7901082137114936539_o.jpg?oh=8f8af800c6f0ed6740e580abda77b8f0&oe=59C0A7F9" }
];

var addCat = function(name, favourite_food, image) {
  var catSection = createCatSection();
  var name = createList(name);
  var food = createList(favourite_food);
  var image = createList(image);

  appendElements(catSection, name, food, image);
}

var app = function() {
  for (cat of CAT_ARRAY){
    addCat(cat.name, cat.favourite_food, cat.image);
  };
};

window.onload = app;
