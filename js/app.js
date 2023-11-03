const newStore = [];






const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

const container = document.getElementById('root');
const cookieStandArticle = document.createElement('article');
container.appendChild(cookieStandArticle);

const tableElem = document.createElement('table');
tableElem.id = 'salesData';
cookieStandArticle.appendChild(tableElem);


let CookieStand = function (location, minCustomers, maxCustomers, avgCookiesPerSale) {
  this.location = location;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookiesPerSale = avgCookiesPerSale;
  this.custEachHour = [];
  this.sales = [];

};



CookieStand.prototype.renderData = function() {
  const dataRow = document.createElement('tr');


  const locationDataCell = document.createElement('td');
  locationDataCell.textContent = this.location;
  dataRow.appendChild(locationDataCell);


  for (let i = 0; i < this.sales.length; i++) {
    const salesDataCell = document.createElement('td');
    salesDataCell.textContent = this.sales[i];
    dataRow.appendChild(salesDataCell);
  }
  tableElem.appendChild(dataRow);

  let dailyTotal = 0;
  for (let i = 0; i < this.sales.length; i++) {
    dailyTotal += this.sales[i];
    console.log(dailyTotal);
  }

  const finalDailyTotalCell = document.createElement('td');
  finalDailyTotalCell.textContent = dailyTotal;
  dataRow.appendChild(finalDailyTotalCell);

  tableElem.appendChild(dataRow);
};


CookieStand.prototype.estimateSales = function () {
  // function estimateSales(store) {
  // const sales = [];
  for (let i = 0; i < hours.length; i++) {
    const numCustomers = randomInRange(this.minCustomers, this.maxCustomers);
    const hourSales = Math.ceil(numCustomers * this.avgCookiesPerSale);
    this.custEachHour.push(numCustomers);
    this.sales.push(hourSales);
  }
  // console.log(sales);
  // return sales;
};




function randomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function renderHeader() {
  // header
 
  const headerRow = document.createElement('tr');
  tableElem.appendChild(headerRow);

  let label = document.createElement('th');
  label.textContent='location';
  headerRow.appendChild(label);

  for (let i = 0; i < hours.length; i++) {
    const hourHeaderCell = document.createElement('th');
    headerRow.appendChild(hourHeaderCell);
    hourHeaderCell.textContent = hours[i];
  }
  const dailytotalheader = document.createElement('th');
  headerRow.appendChild(dailytotalheader);
  dailytotalheader.textContent='Daily Location Total';
}

renderHeader();

function renderFooter() {
  const footerRow = document.createElement('tr');
  tableElem.appendChild(footerRow);

  const labelCell = document.createElement('td');
  labelCell.textContent = 'Total';
  footerRow.appendChild(labelCell);

  for (let i = 0; i < hours.length; i++) {
    const totalSalesCell = document.createElement('td');
    totalSalesCell.textContent = calculateTotalSales(i);
    footerRow.appendChild(totalSalesCell);
  }
}

function calculateTotalSales(hourIndex) {
  let total = 0;
  for (let i = 0; i < stores.length; i++) {
    total += stores[i].sales[hourIndex];
  }
  return total;
}



CookieStand.prototype.render = function () {
  // need an article per cookie stand
  const heading = document.createElement('h2');
  cookieStandArticle.appendChild(heading);
  heading.textContent = this.location;

  let totalSold = 0;

  for (let i = 0; i < this.sales.length; i++) {
    const salesItem = document.createElement('li');
    hoursList.appendChild(salesItem);
    const cookiesSoldThisHour = this.sales[i];
    totalSold += cookiesSoldThisHour;
    const salesInfo = `${hours[i]}: ${cookiesSoldThisHour} cookies`;
    salesItem.textContent = salesInfo;
  }
  // add total line
  const totalItem = document.createElement('li');
  hoursList.appendChild(totalItem);
  const totalInfo = `Total: ${totalSold} cookies sold`;
  totalItem.textContent = totalInfo;


};




const seattle = new CookieStand('Seattle', 23, 65, 6.3);
const tokyo = new CookieStand('Tokyo', 3, 24, 1.2);
const dubai = new CookieStand('Dubai', 11, 38, 3.7);
const paris = new CookieStand('Paris', 20, 38, 2.3);
const lima = new CookieStand('Lima', 2, 16, 4.6);

const stores = [seattle, tokyo, dubai, paris, lima];

seattle.estimateSales();
seattle.renderData();

tokyo.estimateSales();
tokyo.renderData();

dubai.estimateSales();
dubai.renderData();

paris.estimateSales();
paris.renderData();

lima.estimateSales();
lima.renderData();

renderFooter();

//to do  table


function NewStore(location, miniCustomer, maxiCustomer, averageCustomerPerHour) {
  this.location = location;
  this.miniCustomer = miniCustomer;
  this.maxiCustomer = maxiCustomer;
  this.averageCustomerPerHour = averageCustomerPerHour;

}

//handle submition
const form = document.getElementById('addLocationForm');

function handleSubmit (event) {
  event.preventDefault();


  const locationName = event.target.locationName.value;
  const miniCustomer = event.target.minimumCustomerPerHour.value;
  const maxiCustomer = event.target.maximumCustomerPerHour.value;
  const avgCustomer = event.target.averageCustomerPerHour.value;

  const newStore = new NewStore(locationName, miniCustomer, maxiCustomer, avgCustomer);
  newStore.estimateSales();
  newStore.renderData();


  stores.push(newStore);

  // Create a new row for the store's data and append it to the table
  const dataRow = document.createElement('tr');

  const locationDataCell = document.createElement('td');
  locationDataCell.textContent = newStore.location;
  dataRow.appendChild(locationDataCell);

  for (let i = 0; i < newStore.sales.length; i++) {
    const salesDataCell = document.createElement('td');
    salesDataCell.textContent = newStore.sales[i];
    dataRow.appendChild(salesDataCell);
  }

  const finalDailyTotalCell = document.createElement('td');
  finalDailyTotalCell.textContent = newStore.sales.reduce((total, sales) => total + sales, 0);
  dataRow.appendChild(finalDailyTotalCell);

  tableElem.appendChild(dataRow);

  event.target.reset();

}



form.addEventListener('submit', handleSubmit);
