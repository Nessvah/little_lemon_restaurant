const menus = [
  {
    getImageSrc: () => require("../images/greeksalad.jpg"),
    name: "Greek Salad",
    price: "$12.99",
    description:
      "The famous Greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese " +
      "garnished with crunchy garlic and rosemary croutons.",
    delivery: "Order delivery",
  },
  {
    getImageSrc: () => require("../images/bruchetta.png"),
    name: "Bruchetta",
    price: "$5.99",
    description:
      "Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned " +
      " with salt and olive oil.",
    delivery: "Order delivery",
  },
  {
    getImageSrc: () => require("../images/lemondessert.jpg"),
    name: "Lemon Dessert",
    price: "$9.66",
    description:
      "This comes straight from grandma’s recipe book, every last ingredient with garlic and " +
      "seasoned with salt and olive oil.",
    delivery: "Order delivery",
  },
];

export default menus;
