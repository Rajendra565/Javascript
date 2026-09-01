const users = [
  {
    id: 1,
    name: "Rahul Sharma",
    email: "rahul@example.com",
    age: 24,
    city: "Bengaluru"
  },
  {
    id: 2,
    name: "Priya Patel",
    email: "priya@example.com",
    age: 22,
    city: "Mumbai"
  },
  {
    id: 3,
    name: "Amit Kumar",
    email: "amit@example.com",
    age: 27,
    city: "Delhi"
  },
  {
    id: 4,
    name: "Sneha Das",
    email: "sneha@example.com",
    age: 25,
    city: "Bhubaneswar"
  },
  {
    id: 5,
    name: "Arjun Reddy",
    email: "arjun@example.com",
    age: 23,
    city: "Hyderabad"
  }
];


// users.map((val)=>{
//     console.log(val.age)
// })

let filterarray=users.filter((val)=>{
    return val.age>=25
})
console.log(filterarray)