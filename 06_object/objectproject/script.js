const products = [
    {
        id: 1,
        date: "2026-09-01",
        productImage: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
        productDetails: "Men's Running Shoes",
        productType: "newProduct",
        price: 1499
    },
    {
        id: 2,
        date: "2026-08-31",
        productImage: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
        productDetails: "Wireless Bluetooth Headphones",
        productType: "oldProduct",
        price: 1999
    },
    {
        id: 3,
        date: "2026-08-30",
        productImage: "https://images.unsplash.com/photo-1524805444758-089113d48a6d",
        productDetails: "Premium Analog Watch",
        productType: "newProduct",
        price: 2499
    },
    {
        id: 4,
        date: "2026-08-29",
        productImage: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
        productDetails: "Laptop Backpack",
        productType: "oldProduct",
        price: 1299
    },
    {
        id: 5,
        date: "2026-08-28",
        productImage: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
        productDetails: "Cotton Casual T-Shirt",
        productType: "newProduct",
        price: 799
    },
    {
        id: 6,
        date: "2026-08-27",
        productImage: "https://images.unsplash.com/photo-1542272604-787c3835535d",
        productDetails: "Men's Denim Jeans",
        productType: "oldProduct",
        price: 1799
    },
    {
        id: 7,
        date: "2026-08-26",
        productImage: "https://images.unsplash.com/photo-1557935728-e6d1eaabe558",
        productDetails: "Smart Fitness Band",
        productType: "newProduct",
        price: 2299
    },
    {
        id: 8,
        date: "2026-08-25",
        productImage: "https://images.unsplash.com/photo-1627123424574-724758594e93",
        productDetails: "Leather Wallet",
        productType: "oldProduct",
        price: 599
    },
    {
        id: 9,
        date: "2026-08-24",
        productImage: "https://images.unsplash.com/photo-1527814050087-3793815479db",
        productDetails: "Wireless Gaming Mouse",
        productType: "newProduct",
        price: 1199
    },
    {
        id: 10,
        date: "2026-08-23",
        productImage: "https://images.unsplash.com/photo-1587829741301-dc798b83add3",
        productDetails: "Mechanical Keyboard",
        productType: "oldProduct",
        price: 2999
    },
    {
        id: 11,
        date: "2026-08-22",
        productImage: "https://images.unsplash.com/photo-1602143407151-7111542de6e8",
        productDetails: "Sports Water Bottle",
        productType: "newProduct",
        price: 499
    },
    {
        id: 12,
        date: "2026-08-21",
        productImage: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf",
        productDetails: "Men's Casual Shirt",
        productType: "oldProduct",
        price: 999
    },
    {
        id: 13,
        date: "2026-08-20",
        productImage: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
        productDetails: "Smartphone Stand",
        productType: "newProduct",
        price: 399
    },
    {
        id: 14,
        date: "2026-08-19",
        productImage: "https://images.unsplash.com/photo-1553531384-cc64ac80f931",
        productDetails: "Travel Duffle Bag",
        productType: "oldProduct",
        price: 1599
    },
    {
        id: 15,
        date: "2026-08-18",
        productImage: "https://images.unsplash.com/photo-1609592424823-2a2b8a9c2e91",
        productDetails: "USB-C Fast Charger",
        productType: "newProduct",
        price: 899
    },
    {
        id: 16,
        date: "2026-08-17",
        productImage: "https://images.unsplash.com/photo-1511499767150-a48a237f0083",
        productDetails: "Sunglasses for Men",
        productType: "oldProduct",
        price: 699
    },
    {
        id: 17,
        date: "2026-08-16",
        productImage: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
        productDetails: "Running Sports T-Shirt",
        productType: "newProduct",
        price: 899
    },
    {
        id: 18,
        date: "2026-08-15",
        productImage: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1",
        productDetails: "Portable Bluetooth Speaker",
        productType: "oldProduct",
        price: 1599
    },
    {
        id: 19,
        date: "2026-08-14",
        productImage: "https://images.unsplash.com/photo-1549298916-b41d501d3772",
        productDetails: "Classic Canvas Shoes",
        productType: "newProduct",
        price: 1299
    },
    {
        id: 20,
        date: "2026-08-13",
        productImage: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c",
        productDetails: "Smart LED Desk Lamp",
        productType: "oldProduct",
        price: 1099
    }
];
let allCard = document.querySelector('.cards');
let text = ""


products.forEach((val) => {
   return text +=`<div class=" card max-w-sm overflow-hidden rounded-xl bg-white shadow-lg">
                <!-- Product Image -->
                <img
                src=${val.productImage}
                alt="Men's Running Shoes"
                class="h-56 w-full object-cover"
              />
            
                <!-- Product Details -->
                <div class="p-5">
                    <div class="mb-3 flex items-center justify-between">
                        <span class="rounded-full ${
       val.productType === "newProduct"
           ? "bg-green-100 text-green-700"
           : "bg-red-100 text-red-700"
       } px-3 py-1 text-xs font-semibold">
  ${val.productType === "newProduct" ? "New Product" : "Old Product"}
</span>

                        <span class="text-sm text-gray-500">
                    01 Sep 2026
                  </span>
                    </div>

                    <h2 class="mb-2 text-xl font-bold text-gray-800">
                        Men's Running Shoes
                    </h2>

                    <p class="mb-4 text-2xl font-bold text-blue-600">
                        ₹1,499
                    </p>

                    <button
                  class="w-full rounded-lg bg-black px-4 py-3 font-semibold text-white transition hover:bg-gray-800"
                >
                  Add to Cart
                </button>
                </div>
            </div>`
})

allCard.innerHTML=text