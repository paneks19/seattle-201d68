'use strict';

var allProducts = [];

// Cart constructor.
var Cart = function(items = []) {
  // this.items is an array of CartItem instances.
  // this.items = items;
  this.items;
};

Cart.prototype.addItem = function(event) {
  // product, quantity removed from function above////////////////////////////////////////////////

  // TODO: Fill in this instance method to create a new CartItem and add it to this.items

  event.preventDefault();



  console.log('test');
  for (var j=0; j<allProducts.length; j++){
    
    console.log('all products', allProducts[j].name);
    console.log('event.target', event.target);
    console.log(event.target.menuOption);

    if (event.target.allProducts[j].name == allProducts[j].name){
      console.log('event.target.value', event.target.allProducts[j].name);
    }

  }

  console.log(event.target.quantity.value); //captures value of quantity input box


};

Cart.prototype.saveToLocalStorage = function() {
  // TODO: Fill in this instance method to save the contents of the cart to localStorage
  var stringifyData = JSON.stringify(allProducts);

  localStorage.setItem('storedProductData', stringifyData);

  //console.log('stored product data', stringifyData);

};

Cart.prototype.removeItem = function(item) {
  // TODO: Fill in this instance method to remove one item from the cart.
  // Note: You will have to decide what kind of parameter to pass in here!
};

var CartItem = function(product, quantity) {
  this.product = product;
  this.quantity = quantity;
};

// Product constructor.
var Product = function(filePath, name) {
  this.filePath = filePath;
  this.name = name;
  // Product.allProducts.push(this);
  allProducts.push(this);
};
// Product.allProducts = [];

function generateCatalog() {
  new Product('assets/bag.jpg', 'Bag');
  new Product('assets/banana.jpg', 'Banana');
  new Product('assets/bathroom.jpg', 'Bathroom');
  new Product('assets/boots.jpg', 'Boots');
  new Product('assets/breakfast.jpg', 'Breakfast');
  new Product('assets/bubblegum.jpg', 'Bubblegum');
  new Product('assets/chair.jpg', 'Chair');
  new Product('assets/cthulhu.jpg', 'Cthulhu');
  new Product('assets/dog-duck.jpg', 'Dog-Duck');
  new Product('assets/dragon.jpg', 'Dragon');
  new Product('assets/pen.jpg', 'Pen');
  new Product('assets/pet-sweep.jpg', 'Pet Sweep');
  new Product('assets/scissors.jpg', 'Scissors');
  new Product('assets/shark.jpg', 'Shark');
  new Product('assets/sweep.png', 'Sweep');
  new Product('assets/tauntaun.jpg', 'Taun-Taun');
  new Product('assets/unicorn.jpg', 'Unicorn');
  new Product('assets/usb.gif', 'USB');
  new Product('assets/water-can.jpg', 'Water Can');
  new Product('assets/wine-glass.jpg', 'Wine Glass');
}

// Initialize the app by creating the big list of products with images and names
generateCatalog();

var emptyCart = new Cart();

emptyCart.saveToLocalStorage();

document.getElementById('catalog').addEventListener('submit', emptyCart.addItem);
