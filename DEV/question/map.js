const products = [{ name: "T-Shirt", price: 25 }, 
                    { name: "Headphones", price: 125 }, 
                    { name: "Keyboard", price: 75 }, 
                    { name: "Monitor", price: 200 },];
                
//get number of products whose price is at least 100
let productabove100 = products.map(function(n){
    return n.price;
}).filter(function(price){
    return price>=100
})
console.log(productabove100)