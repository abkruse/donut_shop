( function () {
  var Shop = function(location, minCustomers, maxCustomers, avgPurchase, hoursOpen) {
    this.location = location;
    this.minCustomers = minCustomers;
    this.maxCustomers = maxCustomers;
    this.avgPurchase = avgPurchase;
    this.hoursOpen = hoursOpen;
    this.total = 0;

    this.hourlyTotal = function() {
      var custPerHour = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
      return Math.floor(custPerHour * this.avgPurchase);
    }
  }

    var hoursOpen = ["7:00", "8:00", "9:00", "10:00", "11:00", "12:00", "1:00", "2:00", "3:00", "4:00", "5:00"];

    var makeHeaders = function() {
    var table, headings, titleRow, titleText;
    table = document.getElementById('donut-table');
    headings = ["Locations", "7:00", "8:00", "9:00", "10:00", "11:00", "12:00", "1:00", "2:00", "3:00", "4:00", "5:00", "Totals"];

    for (var i = 0; i < headings.length; i++) {
       titleRow = document.createElement('th');
       titleText = document.createTextNode(headings[i]);
       titleRow.appendChild(titleText);
       table.appendChild(titleRow);
      }
    }

   Shop.prototype.makeTable = function() {
    var total, newRow, newData, newText, table;

    total = 0;
    table = document.getElementById('donut-table');
    newRow = document.createElement('tr');
    newData = document.createElement('td');
    newText = document.createTextNode(this.location);
    newData.appendChild(newText);
    newRow.appendChild(newData);

    for (var i = 0; i < hoursOpen.length; i++) {
      var donutsPerHour = this.hourlyTotal();
      newData = document.createElement('td');
      newText = document.createTextNode(donutsPerHour);
      newData.appendChild(newText);
      newRow.appendChild(newData);
      total += donutsPerHour;
    }

    newData = document.createElement('td');
    newText = document.createTextNode(total);
    newData.appendChild(newText)
    newRow.appendChild(newData);
    table.appendChild(newRow);
   }

   var locations = [];
    locations.push(downtown = new Shop("Downtown", 8, 43, 4.5));
    locations.push(capHill = new Shop("Capitol Hill", 4, 37, 2.0));
    locations.push(slu = new Shop("South Lake Union", 9, 23, 6.33));
    locations.push(wedgewood = new Shop("Wedgewood", 2, 28, 1.25));
    locations.push(ballard = new Shop("Ballard", 8, 58, 3.75));

  makeHeaders();

  for (var j = 0; j< locations.length; j++) {
    locations[j].makeTable();
   }

  var createNewShop = function(e) {
    e.preventDefault();
    var inputShopName = document.getElementById('shop-name').value;
    var inputMinCust = document.getElementById('min-cust').value;
    var inputMaxCust = document.getElementById('max-cust').value;
    var inputAvgPurch = document.getElementById('avg-purch').value;
    var newLocation = new Shop(inputShopName, inputMinCust, inputMaxCust, inputAvgPurch);
    locations.push(newLocation);
    newLocation.makeTable();

    document.getElementById('shop-name').value = '';
    document.getElementById('min-cust').value = '';
    document.getElementById('max-cust').value = '';
    document.getElementById('avg-cust').value = '';
   }

  var el = document.getElementById('input-button');
  el.addEventListener('click', createNewShop, false);

  } ());

//Colin gave me the idea for the flow makeTable method during the team whiteboard section on Tuesday.
