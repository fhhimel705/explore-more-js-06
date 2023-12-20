/*----
1. if number of ticket less than 100, per ticket price : 100.
2. if number of ticket less than 200,but more than 100 then first 100 tickets will be:100 and the rest tickets will be 90.
3. if you purchase more than 200 tickects

*** Make a code that will take ticket quantity as input and will give total ticket cost as output.

***  first 100 ---> 100tk
***  101-200 ---> 90tk
***  200+ ---> 70tk
*/
function ticketQuantity(ticket){
        let firstPrice = 100 * 100;
        let secondPrice = 100 * 90;
        if (ticket <= 100) {
            let totalPrice = ticket * 100;
            return totalPrice; 
        }
        else if(ticket <= 200){
            totalPrice = ((ticket - 100) * 90) + firstPrice;
            return totalPrice;
        }
        else{
            totalPrice = ((ticket - 200) * 70) + firstPrice + secondPrice;
            return totalPrice;
        }
        }
    console.log(ticketQuantity(200));