const mainEmail = null;
let secondaryEmail = "secondary@provider.com";
let emergencyEmail = "emergency@system.com";

// (The || operator returns the first truthy value)
const destinationEmail = mainEmail || secondaryEmail || emergencyEmail; 
// Outputs the selected email ('secondary@provider.com' in this case)
console.log(destinationEmail);