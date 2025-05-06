const user = {
    PremiumActive: true,
    NotFreeTrial: true,
    CountryAvailable: true
};

if (user.PremiumActive && user.NotFreeTrial && user.CountryAvailable) {
    console.log("Exclusive content is liberated.")
} else {
    console.log("Exclusive content has not been released.")
}

if(!user.PremiumActive) console.log("You do not have a premium subscription");
if(!user.NotFreeTrial) console.log("You are using the free trial");
if(!user.CountryAvailable) console.log("The content is not available in your country");
