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

let shoppingCard = {};

function renderDishes(){
    const renderDishesRef = document.getElementById('menu');
    renderDishesRef.innerHTML = "";
    for (let i = 0; i < dishes.length; i ++){
        renderDishesRef.innerHTML += getTemplateDishes(i)
    }
}

renderDishes();

// function addDishes(gericht){
//     if(!( in shoppingCard)){
//         shoppingCard[] = 1;
//     }else{
//         shoppingCard[] += 1;
//     }
//     console.log( + shoppingCard[]);
    
// }