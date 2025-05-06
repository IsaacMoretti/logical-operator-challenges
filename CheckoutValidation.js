const hasDeliveryAddress = true;
const hasPaymentMethod = true;; 
const isCartEmpty = true;

if (hasDeliveryAddress && hasPaymentMethod && isCartEmpty) {
    console.log("Finalize purchase"); 
} else { 
    console.log("Please complete your cart, payment method, or shipping address before checkout.");
}
