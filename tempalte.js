function getTemplateDishes (i){
    return ` 
      <section class="dishes_style">
                <img class="dishes_img_style" src= "${dishes[i].image}" alt="${dishes[i].name}">
                    <section class = "dishes_text_style">
                        <div class = "top_text_content">
                            <h3>${dishes[i].name}</h3>
                            <p>${dishes[i].price} €</p>
                        </div>
                        <p>${dishes[i].ingredients}</p>
                        <button onclick = "addDishes()" class = "add_button_style">Hinzufügen</button>
                    </section>
        </section>`;
}
   