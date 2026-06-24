function getTemplateDishes(i) {
    return ` 
      <section class="dishes_style">
                <img class="dishes_img_style" src= "${dishes[i].image}" alt="${dishes[i].name}">
                <section class = "dishes_text_style">
                    <div class = "name_dishes_style">
                        <h3>${dishes[i].name}</h3>
                        <p>${dishes[i].ingredients}</p>
                    </div>
                    <div class = "top_text_content">
                        <p>${dishes[i].price.toFixed(2).replace(".", ",")} €</p>
                        <button id ="active-button${i}" onclick = "addDishes(${i})" class = "add_button_style">Hinzufügen</button>
                    </div>
                </section>
        </section>`;
}

function getCartTemplate(key) {
    return `
   <section class="cart_style">
        <p>${shoppingCart[key]} x ${dishes[key].name}</p>
        <section class="cart_style_content"> 
            <section class="cart_style_button">
                <button onclick="changeAmount(${key}, -1)">-</button>
                    ${shoppingCart[key]}
                <button onclick="changeAmount(${key}, +1)">+</button>
            </section> 
            <p>${(shoppingCart[key] * dishes[key].price).toFixed(2).replace(".", ",")}€</p>
        </section>
    </section>
    `
}

function getDialogTemplate() {
    return `
    <section class="dialog_style">
        <button class="x_button" onclick="closeAllDialoge()">x</button>
        <img src="./assets/icons/food-truck-icon.png" alt="Food Truck icon">
        <h3>Bestellung bestätigt!</h3>
        <p>Ihr Essen ist auf dem Weg</p>
    </section>
    `
}

function getEmptyCartTemplate(){
     return `
        <section class="empty_cart_style">
            <h3>Ihr Warenkorb ist leer</h3>
            <p>Fügen Sie leckere Gerichte hinzu und starten Sie die Bestellung.</p>
            <img src="./assets/icons/basket.svg" alt="warenkorb icon">
        </section>
    `;
}