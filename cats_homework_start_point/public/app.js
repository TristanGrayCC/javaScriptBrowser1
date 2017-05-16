createCatSection = function(){
  var newListItem = document.createElement("ul");
  newListItem.classList.add("ul");
  return newListItem;
};

createFood = function(info){
  var item = document.createElement("li");
  item.innerText = "Favourite food: " + info;
  return item;
};

createName = function(info){
  var item = document.createElement("li");
  item.classList.add("name");
  item.innerText = info;
  return item;
};

createImage = function(img){
  var item = document.createElement("li");
  var image = document.createElement("img");
  image.setAttribute("src", img);
  image.setAttribute("height", "150px");
  item.appendChild(image);
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
  { name: "Rollo", favourite_food: "Anything", image:"https://scontent.xx.fbcdn.net/v/t31.0-8/17917916_10213301392038148_7901082137114936539_o.jpg?oh=8f8af800c6f0ed6740e580abda77b8f0&oe=59C0A7F9" },
  { name: "Boba", favourite_food: "Sock fluff", image:"http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg" },
  { name: "Barnaby", favourite_food: "Tuna", image: "http://dreamicus.com/data/cat/cat-01.jpg" },
  { name: "Max", favourite_food: "Whiskas Temptations", image: "http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg" }
];

var addCat = function(name, favourite_food, image) {
  var catSection = createCatSection();
  var name = createName(name);
  var food = createFood(favourite_food);
  var image = createImage(image);

  appendElements(catSection, name, food, image);
}

var app = function() {
  for (cat of CAT_ARRAY){
    addCat(cat.name, cat.favourite_food, cat.image);
  };
};

window.onload = app;
