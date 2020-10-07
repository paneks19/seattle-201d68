'use-strict';

// global variables

var parentElement = document.getElementById('sales');
var cookieLocations = [];
var headerArrayHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// constructor function

function SalesLocation(name, minimumHourlyCustomers, maximumHourlyCustomers, averageCookiePerCustomer) {
  this.name = name;
  this.min = minimumHourlyCustomers;
  this.max = maximumHourlyCustomers;
  this.average = averageCookiePerCustomer;
  this.totalCookiesPerHour = [];
  this.customersEachHour = [];
  this.totalCookiesPerDay = 0;

  cookieLocations.push(this);
};

// prototypes

SalesLocation.prototype.generateHourlyCookies = function () {
  // use a random number generator to create customers each hour
  for(var i=0; i<headerArrayHours.length; i++){
    var customersForTheHour = generateRandomNumber(this.min, this.max);
    this.customersEachHour.push(customersForTheHour);
  }
  // multiply customers each hour by average cookie sale to get total cookies each hour
  for(var i=0; i<this.customersEachHour.length; i++){
    var cookiesForTheHour = Math.ceil(this.customersEachHour[i] * this.average);
    this.totalCookiesPerHour.push(cookiesForTheHour);

    this.totalCookiesPerDay += cookiesForTheHour;
  }
}

SalesLocation.prototype.render = function(){
  // make the store name
  // create a tr
  var tableRowElement = document.createElement('tr');
  // create a th
  var tableHeader = document.createElement('th');
  // fill it with content - this.name
  tableHeader.textContent = this.name;
  // append th to the tr
  tableRowElement.appendChild(tableHeader);

  // make a for and loop over cookies sold each hour
  for(var i=0; i<this.totalCookiesPerHour.length; i++){
    // make a td
    var totalCookiesData = document.createElement('td');
    // fill it with content - data in cookies array[i]
    totalCookiesData.textContent = this.totalCookiesPerHour[i];
    // append it to tr
    tableRowElement.appendChild(totalCookiesData);
  }

  // need a total at the end of the row

  // append the tr to the parent
  parentElement.appendChild(tableRowElement);
}

// object instances

new SalesLocation('seattle', 23, 65, 6.3);
new SalesLocation('Tokyo', 3, 24, 1.2);
new SalesLocation('Dubai', 11, 38, 3.7);
new SalesLocation('Paris', 20, 38, 2.3);
new SalesLocation('Lima', 2, 16, 4.6);

// helper functions

function generateRandomNumber(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// this function will create the top header row of hours
function headerRow() {
  // I need to first make a blank cell

  var trElement = document.createElement('tr');
  for (var i = 0; i < headerArrayHours.length; i++) {
    var thElement = document.createElement('th');
    thElement.textContent = headerArrayHours[i];
    trElement.appendChild(thElement);
  }
  parentElement.appendChild(trElement);
}


// executable code

headerRow();
// cookieLocations -> array of all of my object instances
for(var i=0; i<cookieLocations.length; i++){
  cookieLocations[i].generateHourlyCookies();
  cookieLocations[i].render();
}



