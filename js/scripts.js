function Drink(base, size, name, booze, fruit, syrup) {
  this.base = base;
  this.size = size;
  this.name = name;
  this.booze = booze;
  this.fruit = fruit;
  this.syrup = syrup;
}

Drink.prototype.price = function(quantity){
  var totalPrice = 0;
  if (this.size === "tall") {
    totalPrice = 3;
  } else {
    totalPrice = 1;
  }

    if(this.base === "tomato-juice" || this.base === "fruit-juice" ){
      totalPrice += 4;
      if(this.fruit === "olive" || this.fruit === "orange" ){
        totalPrice += 2;
      } else {
        totalPrice +=1;
      }
      if(this.syrup === "triple-sec" || this.syrup === "spicy") {
        totalPrice += 2;
      } else {
        totalPrice += 1;
      }
      if(this.booze === "tequila" || this.booze === "gin") {
        totalPrice += 2;
      } else {
        totalPrice += 1;
      }
    } else {
      totalPrice += 3
      if(this.fruit === "olive" || this.fruit === "orange" ){
          totalPrice += 2;
        } else {
          totalPrice +=1;
        }
        if(this.syrup === "triple-sec" || this.syrup === "spicy") {
          totalPrice += 2;
        } else {
          totalPrice += 1;
        }
        if(this.booze === "tequila" || this.booze === "gin") {
          totalPrice += 2;
        } else {
          totalPrice += 1;
        }
    }

      return totalPrice * quantity;
    }


var resetFields = function(){
  $("input#how-many").val("");
  $("input#drink-name").val("");
  };

$(document).ready(function(){

$("form#new-drink").submit(function(event){
  event.preventDefault();

  var baseType = $('input[name="base-type"]:checked').val();
  var drinkSize = $('input[name="drink-size"]:checked').val(); 
  var howManyDrinks = parseInt($("input#how-many").val());
  var drinkName = $("input#drink-name").val();
  var boozeType = $('input[name="booze-type"]:checked').val();   
  var fruitType = $('input[name="fruit-type"]:checked').val(); 
  var syrupType = $('input[name="syrup-type"]:checked').val(); 

  var newDrink = new Drink(baseType, drinkSize, drinkName, boozeType, fruitType, syrupType);

  $(".cost-span").text(newDrink.price(howManyDrinks));
  $(".base-info").text(baseType);
  $(".size-info").text(drinkSize);
  $(".name-info").text(drinkName);
  $(".booze-info").text(boozeType);
  $(".syrup-info").text(syrupType);
  $(".fruit-info").text(fruitType);
  $(".quantity-info").text(howManyDrinks);

  resetFields();

  });//end of submit event
});//end of file