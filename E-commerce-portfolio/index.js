const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}






const productContainer = document.querySelector(".container");

const productsData = [
  {
    image: "product-images/p-1-1.jpg",
    heading: "Heading",
    content: "$ 230",
  },
  {
    image: "product-images/p-1-1.jpg",
    heading: "Heading",
    content: "$ 230",
  },
  {
    image: "product-images/p-1-1.jpg",
    heading: "Heading",
    content: "$ 230",
  },
  {
    image: "product-images/p-1-1.jpg",
    heading: "Heading",
    content: "$ 230",
  },
  {
    image: "product-images/p-1-1.jpg",
    heading: "Heading",
    content: "$ 230",
  },
  {
    image: "product-images/p-1-1.jpg",
    heading: "Heading",
    content: "$ 20",
  },
  {
    image: "product-images/p-1-1.jpg",
    heading: "Heading",
    content: "$ 250",
  },

];

for (let product of productsData) {
  const card = document.createElement("div");
  card.classList.add("card");

  const image = document.createElement("img");
  image.src = product.image;
  card.appendChild(image);

  const cardDetails = document.createElement("div");
  cardDetails.classList.add("card-details");
  //
  const heading = document.createElement("h2");
  heading.textContent = product.heading;
  cardDetails.appendChild(heading);

  for (let i = 0; i < 5; i++) {
    const iconStart = document.createElement("i");
    iconStart.id = "iconStar";
    iconStart.classList.add("fas", "fa-star");
    cardDetails.appendChild(iconStart);
  }

  const content = document.createElement("p");
  content.textContent = product.content;
  cardDetails.appendChild(content);

  const iconCart = document.createElement("i");
  iconCart.id = "iconCart";
  iconCart.classList.add("fas", "fa-cart-plus");
  cardDetails.appendChild(iconCart);

productContainer.appendChild(card);
card.appendChild(cardDetails);

}



