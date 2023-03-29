/*
You are given an array of objects representing restaurants, each with a name and an array of menu items. 
Write a function that takes in the array of restaurants and a string representing a dietary restriction 
(e.g., "vegetarian", "gluten-free", etc.) 
and returns an array of restaurants where every menu item is compatible with the given dietary restriction.
Each menu item is represented as an object with a name and an array of ingredients. 
A menu item is compatible with a dietary restriction if all its ingredients are compatible with the dietary restriction.
An ingredient is compatible with a dietary restriction if it is one of the following:
    For "vegetarian" dietary restriction: "vegetable" or "grain"
    For "gluten-free" dietary restriction: "vegetable" or "meat"
    For "dairy-free" dietary restriction: "vegetable" or "meat"
A restaurant is compatible with a dietary restriction if all its menu items are compatible with the dietary restriction.
Your function should return an array of restaurant names that are compatible with the given dietary restriction.
*/

const restaurants = [
    {
      name: "Restaurant A",
      menuItems: [
        {
          name: "Item 1",
          ingredients: ["vegetable", "grain"]
        },
        {
          name: "Item 2",
          ingredients: ["meat", "vegetable"]
        }
      ]
    },
    {
      name: "Restaurant B",
      menuItems: [
        {
          name: "Item 3",
          ingredients: ["meat", "grain"]
        },
        {
          name: "Item 4",
          ingredients: ["vegetable", "dairy"]
        }
      ]
    },
    {
      name: "Restaurant C",
      menuItems: [
        {
          name: "Item 5",
          ingredients: ["vegetable", "meat"]
        },
        {
          name: "Item 6",
          ingredients: ["meat", "grain"]
        }
      ]
    }
  ];
const dietaryRestriction = "gluten-free";
const result = findCompatibleRestaurants(restaurants, dietaryRestriction);
console.log(result); // ["Restaurant A"]

function findCompatibleRestaurants(restaurants, dietaryRestriction){
    let diet=[];    
    let restaurantName=[];
    if(dietaryRestriction=='vegetarian'){
        diet.push("vegetable" , "grain");
    }else if(dietaryRestriction=='gluten-free'){
        diet.push(  "vegetable" , "meat")
        
    }else if(dietaryRestriction=='dairy-free'){
        diet.push(  "vegetable" , "dairy")
        
    }
        for(let i=0;i<restaurants.length;i++){
                for(let y=0;y<restaurants[i].menuItems.length;y++){
                         if(restaurants[i].menuItems[y].ingredients.includes(diet[0])&&restaurants[i].menuItems[y].ingredients.includes(diet[1])){
                                 restaurantName.push(restaurants[i].name);
                            }
                }
            
        }
        return restaurantName;
}