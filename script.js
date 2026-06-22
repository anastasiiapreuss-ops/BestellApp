const dishes = [
  {
    "name": "Coq au Vin",
    "image": "./assets/img/coq-au-vin.jpg",
    "price": 31.99,
    "ingredients": ["Huhn", "Speck", "Champignons", "Kräuter"]
  },
  {
    "name": "Boeuf Bourguignon",
    "image": "./assets/img/boeuf-bourguignon.jpg",
    "price": 35.99,
    "ingredients": ["Rindfleisch", "Burgunderwein", "Schalotten", "Karotten"]
  },
  {
    "name": "Soupe à l’Oignon",
    "image": "./assets/img/soupe-à-l’oignon.jpg",
    "price": 22.99,
    "ingredients": ["Zwiebeln", "Rinderbrühe", "Baguette", "Käse"]
  },
  {
    "name": "Quiche Lorraine",
    "image": "./assets/img/quiche-lorraine.jpg",
    "price": 25.99,
    "ingredients": ["Mürbeteig", "Speck", "Eier", "Sahne", "Käse"]
  },
  {
    "name": "Ratatouille",
    "image": "./assets/img/ratatouille.jpg",
    "price": 21.99,
    "ingredients": ["Auberginen", "Zucchini", "Paprika", "Tomaten", "Knoblauch"]
  },
  {
    "name": "Crème Brûlée",
    "image": "./assets/img/crème_brûlée.jpg",
    "price": 10.99,
    "ingredients": ["Sahne", "Eigelb", "Vanille", "brauner Zucker"]
  }
];



let shoppingCart = {};
let subtotal = 0;
let total = 0;

function init() {
  renderDishes();
  renderCart();
}

function renderDishes() {
  const renderDishesRef = document.getElementById('menu');
  renderDishesRef.innerHTML = "";
  for (let i = 0; i < dishes.length; i++) {
    renderDishesRef.innerHTML += getTemplateDishes(i)
  }
}



function addDishes(i) {
  if (!([i] in shoppingCart)) {
    shoppingCart[i] = 1;
  } else {
    shoppingCart[i] += 1;
  }
  calculateSum()
  renderCart();
}

function renderCart() {
  subtotal = 0;
  total = 0;
  const renderCartRef = document.getElementById('shopping-cart-content')
  renderCartRef.innerHTML = "";
  let keys = Object.keys(shoppingCart);
  for (let j = 0; j < keys.length; j++) {
    let key = keys[j];
    renderCartRef.innerHTML += getCartTemplate(key);
  }
}

function calculateSum() {
  let keys = Object.keys(shoppingCart);
  for (let j = 0; j < keys.length; j++) {
    let key = keys[j];
    subtotal += shoppingCart[key] * dishes[key].price;
    total = 10.99 + subtotal;
  }
  document.getElementById('sub-total-price').innerHTML = subtotal.toFixed(2).replace(".", ",")+ " €";
  document.getElementById('total-price').innerHTML = total.toFixed(2).replace(".", ",") + " €";
  document.getElementById('total-price-button').innerHTML = "Jetzt bezahlen (" + total.toFixed(2).replace(".", ",") + "€)";
}

function changeAmount(key, value) {
  shoppingCart[key] += value;
  if (shoppingCart[key] <= 0) {
    delete shoppingCart[key];
  }
  calculateSum();
  renderCart();
}

function openDialoge() {
  const dialogRef = document.getElementById('dialog-input');
  dialogRef.innerHTML = getDialogTemplate();
  dialogRef.showModal();
}

function buyNow() {
  document.getElementById('shopping-cart')
    .classList.add('shopping_cart_style_hidden');

  openDialoge();
}

function closeAllDialoge() {
  const dialogRef = document.getElementById('dialog-input');
  const cart = document.getElementById('shopping-cart');
  cart.classList.remove('shopping_cart_style_hidden');
  shoppingCart = {};
  renderCart();
  calculateSum();
  dialogRef.close();
}