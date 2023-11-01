const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function CookieStand(location, minCustomers, maxCustomers, avgCookiesPerSale) {
  this.location = location;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookiesPerSale = avgCookiesPerSale;
  this.sales = [];

  this.estimateSales = function () {
    // function estimateSales(store) {
    const sales = [];
    for (let i = 0; i < hours.length; i++) {
      const numCustomers = randomInRange(this.minCustomers, this.maxCustomers);
      const hourSales = Math.ceil(numCustomers * this.avgCookiesPerSale);
      sales.push(hourSales);
    }
    console.log(sales);
    return sales;
  };

}

// LoctionSales.prototype.estimateSales = function () {
//   const sales = [];
//   for (let i = 0; i < hours.length; i++) {
//     const numCustomers = randomInRange(this.minCustomers, this.maxCustomers);
//     const hourSales = Math.ceil(numCustomers * this.avgCookiesPerSale);
//     sales.push(hourSales);
//   }
//   return sales;
// };



function randomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const container = document.getElementById('root');
const cookieStandArticle = document.createElement('article');
container.appendChild(cookieStandArticle);



function renderHeader() {
  //table
  const tableElem = document.createElement('table');
  cookieStandArticle.appendChild(tableElem);

  const headerRow = document.createElement('tr');
  tableElem.appendChild(headerRow);

  for (let i = 0; i < hours.length; i++) {
    const hourHeaderCell = document.createElement('th');
    headerRow.appendChild(hourHeaderCell);
    hourHeaderCell.textContent = hours[i];
  }


}

renderHeader();

// for (let i = 0; i < stores.length; i++) {
//   const store = stores[i];

//   // Create a row for this cookie stand
//   const dataRow = document.createElement('tr');
//   tableElem.appendChild(dataRow);

//   // Location cell
//   const locationCell = document.createElement('td');
//   dataRow.appendChild(locationCell);
//   locationCell.textContent = store.location;
// }

CookieStand.prototype.render = function () {
  // need an article per cookie stand
  const heading = document.createElement('h2');
  cookieStandArticle.appendChild(heading);
  heading.textContent = this.location;

  // const hoursList = document.createElement('ul');
  // cookieStandArticle.appendChild(hoursList);

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

// function render(cookieStand) {
//   cookieStand.sales = cookieStand.estimateSales();
//   cookieStand.render();
// }


const seattle = new CookieStand('Seattle', 23, 65, 6.3);
const tokyo = new CookieStand('Tokyo', 3, 24, 1.2);
const dubai = new CookieStand('Dubai', 11, 38, 3.7);
const paris = new CookieStand('Paris', 20, 38, 2.3);
const lima = new CookieStand('Lima', 2, 16, 4.6);

const stores = [seattle, tokyo, dubai, paris, lima];

// render(seattle);
// render(tokyo);
// render(dubai);
// render(paris);
// render(lima);

// const seattle = {
//   location: 'Seattle',
//   minCustomers: 23,
//   maxCustomers: 65,
//   avgCookiesPerSale: 6.3,
//   sales: [],
//   estimate: function () {
//     this.sales = estimateSales(this);
//   },
// };


// const tokyo = {
//   location: 'Tokyo',
//   minCustomers: 3,
//   maxCustomers: 24,
//   avgCookiesPerSale: 1.2,
//   sales: [],
//   estimate: function () {
//     this.sales = estimateSales(this);
//   },
// };

// const dubai = {
//   location: 'Dubai',
//   minCustomers: 11,
//   maxCustomers: 38,
//   avgCookiesPerSale: 3.7,
//   sales: [],
//   estimate: function () {
//     this.sales = estimateSales(this);
//   },
// };

// const paris = {
//   location: 'Paris',
//   minCustomers: 20,
//   maxCustomers: 38,
//   avgCookiesPerSale: 2.3,
//   sales: [],
//   estimate: function () {
//     this.sales = estimateSales(this);
//   },
// };

// const lima = {
//   location: 'Lima',
//   minCustomers: 2,
//   maxCustomers: 16,
//   avgCookiesPerSale: 4.6,
//   sales: [],
//   estimate: function () {
//     this.sales = estimateSales(this);
//   },
// };


// // initialize sales
// seattle.estimate();
// tokyo.estimate();
// dubai.estimate();
// paris.estimate();
// lima.estimate();