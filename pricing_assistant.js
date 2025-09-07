<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CodingChallenge02a</title>
    <h1> Product Pricing Assistant</h1>
</head>
<body>
    <script>
    let productName = "Norton Antivirus 2003 \(Boxed CD Edition\)"
    let costPerUnit = 16.23
    let basePrice = 28.99
    let discountRate = .12
    let salesTaxRate = .0775
    let fixedMonthlyCosts = 1950
   
    let discountedPrice = basePrice * (1 - discountRate);
    let finalPriceWithTax = discountedPrice * (1 + salesTaxRate);
    let profitPerUnit = finalPriceWithTax - costPerUnit;
    let breakEvenUnits = Math.ceil(fixedMonthlyCosts / profitPerUnit);
    isProfitablePerUnit = profitPerUnit > 0;

    console.log("Product: " + productName);
    console.log("Discounted price: $" + discountedPrice.toFixed(2));
    console.log("Final price with: tax $" + finalPriceWithTax.toFixed(2));
    console.log("Profit per unit: $" + profitPerUnit.toFixed(2));
    console.log("Break-even units: " + breakEvenUnits);
    console.log("Per-unit profitability: " + isProfitablePerUnit);

</script>
</body>
</html>