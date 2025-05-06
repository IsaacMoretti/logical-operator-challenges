const hasSSN = true;
const hasPassword = true;
const isUserNotBlocked = true;
const isAuthorizedDevice = false;

if (hasSSN && hasPassword && isUserNotBlocked && isAuthorizedDevice) {
    console.log("Access granted");
} else {
    console.log("Acess denied");
}

if (!hasSSN) console.log("- Invalid SSN."); {
  if (!hasPassword) console.log("- Incorrect password.");
  if (!isUserNotBlocked) console.log("- User blocked. Contact support.");
  if (!isAuthorizedDevice) console.log("- Unauthorized device.");
}