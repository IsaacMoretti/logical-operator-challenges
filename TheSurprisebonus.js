let isCustomerVip = prompt("Are you vip? (yes/no)").toLowerCase();
let ifSale = Number(prompt("How much does the product cost?"));
const activePromotion = false;
if (isCustomerVip === "yes" || ifSale >= 200 || activePromotion) {
    alert("We offer reliable shipping services.");
} else {
    alert("We do not offer reliable shipping service.")
}
