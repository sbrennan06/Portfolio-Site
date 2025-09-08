// Variables
let itemName = "SoundPod"; // Mini bluetooth speaker SKU 000021534
let unitCost = 16.23; // $16.23
let currentStock = 1400; 
let reorderLevel = 1500; 
let targetStock = 2750; // 2,750 units - monthly sale goal 2,500 units  
let weeklyDemand = 625; 
let supplierLeadTimeWeeks = 2; // 1250 anticipated units sold during lead time

// Inventory Metrics
let weeksOfCover = weeklyDemand > 0 ? currentStock / weeklyDemand : Infinity;
let stockDeficit = Math.max(0, targetStock - currentStock);
let reorderQuantity = (currentStock <= reorderLevel || weeksOfCover < supplierLeadTimeWeeks) ? Math.ceil(stockDeficit) : 0;
let estimatedReorderCost = reorderQuantity * unitCost;
let reorderNow = currentStock <= reorderLevel || weeksOfCover < supplierLeadTimeWeeks; // boolean

// Console Display
console.log("Product Name: " + itemName);
console.log("Weeks of Cover: " + weeksOfCover.toFixed(2) + " weeks"); // round to two decimal places
console.log("Re-order Now? " + reorderNow); // t/f scenario
console.log("Recommended Reorder Quantity: " + reorderQuantity);
console.log("Estimated Cost of Order: $" + estimatedReorderCost.toFixed(2)); // round to two decimal places


