🧠 Logical Operators in JavaScript – My Learning Journey
📝 About This Guide
I'm documenting my experiments with logical operators (|| and &&) through practical challenges.

📝 OR (||) Challenges
🎯 Challenge 1: The Trusted Messenger
Goal: Build a notification system that:
// Uses the user’s preferred email if available,
// Falls back to their secondary email,
// Defaults to an emergency email if neither exists.

🎯 Challenge 2: Secret Portal
Goal: The portal unlocks if the player meets at least one of the criteria.

🎯 Challenge 3: The Surprise Bonus
Goal: Grant free shipping if:
// User is a VIP ("yes", case-insensitive),
// Order total ≥ $200,
// An active promotion is running.

🎯 Challenge 4: The Mysterious Name
Goal: Handle invalid names ("", null, undefined) by using:
// The user’s nickname (if valid),
// Otherwise, assign "Guest" + random number.
(How to solve this with ||?)

🎯 Challenge 5: The Voice Assistant
Goal: Respond with:
// A custom response from the database,
// Or the default system response,
// Or silence if no data exists.

📝 AND (&&) Challenges
🎯 Challenge 1: E-commerce Checkout Validation
Goal: Ensure:
// Shipping address is complete,
// Payment method is selected,
// Cart is not empty.

Where && comes in:
// The "Complete Purchase" button enables only if all conditions are true.

🎯 Challenge 2: Bank App Login
Goal: Allow access only if:
// CPF and password are correct,
// User is not blocked,
// Device is authorized.

Where && comes in:
// The "Access Account" button requires all conditions.

🎯 Challenge 3: Social Media Post
Goal: Publish only if:
// Text is valid (not empty/within limits),
// No recent policy violations,
// Media (if attached) has a valid format.

Where && comes in:
// The "Publish" button checks all rules.

🎯 Challenge 4: Premium Video Access Control
Goal: Unlock video only for users who:
// Have an active subscription,
// Are not on a free trial,
// Are in a supported country.

Where && comes in:
// Content loads only if all conditions pass.

🎯 Challenge 5: Multiplayer Mode
Goal: Grant access only if:
// Tutorial is completed,
// Internet is stable,
// Player is not banned.

Where && comes in:
// Ensures a fair and secure multiplayer experience.

(Future challenges will follow this format!)
