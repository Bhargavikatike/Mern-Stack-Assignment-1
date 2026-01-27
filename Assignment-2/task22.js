const order = {
                  orderId: "ORD1001",
                  customer: {
                    name: "Anita",
                    address: {
                      city: "Hyderabad",
                      pincode: 500085
                    }
                  },
                  items: [
                    { product: "Laptop", price: 70000 }
                  ]
                };
//Create a deep copy of order
const cpyorder= structuredClone(order)
//modify customer.address.city in copied obj
cpyorder.customer.address.city="secundrabad"
//modify items[0].price in copied
cpyorder.items[0].product="TV"
cpyorder.items[0].price=60000
console.log(order)
console.log(cpyorder)
/*
Verify original object remains unchanged After creating a deep copy,
changing values in the copied object does not affect the original
object. Both objects work independently and safely.
*/