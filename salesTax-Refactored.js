var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];



function calculateSalesTax(salesData, taxRates) {
  // Implement your code here

  var report = {};
  var sumSales = 0;
  var province = "";

  //helper: loop thru array and sum together the numbers of the array
  function sumArray(arr){
    var sum = 0;
    for(var i = 0; i<arr.length; i++){
      sum += arr[i];
    }
    return sum;
  }

  //iterate thru salesData
  for (var i = 0; i < salesData.length; i++){
    //get the province of the company
    province = salesData[i].province;

    //check for duplicate company name
    //if company name not found in report
    if (!report[salesData[i].name]){
      report[salesData[i].name] = {};

      //loop thru sales and sum
      sumSales = sumArray(salesData[i].sales);

      //assign sum of sales to report
      report[salesData[i].name].totalSales = sumSales;

      //enter the total tax to report
      report[salesData[i].name].totalTaxes = sumSales * taxRates[province];

    }
    else {
      sumSales = sumArray(salesData[i].sales)

      report[salesData[i].name].totalSales += sumSales;

      report[salesData[i].name].totalTaxes += sumSales * taxRates[province];

    }

    //reset the sumSales variable for next element in salesData
      sumSales = 0;
  }

  console.log(report);
  return report;
}

var results = calculateSalesTax(companySalesData, salesTaxRates);

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/
