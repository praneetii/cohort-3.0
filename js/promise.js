let orderAccepted = true;
let order = new Promise((resolve, reject) => {
    console.log("Order is being processed...");
    setTimeout(() => {
        if (orderAccepted) {
            resolve("Order has been accepted.");
        } else {
            reject("Order has been rejected.");
        }
    }, 2000);
});
order.then(function (message) {
    console.log(message);
});
order.catch(function(error) {
    console.log(error);
});