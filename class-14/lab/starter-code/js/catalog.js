/* global Product, Cart */

'use strict';



// Set up an empty cart for use on this page.
var cart = new Cart([]);
var cartItemCounter = 1;

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {

  //TODO: Add an <option> tag inside the form's select for each product
  var selectElement = document.getElementById('items');
  for (var i = 0; i < Product.allProducts.length; i++) {

    var optionElement = document.createElement('option');
    // optionElement.setAttribute('class', 'menuOption');
    optionElement.setAttribute('value', Product.allProducts[i].name);
    // optionElement.setAttribute('selected', 'selected');

    optionElement.textContent = Product.allProducts[i].name;
    selectElement.appendChild(optionElement);

    // console.log('populate form function', allProducts[i].name);
    // console.log(optionElement.setAttribute('value', allProducts[i].name));
    // console.log('selectElement', selectElement);
  }

}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {
  event.preventDefault();
  // TODO: Prevent the page from reloading
  // console.log('ITEAM VALUE', event.target.value);
  // Do all the things ...
  addSelectedItemToCart(event);
  cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview();

}

// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart(event) {
  // TODO: suss out the item picked from the select list
  console.log(event.target);
  console.log('QUANTITY VALUE', event.target.quantity.value);
  console.log('ITEM VALUE', event.target.items.value);
  var product = event.target.items.value;
  var quantity = event.target.quantity.value;

  // TODO: get the quantity
  // TODO: using those, add one item to the Cart
  cart.addItem(product, quantity);
}

// TODO: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {
  // cartItemCounter++;

  var itemCountElement = document.getElementById('itemCount');
  itemCountElement.textContent = `There are ${cartItemCounter++} items in your cart.`;
}

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
  var addedCartItem = cart.items[cart.items.length - 1].product;
  var addedCartItemQuantity = cart.items[cart.items.length - 1].quantity;

  if (document.getElementById('cartContentsList')) {
    var cartContentsList = document.getElementById('cartContentsList');
    var cartItemElement = document.createElement('li');
    cartItemElement.textContent = addedCartItemQuantity + ' x ' + addedCartItem;
    cartContentsList.appendChild(cartItemElement);
    // docunment.getElementById('cartContents').appendChild(cartContentsList);
  } else {
    var cartContentsElement = document.getElementById('cartContents');
    var cartContentsList = document.createElement('ul');
    cartContentsList.setAttribute('id', 'cartContentsList');
    var cartItemElement = document.createElement('li');

    cartItemElement.textContent = addedCartItemQuantity + ' x ' + addedCartItem;
    cartContentsList.appendChild(cartItemElement);
    cartContentsElement.appendChild(cartContentsList);
  }
  // TODO: Get the item and quantity from the form
  // TODO: Add a new element to the cartContents div with that information
}

// function test(){
//   var storedProductData = localStorage.getItem('storedProductData');
//   var parsedProductData = JSON.parse(storedProductData);

//   //console.log ('parsed product data', parsedProductData);
// }

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
var catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
//test();
// console.log('allproducts:', allProducts);