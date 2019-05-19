// Get a reference to the table body
var tbody = d3.select("tbody");



// from data.js
var tableData = data;
// adding the new datum into Array using splice
tableData.splice(2, 1, {
    datetime: "1/28/1996",
    city: "dallas",
    state: "tx",
    country: "us",
    shape: "star",
    durationMinutes: "5 mins.",
    comments: "Cowboys win a superbowl, that's alien!."
    });

// Console.log the weather data from data.js
console.log(data);

// Step 1: Loop Through `data` and console.log each weather report object
data.forEach(function(UFOtable) {
  console.log(UFOtable);
});

// // Step 2:  Use d3 to append one table row `tr` for each weather report object
// // Don't worry about adding cells or text yet, just try appending the `tr` elements.
data.forEach(function(UFOtable) {
  console.log(UFOtable);
  var row = tbody.append("tr");
});

// // Step 3:  Use `Object.entries` to console.log each weather report value
data.forEach(function(UFOtable) {
  console.log(UFOtable);
  var row = tbody.append("tr");

  Object.entries(UFOtable).forEach(function([key, value]) {
    console.log(key, value);
  });
});




data.forEach((UFOtable) => {

    var row = tbody.append("tr");
  
    Object.values(UFOtable).forEach((value) => {
  
      row.append("td").text(value);
  
    });
  });