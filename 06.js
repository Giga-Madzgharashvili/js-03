let item = [12, "google", 32, null, "yahoo", 25];

let newItem = item.map(function (z) {
  if (typeof z == "number") {
    return Math.pow(z, 2);
  } else if (typeof z == "string") {
    return z.toUpperCase();
  } else {
    return z;
  }
});

console.log(newItem);
