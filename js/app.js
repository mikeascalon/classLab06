const seattle = {
  minCustomers: 23,
  maxCustomers: 65,
  averageCustomers: 6.3,
  cusPerHour: [],
  timeOfOperation: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  totalCusPerHour: function () {
    for (let i = 0; i < this.timeOfOperation.length; i++) {
      this.cusPerHour.push(randomCustPerHour(this.minCustomers, this.maxCustomers));
    }
  },
};

// Call the totalCusPerHour method to generate data
seattle.totalCusPerHour();

// Display the sales data in the cityContainerElement
const cityContainerElement = document.getElementById('citySales');
let totalSales = 0;

for (let i = 0; i < seattle.timeOfOperation.length; i++) {
  const listItem = document.createElement('li');
  listItem.textContent = `${seattle.timeOfOperation[i]}: ${seattle.cusPerHour[i]} customers`;
  cityContainerElement.appendChild(listItem);

  totalSales += seattle.cusPerHour[i];
}

// Add the total sales to the end
const totalListItem = document.createElement('li');
totalListItem.textContent = `Total: ${totalSales} customers`;
cityContainerElement.appendChild(totalListItem);

function randomCustPerHour(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
