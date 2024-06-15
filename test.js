//MAP:

let ary = [
  {
    name: "Usman",
    city: "Havelian",
  },
  {
    name: "Ali",
    city: "Abbotabad",
  },
  {
    name: "Ahsan",
    city: "Haripur",
  },
  {
    name: "Amir",
    city: "Islamabad",
  },
];

let b = ary.map(function test(e) {
  return e.name + " " + e.city;
});
console.log(b);
