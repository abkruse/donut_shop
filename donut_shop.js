( function () {
var Shop = function(location, minCustomers, maxCustomers, avgPurchase) {
      this.location = location;
      this.minCustomers = minCustomers;
      this.maxCustomers = maxCustomers;
      this.avgPurchase = avgPurchase;
      this.hoursOpen = 11;
      }

    Shop.prototype.custPurchases = function() {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
    }

    Shop.prototype.hourlyTotal = function(location) {
     return Math.floor(Shop.prototype.custPurchases * this.avgPurchase);
     }

     Shop.prototype.weekTotals = function() {
      var total = 0;
      for (var i = 0; i < 7; i++) {
        total +=this.hourlyTotal;
      }
      return total;
     }

    var hourlyPurchases = function(location){
      var donuts = 0;
      for (var i = 0; i < 11; i++); {
        var theTotals = location.totalDonuts();
      var addData = document.createElement('td');
      addData.textContent = theTotals;
      var position = document.getElementsByTagName('tr')[1];
      position.appendChild(addData);

    var downtown = new Shop("Downtown", 8, 43, 4.5);
    var capHill = new Shop("Capitol Hill", 4, 37, 2.0);
    var slu = new Shop("South Lake Union", 9, 23, 6.33);
    var wedgewood = new Shop("Wedgewood", 2, 28, 1.25);
    var ballard = new Shop("Ballard", 8, 58, 3.75);

      }
    }
    hourlyPurchases(downtown);
  } ());
