 
    let productName = "SoundPod"; // Mini bluetooth speaker SKU 000021534
    let costPerUnit = 16.23; // $16.23
    let basePrice = 28.99; //$28.99
    let discountRate = .12; // 12%
    let salesTaxRate = .0775; // 7.75%
    let fixedMonthlyCosts = 1950; // $1,950
   
    let discountedPrice = basePrice * (1 - discountRate);
    let finalPriceWithTax = discountedPrice * (1 + salesTaxRate);
    let profitPerUnit = finalPriceWithTax - costPerUnit;
    let breakEvenUnits = Math.ceil(fixedMonthlyCosts / profitPerUnit); // round up to next integer
    let isProfitablePerUnit = profitPerUnit > 0;

    console.log("Product: " + productName);
    console.log("Discounted price: $" + discountedPrice.toFixed(2)); // currency round to 2 decimals
    console.log("Final price with tax: $" + finalPriceWithTax.toFixed(2)); // currency round to 2 decimals
    console.log("Profit per unit: $" + profitPerUnit.toFixed(2)); // currency round to 2 decimals
    console.log("Break-even units: " + breakEvenUnits);
    console.log("Per-unit profitability: " + isProfitablePerUnit); // t/f scenario


