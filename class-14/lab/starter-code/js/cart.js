/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
var cart;

function loadCart() {
  var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() { }

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body
  // document.getElementById('cart');

  document.fi
  var tableBody = document.getElementById('cart').firstElementChild('tbody');
  console.log(tableBody);
  // var tableContainer = tableBody.firstElementChild('tbody');
  // var tableBody = document.getElementsByTagName('tbody');
  // var tableContainer = Element.getElementByTagName('tbody');
  console.log(tableBody);
  // TODO: Iterate over the items in the cart
  for (var i = 0; i < cart.items.length; i++) {
    var cartProduct = cart.items[i].product;
    var cartProductQuantity = cart.items[i].quantity;
    var cartRowElement = document.createElement('tr');
    var productCellElement = document.createElement('td');
    var quantityCellElement = document.createElement('td');
    var deleteCellElement = document.createElement('td');
    // var deleteButton = document.createElement('button');
    // deleteButton.setAttribute('type', 'click');
    deleteCellElement.setAttribute('type', 'click');
    productCellElement.textContent = cartProduct;
    quantityCellElement.textContent = cartProductQuantity;
    deleteCellElement.textContent = 'X';
    // deleteCellElement.appendChild(deleteButton);
    cartRowElement.appendChild(productCellElement);
    cartRowElement.appendChild(quantityCellElement);
    cartRowElement.appendChild(deleteCellElement);
    // tableBody.appendChild(cartRowElement);
    tableContainer.appendChild(cartRowElement);
  }
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
