const dishes = [
    {
        "name": "Coq au Vin",
        "image": "./assets/img/coq-au-vin.jpg",
        "price": 31.99,
        "ingredients": ["Huhn", " Speck", " Champignons", " Kräuter"]
    },
    {
        "name": "Boeuf Bourguignon",
        "image": "./assets/img/boeuf-bourguignon.jpg",
        "price": 35.99,
        "ingredients": ["Rindfleisch", " Burgunderwein", " Schalotten", " Karotten"]
    },
    {
        "name": "Soupe à l’Oignon",
        "image": "./assets/img/soupe-à-l’oignon.jpg",
        "price": 22.99,
        "ingredients": ["Zwiebeln", " Rinderbrühe", " Baguette", " Käse"]
    },
    {
        "name": "Quiche Lorraine",
        "image": "./assets/img/quiche-lorraine.jpg",
        "price": 25.99,
        "ingredients": ["Mürbeteig", " Speck", " Eier", " Sahne", " Käse"]
    },
    {
        "name": "Ratatouille",
        "image": "./assets/img/ratatouille.jpg",
        "price": 21.99,
        "ingredients": ["Auberginen", " Zucchini", " Paprika", " Tomaten", " Knoblauch"]
    },
    {
        "name": "Crème Brûlée",
        "image": "./assets/img/crème_brûlée.jpg",
        "price": 10.99,
        "ingredients": ["Sahne", " Eigelb", " Vanille", " brauner Zucker"]
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
    let addButtonRef;
    if (!([i] in shoppingCart)) {
        shoppingCart[i] = 1;
        addButtonRef = document.getElementById(`active-button${i}`).innerHTML = `Hinzugefügt`;
        addButtonRef = document.getElementById(`active-button${i}`).classList.add("added_button_style");
    } else {
        shoppingCart[i] += 1;
        addButtonRef = document.getElementById(`active-button${i}`).innerHTML = `Hinzugefügt`;
        addButtonRef = document.getElementById(`active-button${i}`).classList.add("added_button_style");
    }
    calculateSum()
    renderCart();
}

function renderCart() {
  subtotal = 0;
  total = 0;
  const renderCartRef = document.getElementById("shopping-cart-content");
  renderCartRef.innerHTML = "";
  let keys = Object.keys(shoppingCart);
  if (showEmptyCart(keys, renderCartRef)) return;
  for (let j = 0; j < keys.length; j++) {
    renderCartRef.innerHTML += getCartTemplate(keys[j]);
  }
}

function showEmptyCart(keys, renderCartRef) {
  const sumRef = document.querySelector(".sum_style");
  const buttonRef = document.getElementById("total-price-button");
  if (keys.length === 0) {
    renderCartRef.innerHTML = getEmptyCartTemplate();
    sumRef.style.display = "none";
    buttonRef.style.display = "none";
    return true;
  }
  sumRef.style.display = "flex";
  buttonRef.style.display = "block";
  return false;
}

function calculateSum() {
    let amount = 0;
    let keys = Object.keys(shoppingCart);
    for (let j = 0; j < keys.length; j++) {
        let key = keys[j];
        subtotal += shoppingCart[key] * dishes[key].price;
        total = 10.99 + subtotal;
        amount += shoppingCart[key];
    }
    document.getElementById('sub-total-price').innerHTML = subtotal.toFixed(2).replace(".", ",") + " €";
    document.getElementById('total-price').innerHTML = total.toFixed(2).replace(".", ",") + " €";
    document.getElementById('total-price-button').innerHTML = "Jetzt bezahlen (" + total.toFixed(2).replace(".", ",") + "€)";
    document.getElementById('cart-amount').innerHTML = amount;
    updateCartButton(amount);
}

function changeAmount(key, value) {
    let addButtonRef = document.getElementById(`active-button${key}`)
    shoppingCart[key] += value;
    if (shoppingCart[key] <= 0) {
        delete shoppingCart[key];
        addButtonRef.innerHTML = "Hinzufügen";
        addButtonRef.classList.remove("added_button_style");
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
    const buyNowRef = document.getElementById('shopping-cart');
    buyNowRef.classList.add("shopping_cart_style_hidden");
    buyNowRef.classList.remove("shopping_cart_mobile");
    openDialoge();
}

function closeAllDialoge() {
    const dialogRef = document.getElementById('dialog-input');
    const cart = document.getElementById('shopping-cart');
    shoppingCart = {};
    renderCart();
    calculateSum();
    resetAddButtons();
    cart.classList.remove("shopping_cart_style_hidden");
    dialogRef.close();
}

function resetAddButtons() {
    for (let i = 0; i < dishes.length; i++) {
        let resetButtonRef = document.getElementById(`active-button${i}`);
        resetButtonRef.innerHTML = "Hinzufügen";
        resetButtonRef.classList.remove("added_button_style");
    }
}

function mobileShoppingCart() {
    const cartRef = document.getElementById('shopping-cart');
    cartRef.classList.toggle('shopping_cart_mobile');
}

function updateCartButton(amount) {
    const cartButtonRef = document.getElementById('cart-button');
    const cartAmountRef = document.getElementById('cart-amount')
    if (amount > 0) {
        cartButtonRef.classList.add("cart_button_active");
        cartAmountRef.classList.add("cart_amount_active");
    } else {
        cartButtonRef.classList.remove("cart_button_active");
        cartAmountRef.classList.remove("cart_amount_active");
    }

}