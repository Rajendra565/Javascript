

// 7. Sort products from low price → high price

// 8. Sort products from high price → low price


// 9. Get the total quantity of all products

const products = [
  {
    id: 1,
    name: "Laptop",
    category: "Electronics",
    price: 55000,
    rating: 4.5,
    inStock: true,
    quantity: 10,
    brand: "Dell"
  },
  {
    id: 2,
    name: "Smartphone",
    category: "Electronics",
    price: 25000,
    rating: 4.3,
    inStock: true,
    quantity: 15,
    brand: "Samsung"
  },
  {
    id: 3,
    name: "Headphones",
    category: "Electronics",
    price: 1999,
    rating: 4.2,
    inStock: true,
    quantity: 30,
    brand: "Boat"
  },
  {
    id: 4,
    name: "Running Shoes",
    category: "Footwear",
    price: 2999,
    rating: 4.4,
    inStock: true,
    quantity: 20,
    brand: "Nike"
  },
  {
    id: 5,
    name: "Backpack",
    category: "Accessories",
    price: 1499,
    rating: 4.1,
    inStock: false,
    quantity: 0,
    brand: "Wildcraft"
  },
  {
    id: 6,
    name: "Smart Watch",
    category: "Electronics",
    price: 4999,
    rating: 4.6,
    inStock: true,
    quantity: 12,
    brand: "Noise"
  },
  {
    id: 7,
    name: "T-Shirt",
    category: "Clothing",
    price: 799,
    rating: 4.0,
    inStock: true,
    quantity: 40,
    brand: "Puma"
  },
  {
    id: 8,
    name: "Jeans",
    category: "Clothing",
    price: 1799,
    rating: 4.3,
    inStock: true,
    quantity: 25,
    brand: "Levis"
  },
  {
    id: 9,
    name: "Keyboard",
    category: "Electronics",
    price: 1299,
    rating: 4.4,
    inStock: true,
    quantity: 18,
    brand: "Logitech"
  },
  {
    id: 10,
    name: "Water Bottle",
    category: "Home",
    price: 599,
    rating: 4.2,
    inStock: false,
    quantity: 0,
    brand: "Milton"
  }
];

// 1. Get all product names
const productNames=products.map((val)=>{
    return val.name
})
console.log("Product Names:", productNames)



// 2. Get products above ₹2000
const productsAbove2000=products.filter((val)=>{
    return val.price>2000
})
console.log("Products above ₹2000:", productsAbove2000)

// 3. Get products with rating >= 4.5
const highRatedproducts=products.filter((val)=>{
    return val.rating>=4.5
})
console.log("Products with rating >= 4.5:", highRatedproducts)
// 4. Get products that are in stock
const instockProducts=products.filter((val)=>{
    return val.inStock===true
})

console.log("Products that are in stock:", instockProducts)

// 5. Find the product named "Keyboard"
const keyboardProduct=products.find((val)=>{
    return val.name==="Keyboard"
})
console.log("Product named 'Keyboard':", keyboardProduct)

// 6. Calculate the total price of all products
const totalprice=products.reduce((acc,val)=>{

    return acc+val.price
},0)
console.log("Total price of all products:", totalprice)
// 7. Sort products from low price → high price
const sortedLowToHigh=products.sort((a,b)=>{
    return a.price-b.price;
})

// 9. Get the total quantity of all products
const totalQuantity=products.reduce((acc,val)=>{
    return acc+val.quantity
},0)
console.log("Total quantity of all products:", totalQuantity)