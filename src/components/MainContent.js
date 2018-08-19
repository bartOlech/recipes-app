import React, {Component} from 'react';
import '../index.css';
import Ingradients from './Ingradients';
import Cake from './meals/Cake';
import Burger from './meals/Burger';
import Burrito from './meals/Burrito';
import Fish from './meals/Fish';
import IceCream from './meals/IceCream';
import MeatSalad from './meals/MeatSalad';
import MilkShake from './meals/MilkShake';
import Salad from './meals/Salad';
import Salmon from './meals/Salmon';
import Steak from './meals/Steak';
import AppleJuice from './meals/AppleJuice';


class MainContent extends Component{
    constructor(props){
        super(props);
        this.state={
            foodIngs:[],
            appleCake:false,
            appleJuice:false,
            burger:false,
            burrito:false,
            fish:false,
            iceCream:false,
            meatSalad:false,
            milkShake:false,
            salad:false,
            salmon:false,
            steak:false,
            visibilityAppleJuice:false,
            visibilityCake:false,
            visibilityBurger:false,
            visibilityBurrito:false,
            visibilityFish:false,
            visibilityIceCream:false,
            visibilityMeatSalad:false,
            visibilityMilkShake:false,
            visibilitySalad:false,
            visibilitySalmon:false,
            visibilitySteak:false,
            //produkty w tablicy poniżej muszą być alfabetycznie!!!
            appleCakeArray:['apple'],
            appleJuiceArray:['apple'],
            burgerArray:['cucumber', 'meat', 'tomato'],
            burritoArray:['meat', 'toamto'],
            fishArray:['fish'],
            grillMeatArray:['meat'],
            iceCreamArray:['milk'],
            meatSaladArray:['cucumber', 'meat', 'tomato'],
            saladArray:['cucumber', 'tomato'],
            salmonArray:['apple', 'fish'],
            shakeArray:['milk'],

        }
    }   

    apple=(e)=>{
        const{foodIngs, appleCakeArray, appleJuiceArray, burgerArray, burritoArray, fishArray, grillMeatArray, iceCreamArray, meatSaladArray, saladArray, salmonArray, shakeArray,}=this.state;
        const ingradien='apple';
        if(foodIngs.indexOf(ingradien)!==-1){
          let index = foodIngs.indexOf(ingradien);
          if (index > -1) {
            foodIngs.splice(index, 1);
          }
        }else{
            if(foodIngs.indexOf(ingradien)===-1){foodIngs.push(ingradien)}
            this.setState({
                foodIngs,
            })
        }

        this.setState({
            appleCake:false,
            appleJuice:false,
            burger:false,
            burrito:false,
            fish:false,
            iceCream:false,
            meatSalad:false,
            milkShake:false,
            salad:false,
            salmon:false,
            steak:false,
        })
        foodIngs.sort();

      


    if( foodIngs.length === appleCakeArray.length && foodIngs.every((value, index) => value ===         appleCakeArray[index] )){
       this.setState({
        appleCake:true,
       })  
       
    }

    if( foodIngs.length === appleJuiceArray.length && foodIngs.every((value, index) => value ===         appleJuiceArray[index] )){
        this.setState({
            appleJuice:true
        })  
     }

     if( foodIngs.length === burgerArray.length && foodIngs.every((value, index) => value ===         burgerArray[index] )){
        this.setState({
            burger:true
        })  
     }

     if( foodIngs.length === burritoArray.length && foodIngs.every((value, index) => value ===         burritoArray[index] )){
        this.setState({
            burrito:true
        })  
     }

     if( foodIngs.length === fishArray.length && foodIngs.every((value, index) => value ===fishArray[index] )){
        this.setState({
            fish:true
        })  
     }

     if( foodIngs.length === grillMeatArray.length && foodIngs.every((value, index) => value ===         grillMeatArray[index] )){
        this.setState({
            steak:true
        })  
     }

     if( foodIngs.length === iceCreamArray.length && foodIngs.every((value, index) => value ===         iceCreamArray[index] )){
        this.setState({
            iceCream:true
        })  
     }

     if( foodIngs.length === meatSaladArray.length && foodIngs.every((value, index) => value ===         meatSaladArray[index] )){
        this.setState({
            meatSalad:true
        })  
     }

     if( foodIngs.length === saladArray.length && foodIngs.every((value, index) => value ===         saladArray[index] )){
        this.setState({
            salad:true
        })  
     }

     if( foodIngs.length === salmonArray.length && foodIngs.every((value, index) => value ===         salmonArray[index] )){
        this.setState({
            salmon:true
        })  
     }

     if( foodIngs.length === shakeArray.length && foodIngs.every((value, index) => value ===         shakeArray[index] )){
        this.setState({
            milkShake:true
        })  
     }

        if(foodIngs.length>=4){this.setState({
            appleCake:false,
            appleJuice:false,
            burger:false,
            burrito:false,
            fish:false,
            iceCream:false,
            meatSalad:false,
            milkShake:false,
            salad:false,
            salmon:false,
            steak:false,
        })}
    }

    cucumber=(e)=>{
        const{foodIngs, appleCakeArray, appleJuiceArray, burgerArray, burritoArray, fishArray, grillMeatArray, iceCreamArray, meatSaladArray, saladArray, salmonArray, shakeArray}=this.state;
        const ingradien='cucumber';
        if(foodIngs.indexOf(ingradien)!==-1){
          let index = foodIngs.indexOf(ingradien);
          if (index > -1) {
            foodIngs.splice(index, 1);
          }
        }else{
            if(foodIngs.indexOf(ingradien)===-1){foodIngs.push(ingradien)}
            this.setState({
                foodIngs,
            })
        }

        this.setState({
            appleCake:false,
            appleJuice:false,
            burger:false,
            burrito:false,
            fish:false,
            iceCream:false,
            meatSalad:false,
            milkShake:false,
            salad:false,
            salmon:false,
            steak:false,
        })
        foodIngs.sort();

    if( foodIngs.length === appleCakeArray.length && foodIngs.every((value, index) => value ===         appleCakeArray[index] )){
       this.setState({
        appleCake:true
       })  
    }

    if( foodIngs.length === appleJuiceArray.length && foodIngs.every((value, index) => value ===         appleJuiceArray[index] )){
        this.setState({
            appleJuice:true
        })  
     }

     if( foodIngs.length === burgerArray.length && foodIngs.every((value, index) => value ===         burgerArray[index] )){
        this.setState({
            burger:true
        })  
     }

     if( foodIngs.length === burritoArray.length && foodIngs.every((value, index) => value ===         burritoArray[index] )){
        this.setState({
            burrito:true
        })  
     }

     if( foodIngs.length === fishArray.length && foodIngs.every((value, index) => value ===fishArray[index] )){
        this.setState({
            fish:true
        })  
     }

     if( foodIngs.length === grillMeatArray.length && foodIngs.every((value, index) => value ===         grillMeatArray[index] )){
        this.setState({
            steak:true
        })  
     }

     if( foodIngs.length === iceCreamArray.length && foodIngs.every((value, index) => value ===         iceCreamArray[index] )){
        this.setState({
            iceCream:true
        })  
     }

     if( foodIngs.length === meatSaladArray.length && foodIngs.every((value, index) => value ===         meatSaladArray[index] )){
        this.setState({
            meatSalad:true
        })  
     }

     if( foodIngs.length === saladArray.length && foodIngs.every((value, index) => value ===         saladArray[index] )){
        this.setState({
            salad:true
        })  
     }

     if( foodIngs.length === salmonArray.length && foodIngs.every((value, index) => value ===         salmonArray[index] )){
        this.setState({
            salmon:true
        })  
     }

     if( foodIngs.length === shakeArray.length && foodIngs.every((value, index) => value ===         shakeArray[index] )){
        this.setState({
            milkShake:true
        })  
     }
    }
    tomato=(e)=>{
        const{foodIngs, appleCakeArray, appleJuiceArray, burgerArray, burritoArray, fishArray, grillMeatArray, iceCreamArray, meatSaladArray, saladArray, salmonArray, shakeArray}=this.state;
        const ingradien='tomato';
        if(foodIngs.indexOf(ingradien)!==-1){
          let index = foodIngs.indexOf(ingradien);
          if (index > -1) {
            foodIngs.splice(index, 1);
          }
        }else{
            if(foodIngs.indexOf(ingradien)===-1){foodIngs.push(ingradien)}
            this.setState({
                foodIngs,
            })
        }

        this.setState({
            appleCake:false,
            appleJuice:false,
            burger:false,
            burrito:false,
            fish:false,
            iceCream:false,
            meatSalad:false,
            milkShake:false,
            salad:false,
            salmon:false,
            steak:false,
        })
        foodIngs.sort();

    if( foodIngs.length === appleCakeArray.length && foodIngs.every((value, index) => value ===         appleCakeArray[index] )){
       this.setState({
        appleCake:true
       })  
    }

    if( foodIngs.length === appleJuiceArray.length && foodIngs.every((value, index) => value ===         appleJuiceArray[index] )){
        this.setState({
            appleJuice:true
        })  
     }

     if( foodIngs.length === burgerArray.length && foodIngs.every((value, index) => value ===         burgerArray[index] )){
        this.setState({
            burger:true
        })  
     }

     if( foodIngs.length === burritoArray.length && foodIngs.every((value, index) => value ===         burritoArray[index] )){
        this.setState({
            burrito:true
        })  
     }

     if( foodIngs.length === fishArray.length && foodIngs.every((value, index) => value ===fishArray[index] )){
        this.setState({
            fish:true
        })  
     }

     if( foodIngs.length === grillMeatArray.length && foodIngs.every((value, index) => value ===         grillMeatArray[index] )){
        this.setState({
            steak:true
        })  
     }

     if( foodIngs.length === iceCreamArray.length && foodIngs.every((value, index) => value ===         iceCreamArray[index] )){
        this.setState({
            iceCream:true
        })  
     }

     if( foodIngs.length === meatSaladArray.length && foodIngs.every((value, index) => value ===         meatSaladArray[index] )){
        this.setState({
            meatSalad:true
        })  
     }

     if( foodIngs.length === saladArray.length && foodIngs.every((value, index) => value ===         saladArray[index] )){
        this.setState({
            salad:true
        })  
     }

     if( foodIngs.length === salmonArray.length && foodIngs.every((value, index) => value ===         salmonArray[index] )){
        this.setState({
            salmon:true
        })  
     }

     if( foodIngs.length === shakeArray.length && foodIngs.every((value, index) => value ===         shakeArray[index] )){
        this.setState({
            milkShake:true
        })  
     }
    }
    milk=(e)=>{
        const{foodIngs, appleCakeArray, appleJuiceArray, burgerArray, burritoArray, fishArray, grillMeatArray, iceCreamArray, meatSaladArray, saladArray, salmonArray, shakeArray}=this.state;
        const ingradien='milk';
        if(foodIngs.indexOf(ingradien)!==-1){
          let index = foodIngs.indexOf(ingradien);
          if (index > -1) {
            foodIngs.splice(index, 1);
          }
        }else{
            if(foodIngs.indexOf(ingradien)===-1){foodIngs.push(ingradien)}
            this.setState({
                foodIngs,
            })
        }
        this.setState({
            appleCake:false,
            appleJuice:false,
            burger:false,
            burrito:false,
            fish:false,
            iceCream:false,
            meatSalad:false,
            milkShake:false,
            salad:false,
            salmon:false,
            steak:false,
        })
        foodIngs.sort();

    if( foodIngs.length === appleCakeArray.length && foodIngs.every((value, index) => value ===         appleCakeArray[index] )){
       this.setState({
        appleCake:true
       })  
    }

    if( foodIngs.length === appleJuiceArray.length && foodIngs.every((value, index) => value ===         appleJuiceArray[index] )){
        this.setState({
            appleJuice:true
        })  
     }

     if( foodIngs.length === burgerArray.length && foodIngs.every((value, index) => value ===         burgerArray[index] )){
        this.setState({
            burger:true
        })  
     }

     if( foodIngs.length === burritoArray.length && foodIngs.every((value, index) => value ===         burritoArray[index] )){
        this.setState({
            burrito:true
        })  
     }

     if( foodIngs.length === fishArray.length && foodIngs.every((value, index) => value ===fishArray[index] )){
        this.setState({
            fish:true
        })  
     }

     if( foodIngs.length === grillMeatArray.length && foodIngs.every((value, index) => value ===         grillMeatArray[index] )){
        this.setState({
            steak:true
        })  
     }

     if( foodIngs.length === iceCreamArray.length && foodIngs.every((value, index) => value ===         iceCreamArray[index] )){
        this.setState({
            iceCream:true
        })  
     }

     if( foodIngs.length === meatSaladArray.length && foodIngs.every((value, index) => value ===         meatSaladArray[index] )){
        this.setState({
            meatSalad:true
        })  
     }

     if( foodIngs.length === saladArray.length && foodIngs.every((value, index) => value ===         saladArray[index] )){
        this.setState({
            salad:true
        })  
     }

     if( foodIngs.length === salmonArray.length && foodIngs.every((value, index) => value ===         salmonArray[index] )){
        this.setState({
            salmon:true
        })  
     }

     if( foodIngs.length === shakeArray.length && foodIngs.every((value, index) => value ===         shakeArray[index] )){
        this.setState({
            milkShake:true
        })  
     }
    }
    meat=(e)=>{
        const{foodIngs, appleCakeArray, appleJuiceArray, burgerArray, burritoArray, fishArray, grillMeatArray, iceCreamArray, meatSaladArray, saladArray, salmonArray, shakeArray}=this.state;
        const ingradien='meat';
        if(foodIngs.indexOf(ingradien)!==-1){
          let index = foodIngs.indexOf(ingradien);
          if (index > -1) {
            foodIngs.splice(index, 1);
          }
        }else{
            if(foodIngs.indexOf(ingradien)===-1){foodIngs.push(ingradien)}
            this.setState({
                foodIngs,
            })
        }
        this.setState({
            appleCake:false,
            appleJuice:false,
            burger:false,
            burrito:false,
            fish:false,
            iceCream:false,
            meatSalad:false,
            milkShake:false,
            salad:false,
            salmon:false,
            steak:false,
        })
        foodIngs.sort();

    if( foodIngs.length === appleCakeArray.length && foodIngs.every((value, index) => value ===         appleCakeArray[index] )){
       this.setState({
        appleCake:true
       })  
    }

    if( foodIngs.length === appleJuiceArray.length && foodIngs.every((value, index) => value ===         appleJuiceArray[index] )){
        this.setState({
            appleJuice:true
        })  
     }

     if( foodIngs.length === burgerArray.length && foodIngs.every((value, index) => value ===         burgerArray[index] )){
        this.setState({
            burger:true
        })  
     }

     if( foodIngs.length === burritoArray.length && foodIngs.every((value, index) => value ===         burritoArray[index] )){
        this.setState({
            burrito:true
        })  
     }

     if( foodIngs.length === fishArray.length && foodIngs.every((value, index) => value ===fishArray[index] )){
        this.setState({
            fish:true
        })  
     }

     if( foodIngs.length === grillMeatArray.length && foodIngs.every((value, index) => value ===         grillMeatArray[index] )){
        this.setState({
            steak:true
        })  
     }

     if( foodIngs.length === iceCreamArray.length && foodIngs.every((value, index) => value ===         iceCreamArray[index] )){
        this.setState({
            iceCream:true
        })  
     }

     if( foodIngs.length === meatSaladArray.length && foodIngs.every((value, index) => value ===         meatSaladArray[index] )){
        this.setState({
            meatSalad:true
        })  
     }

     if( foodIngs.length === saladArray.length && foodIngs.every((value, index) => value ===         saladArray[index] )){
        this.setState({
            salad:true
        })  
     }

     if( foodIngs.length === salmonArray.length && foodIngs.every((value, index) => value ===         salmonArray[index] )){
        this.setState({
            salmon:true
        })  
     }

     if( foodIngs.length === shakeArray.length && foodIngs.every((value, index) => value ===         shakeArray[index] )){
        this.setState({
            milkShake:true
        })  
     }
    }
    fish=(e)=>{
        const{foodIngs, appleCakeArray, appleJuiceArray, burgerArray, burritoArray, fishArray, grillMeatArray, iceCreamArray, meatSaladArray, saladArray, salmonArray, shakeArray}=this.state;
        const ingradien='fish';
        if(foodIngs.indexOf(ingradien)!==-1){
          let index = foodIngs.indexOf(ingradien);
          if (index > -1) {
            foodIngs.splice(index, 1);
          }
        }else{
            if(foodIngs.indexOf(ingradien)===-1){foodIngs.push(ingradien)}
            this.setState({
                foodIngs,
            })
        }
        this.setState({
            appleCake:false,
            appleJuice:false,
            burger:false,
            burrito:false,
            fish:false,
            iceCream:false,
            meatSalad:false,
            milkShake:false,
            salad:false,
            salmon:false,
            steak:false,
        })
        foodIngs.sort();

    if( foodIngs.length === appleCakeArray.length && foodIngs.every((value, index) => value ===         appleCakeArray[index] )){
       this.setState({
        appleCake:true
       })  
    }

    if( foodIngs.length === appleJuiceArray.length && foodIngs.every((value, index) => value ===         appleJuiceArray[index] )){
        this.setState({
            appleJuice:true
        })  
     }

     if( foodIngs.length === burgerArray.length && foodIngs.every((value, index) => value ===         burgerArray[index] )){
        this.setState({
            burger:true
        })  
     }

     if( foodIngs.length === burritoArray.length && foodIngs.every((value, index) => value ===         burritoArray[index] )){
        this.setState({
            burrito:true
        })  
     }

     if( foodIngs.length === fishArray.length && foodIngs.every((value, index) => value ===fishArray[index] )){
        this.setState({
            fish:true
        })  
     }

     if( foodIngs.length === grillMeatArray.length && foodIngs.every((value, index) => value ===         grillMeatArray[index] )){
        this.setState({
            steak:true
        })  
     }

     if( foodIngs.length === iceCreamArray.length && foodIngs.every((value, index) => value ===         iceCreamArray[index] )){
        this.setState({
            iceCream:true
        })  
     }

     if( foodIngs.length === meatSaladArray.length && foodIngs.every((value, index) => value ===         meatSaladArray[index] )){
        this.setState({
            meatSalad:true
        })  
     }

     if( foodIngs.length === saladArray.length && foodIngs.every((value, index) => value ===         saladArray[index] )){
        this.setState({
            salad:true
        })  
     }

     if( foodIngs.length === salmonArray.length && foodIngs.every((value, index) => value ===         salmonArray[index] )){
        this.setState({
            salmon:true
        })  
     }

     if( foodIngs.length === shakeArray.length && foodIngs.every((value, index) => value ===         shakeArray[index] )){
        this.setState({
            milkShake:true
        })  
     }
    }
    appleJuiceRecipe=(e)=>{
        this.setState({
            visibilityAppleJuice:!this.state.visibilityAppleJuice
        })
        
    }
    closeAppleJuiceRecipe=(e)=>{
        this.setState({
            visibilityAppleJuice:!this.state.visibilityAppleJuice
        })
    }
    cakeRecipe=(e)=>{
        this.setState({
            visibilityCake:!this.state.visibilityCake
        })
        
    }
    closeCakeRecipe=(e)=>{
        this.setState({
            visibilityCake:!this.state.visibilityCake
        })
    }
    burgerRecipe=(e)=>{
        this.setState({
            visibilityBurger:!this.state.visibilityBurger
        })  
    }
    closeBurgerRecipe=(e)=>{
        this.setState({
            visibilityBurger:!this.state.visibilityBurger
        })
    }
    burritoRecipe=(e)=>{
        this.setState({
            visibilityBurrito:!this.state.visibilityBurrito
        })  
    }
    closeBurritoRecipe=(e)=>{
        this.setState({
            visibilityBurrito:!this.state.visibilityBurrito
        })
    }
    fishRecipe=(e)=>{
        this.setState({
            visibilityFish:!this.state.visibilityFish
        })  
    }
    closeFishRecipe=(e)=>{
        this.setState({
            visibilityFish:!this.state.visibilityFish
        })
    }
    iceCreamRecipe=(e)=>{
        this.setState({
            visibilityIceCream:!this.state.visibilityIceCream
        })  
    }
    closeIceCreamRecipe=(e)=>{
        this.setState({
            visibilityIceCream:!this.state.visibilityIceCream
        })
    }
    meatSaladRecipe=(e)=>{
        this.setState({
            visibilityMeatSalad:!this.state.visibilityMeatSalad
        }) 
    }
    closeMeatSaladRecipe=(e)=>{
        this.setState({
            visibilityMeatSalad:!this.state.visibilityMeatSalad
        })
    }
    milkShakeRecipe=(e)=>{
        this.setState({
            visibilityMilkShake:!this.state.visibilityMilkShake
        }) 
    }
    closeMilkShakeRecipe=(e)=>{
        this.setState({
            visibilityMilkShake:!this.state.visibilityMilkShake
        })
    }
    saladRecipe=(e)=>{
        this.setState({
            visibilitySalad:!this.state.visibilitySalad
        }) 
    }
    closeSaladRecipe=(e)=>{
        this.setState({
            visibilitySalad:!this.state.visibilitySalad
        })
    }
    salmonRecipe=(e)=>{
        this.setState({
            visibilitySalmon:!this.state.visibilitySalmon
        })   
    }
    closeSalmonRecipe=(e)=>{
        this.setState({
            visibilitySalmon:!this.state.visibilitySalmon
        })
    }
    steakRecipe=(e)=>{
        this.setState({
            visibilitySteak:!this.state.visibilitySteak
        })  
    }
    closeSteakRecipe=(e)=>{
        this.setState({
            visibilitySteak:!this.state.visibilitySteak
        })
    }

    render(){
        const{appleCake, appleJuice, burger, burrito, fish, iceCream, meatSalad, milkShake, salad, salmon, steak}=this.state;
        
        return(
            <div>
                
                <Ingradients
                    apple={this.apple}
                    cucumber={this.cucumber}
                    tomato={this.tomato}
                    milk={this.milk}
                    meat={this.meat}
                    fish={this.fish}
                />



               <div className={appleCake || appleJuice || burger || burrito || fish || iceCream || meatSalad || milkShake || salad || salmon || steak || this.state.foodIngs.length===0?'no-recipe-hide':'no-recipe'}><div className='sad-face'></div><h3 className='sad-face-text'>Brak przepisu dla danych składników</h3></div>





                {appleCake?<Cake scrollStepInPx="50" delayInMs="16.66" cakeRecipe={this.cakeRecipe}/>:null}
                {appleJuice?<AppleJuice scrollStepInPx="50" delayInMs="16.66" appleJuiceRecipe={this.appleJuiceRecipe}/>:null}
                {burger?<Burger scrollStepInPx="50" delayInMs="16.66" burgerRecipe={this.burgerRecipe}/>:null}
                {burrito?<Burrito scrollStepInPx="50" delayInMs="16.66" burritoRecipe={this.burritoRecipe}/>:null}
                {fish?<Fish scrollStepInPx="50" delayInMs="16.66" fishRecipe={this.fishRecipe}/>:null}
                {iceCream?<IceCream scrollStepInPx="50" delayInMs="16.66" iceCreamRecipe={this.iceCreamRecipe}/>:null}
                {meatSalad?<MeatSalad scrollStepInPx="50" delayInMs="16.66" meatSaladRecipe={this.meatSaladRecipe}/>:null}
                {milkShake?<MilkShake scrollStepInPx="50" delayInMs="16.66" milkShakeRecipe={this.milkShakeRecipe}/>:null}
                {salad?<Salad scrollStepInPx="50" delayInMs="16.66" saladRecipe={this.saladRecipe}/>:null}
                {salmon?<Salmon scrollStepInPx="50" delayInMs="16.66" salmonRecipe={this.salmonRecipe}/>:null}
                {steak?<Steak scrollStepInPx="50" delayInMs="16.66" steakRecipe={this.steakRecipe}/>:null}
                <div className='recipesList'>
                <div className={this.state.visibilityCake?'textRecipe show':'textRecipe hide'}>
                    <div className='leftTextRecipe'>
                    <div onClick={this.closeCakeRecipe} className='closeButton'></div>
                        <h2>Składniki:</h2>
                        <p>300 g mąki pszennej</p>
                        <p>200 g masła (zimnego) lub masła roślinnego, margaryny</p>
                        <p>50 g masła</p>
                        <p>2 łyżeczki proszku do pieczenia</p>
                        <p>70 g cukru</p>
                        <p>1 op. cukru wanilinowego</p>
                        <p>1 jajko</p>
                        <p>1,5 kg jabłek</p>
                    </div>
                    <div className='rightTextRecipe'>
                        <h2>Przygotowanie:</h2>
                        <ul>
                            <li>Niedużą foremkę o wymiarach ok. 21 x 25 cm lub tortownicę o średnicy 24 cm posmarować masłem i wyłożyć papierem do pieczenia.</li>
                            <li>Zagnieść ciasto kruche: do mąki dodać pokrojone w kosteczkę masło oraz smalec, proszek do pieczenia, cukier i cukier wanilinowy. Siekać składniki lub rozdrabniać dłońmi lub mieszadłem miksera na drobną kruszonkę.</li>
                            <li>Dodać jajko i połączyć składniki w jednolite ciasto. Rozpłaszczyć je nieco, zawinąć w folię i włożyć do lodówki.</li>
                            <li>Jabłka obrać, pokroić na ćwiartki i wyciąć gniazda nasienne. Pokroić na plasterki i włożyć do garnka.</li>
                            <li>Piekarnik nagrzać do 180 stopni C. Rozwałkować połowę ciasta podsypując mąką, wylepić spód formy. Dodać jabłka a na nich położyć drugą część rozwałkowanego ciasta. Wstawić do piekarnika i piec przez ok. 35 - 40 minut na złoty kolor.</li>
                        </ul>
                    </div>
                    </div>

                    <div className={this.state.visibilityAppleJuice?'textRecipe show':'textRecipe hide'}>
                    <div className='leftTextRecipe'>
                    <div onClick={this.closeAppleJuiceRecipe} className='closeButton'></div>
                        <h2>Składniki:</h2>
                        <p>1 kg jabłek obranych ze skórki</p>
                        <p>korzeń imbiru</p>
                        <p>4 marchewki</p>
                    </div>
                    <div className='rightTextRecipe'>
                        <h2>Przygotowanie:</h2>
                        <ul>
                            <li>Obrane jabłka, marchewki i korzeń imbiru wrzucamy do sokowirówki. Jeśli napój okaże się zbyt cierpki, mozna go nieco osłodzić cukrem.</li>
                            <li>Świeży sok z jabłek można mieszać z innymi letnimi owocami: bananami, ananasem, brzoskwiniami. Po przepuszczeniu wszystkich owoców przez sokowirówkę warto sok z jabłek wstawić do lodówki na pół godziny.</li>
                        </ul>
                    </div>
                    </div>  

                    <div className={this.state.visibilityBurger?'textRecipe show':'textRecipe hide'}>
                    <div className='leftTextRecipe'>
                    <div onClick={this.closeBurgerRecipe} className='closeButton'></div>
                        <h2>Składniki:</h2>
                        <p>250 g wołowiny (mięso powinno mieć ok. 20% tłuszczu)</p>
                        <p>sól morska</p>
                        <p>młotkowany czarny pieprz</p>
                        <p>bułki hamburgerowe  z sezamem</p>
                        <p>plasterki sera (np. cheddar)</p>
                        <p>plasterki kiszonego ogórka</p>
                        <p>liście sałaty</p>
                        <p>plasterki pomidora</p>
                        <p>cienkie plasterki czerwonej cebuli</p>
                    </div>
                    <div className='rightTextRecipe'>
                        <h2>Przygotowanie:</h2>
                        <ul>
                            <li>Mięso pokroić na kawałki, rozłożyć na desce, posypać pieprzem, mieszanką przypraw, czosnkiem, skórką z cytryny, natkę pietruszki oraz zeszkloną cebulę jeśli jej używamy. Zmielić w maszynce do mięsa sitkiem o grubych oczkach</li>
                            <li>Do zmielonego mięsa dodać żółtko i delikatnie wymieszać. Uformować kotleciki biorąc na każdego po około 150 - 200 g mięsa. Rozgrzać dobrze patelnię grillową, posypać pierwsze 4 burgery z jednej strony solą i ułożyć na patelni (posoloną stroną do patelni). Grillować na dość dużym ogniu, przez około 3 minuty, aż mięso zmieni kolor do połowy burgera.</li>
                            <li>Posypać drugą stronę burgerów solą, przewrócić na drugą stronę (opcjonalnie położyć na zgrillowanej stronie plasterek sera aby się roztopił) i grillować kolejne 3 minuty.</li>
                            <li>Patelnię wytrzeć papierowym ręcznikiem i grillować podobnie kolejne burgery. </li>
                            <li>Połówki bułki posmarować cienko majonezem, na dolnej połówce bułki ułożyć plasterek ogórka kiszonego i zgrillowanego burgera. Doprawić młotkowanym pieprzem, posmarować ketchupem i ułożyć warzywa: pomidora, sałatę pół cieniutkiego plasterka czerwonej cebuli. Przykryć drugą połówką bułki i lekko docisnąć.</li>
                        </ul>
                    </div>
                    </div>

                    <div className={this.state.visibilityBurrito?'textRecipe show':'textRecipe hide'}>
                    <div className='leftTextRecipe'>
                    <div onClick={this.closeBurritoRecipe} className='closeButton'></div>
                        <h2>Składniki:</h2>
                        <p>1/2 cebuli, 1 ząbek czosnku, 1/2 papryczki chili</p>
                        <p>220 g (1 szkl.) ryżu długoziarnistego</p>
                        <p>3 łyżki krojonych pomidorów</p>
                        <p>500 g mielonej wołowiny</p>
                        <p>4 duże placki tortilli</p>
                        <p>80 g tartego sera</p>
                        <p>opcjonalnie awokado, limonka, kolendra, jalapeno</p>
                        <p>kwaśna śmietana</p>
                    </div>
                    <div className='rightTextRecipe'>
                        <h2>Przygotowanie:</h2>
                        <ul>
                            <li>Cebulę, czosnek i chili drobno posiekać lub zetrzeć. Włożyć na dużą patelnię i chwilę podsmażyć na łyżce oliwy.</li>
                            <li>Dodać surowy ryż i dalej podsmażać aż ryż nieco zbrązowieje (ok. 5 minut).</li>
                            <li>Zagotować bulion, dodać pomidory i wymieszać. Wlać na patelnię, zmniejszyć ogień do minimum, przykryć i gotować 25 minut.</li>
                            <li>Na środek tortilli nałożyć porcję ryżu, chili con carne, tartego sera oraz pokrojonego awokado. Opcjonalnie dodać kawałki jalapeno, skropić limonką i zawinąć (najpierw boki do środka a potem w rulon).</li>
                            <li>Zawinięte burrito podgrzać z obydwu stron do zrumienienia tortilli (na patelni lub najlepiej w opiekaczu do kanapek).</li>
                            <li>Przekroić na pół, podawać z kwaśną śmietaną i opcjonalnie świeżą kolendrą.</li>
                        </ul>
                    </div>
                    </div>

                    <div className={this.state.visibilityFish?'textRecipe show':'textRecipe hide'}>
                    <div className='leftTextRecipe'>
                    <div onClick={this.closeFishRecipe} className='closeButton'></div>
                        <h2>Składniki:</h2>
                        <p>filety z ryby np.dorsz, 6 sztuk</p>
                        <p>pomidory, 2</p>
                        <p>por, 1</p>
                        <p>cebula, 2</p>
                        <p>papryka, 2 strąki</p>
                        <p>pieprz cytrynowy, łyżeczka</p>
                        <p>sok z cytryny, 3 łyżki</p>
                        <p>wino białe wytrawne, szklanka</p>
                        <p>sól, do smaku</p>
                        <p>tarty ser żółty, 2 łyżki</p>
                        <p>mąka, 3 łyzki</p>
                    </div>
                    <div className='rightTextRecipe'>
                        <h2>Przygotowanie:</h2>
                        <ul>
                            <li>ryby rozmrozić i odcisnąć z nadmiaru wody,posypać solą i pieprzem,skropić sokiem z cytryny i odstawić na 30 minut</li>
                            <li>rybę otoczyć w mące i smażyć na rozgrzanym oleju na rumiano</li>
                            <li>cebulę i pora pokroić i smażyć na łyżce oleju,następnie dodać pokrojoną paprykę i pomidory,dolać wino i jeszcze chwilę dusić</li>
                            <li>rybę ułożyć w naczyniu żaroodpornym,na rybe wyłożyć warzywa,posypać serem i zapiekać około 25 minut</li>
                            <li>podawać z ziemniakami z wody lub pieczywem</li>
                        </ul>
                    </div>
                    </div>
                    
                    <div className={this.state.visibilitySteak?'textRecipe show':'textRecipe hide'}>
                    <div className='leftTextRecipe'>
                    <div onClick={(this.closeSteakRecipe)} className='closeButton'></div>
                        <h2>Składniki:</h2>
                        <p>80 dag polędwicy wołowej</p>
                        <p>5 dag masła</p>
                        <p>1 łyżka mięty</p>
                        <p>4 pomidory</p>
                        <p>czosnek mielony</p>
                        <p>bazylia</p>
                        <p>pieprz czarny mielony</p>
                        <p>sól morska</p>
                    </div>
                    <div className='rightTextRecipe'>
                        <h2>Przygotowanie:</h2>
                        <ul>
                            <li>Z polędwicy wykrój steki po około 20 dag każdy. Mięso dopraw pieprzem i solą morską.</li>
                            <li>Na patelni rozgrzej oliwę i smaż steki około minuty z każdej strony. Dodaj masło i liście mięty.</li>
                            <li>Całość zdejmij z patelni, przełóż na folię aluminiową, zawiń i wstaw do piekarnika na około 5 minut.</li>
                        </ul>
                    </div>
                    </div>

                    <div className={this.state.visibilityIceCream?'textRecipe show':'textRecipe hide'}>
                    <div className='leftTextRecipe'>
                    <div onClick={this.closeIceCreamRecipe} className='closeButton'></div>
                        <h2>Składniki:</h2>
                        <p>1 puszka mleka skondensowanego niesłodzonego</p>
                        <p>120 g cukru pudru</p>
                        <p>1 łyżeczka ekstraktu z wanilii</p>
                    </div>
                    <div className='rightTextRecipe'>
                        <h2>Przygotowanie:</h2>
                        <ul>
                            <li>Mleko schłodzić do temperatury lodówkowej (najlepiej puszkę umieścić w lodówce 24 h przed planowanym przygotowaniem lodów).</li>
                            <li>Po tym czasie mleko wyjąć z lodówki, zawartość przelać do wysokiego naczynia, przy użyciu miksera (końcówkami do ubijania białek) ubić na gęstą pianę,  przez około 30 - 40 sekund, lub w zależności od  mocy miksera. Na sam koniec wsypać cukier, dodać ekstrakt z wanilii i jeszcze przez chwilę kontynuować ubijanie.</li>
                            <li>Ubitą mieszankę przelać do maszyny do lodów i dalej postępować według instrukcji jej producenta. Przełożyć do pojemniczka i włożyć na kilka godzin do zamrażarki.</li>
                        </ul>
                    </div>
                    </div>

                    <div className={this.state.visibilityMeatSalad?'textRecipe show':'textRecipe hide'}>
                    <div className='leftTextRecipe'>
                    <div onClick={this.closeMeatSaladRecipe} className='closeButton'></div>
                        <h2>Składniki:</h2>
                        <p>300 g wędzonej piersi z kurczaka</p>
                        <p>50 g rodzynek</p>
                        <p>1 puszka kukurydzy</p>
                        <p>1 puszka ananasa</p>
                        <p>1 słoiczek selera konserwowego</p>
                        <p>sól</p>
                        <p>pieprz</p>
                        <p>majonez według uznania</p>
                    </div>
                    <div className='rightTextRecipe'>
                        <h2>Przygotowanie:</h2>
                        <ul>
                            <li>Pierś smażymy na patelni</li>
                            <li>Dodajemy kukurydzę, rodzynki, ananas oraz seler</li>
                            <li>Dodać jajko i połączyć składniki w jednolite ciasto. Rozpłaszczyć je nieco, zawinąć w folię i włożyć do lodówki.</li>
                            <li>Dodajemy majonez</li>
                            <li>Mieszamy wszystko ze sobą</li>
                        </ul>
                    </div>
                    </div>

                    <div className={this.state.visibilitySalad?'textRecipe show':'textRecipe hide'}>
                    <div className='leftTextRecipe'>
                    <div onClick={this.closeSaladRecipe} className='closeButton'></div>
                        <h2>Składniki:</h2>
                        <p>ziemniaki 2 szt.</p>
                        <p>seler mały połowa</p>
                        <p>marchew 1 szt.</p>
                        <p>ogórki kiszone 2 szt.</p>
                        <p>jajka kurze 3 szt.</p>
                        <p>por zielona część</p>
                        <p>zielony groszek marynowany 1 mała puszka</p>
                        <p>sól do smaku</p>
                        <p>pieprz ziołowy do smaku</p>
                        <p>musztarda 2 łyżeczki</p>
                        <p>oliwa z pestek winogron 50 ml</p>
                        <p>majonez 2 łyżki</p>
                    </div>
                    <div className='rightTextRecipe'>
                        <h2>Przygotowanie:</h2>
                        <ul>
                            <li>Ziemniaki ze skórą, marchew i seler myjemy i gotujemy do miękkości. W między czasie gotujemy jajka na twardo i kroimy drobno zieloną część pora. Ugotowane jajka studzimy, obieramy ze skorupek i kroimy w kostkę. Wszystkie krojone składniki umieszczamy w misce</li>
                            <li>Ugotowane ziemniaki, marchew i seler studzimy, obieramy ze skórek i kroimy również w kostkę, umieszczamy w misce. Kroimy w kostkę ogórki kiszone, groszek odcedzamy z wody na sitku i dodajemy do pozostałych składników. Wszystkie składniki mieszamy, solimy pieprzymy, dodajemy oliwę, musztardę i majonez, mieszamy i umieszczamy w pojemniku.</li>
                            <li>Dodać jajko i połączyć składniki w jednolite ciasto. Rozpłaszczyć je nieco, zawinąć w folię i włożyć do lodówki.</li>
                            <li>Pojemnik zakrywamy i wstawiamy sałatkę do lodówki na około 2 godziny żeby odpoczęła.</li>
                        </ul>
                    </div>
                    </div>

                   <div className={this.state.visibilitySalmon?'textRecipe show':'textRecipe hide'}>
                    <div className='leftTextRecipe'>
                    <div onClick={this.closeSalmonRecipe} className='closeButton'></div>
                        <h2>Składniki:</h2>
                        <p>3 łyżki oliwy z oliwek</p>
                        <p>1 łyżka miodu</p>
                        <p>1 cytryna, wyciśnięta</p>
                        <p>2-3 ząbki czosnku, rozgniecione</p>
                        <p>1 łyżeczka mielonej kolendry</p>
                        <p>sól i pieprz do smaku</p>
                        <p>1 kg filetu z łososia</p>
                    </div>
                    <div className='rightTextRecipe'>
                        <h2>Przygotowanie:</h2>
                        <ul>
                            <li>W miseczce wymieszać koperek z oliwą, miodem, sokiem z cytryny, kolendrą, czosnkiem, solą i pieprzem.</li>
                            <li>Łososia opłukać i osuszyć papierowym ręcznikiem. Ułożyć na folii spożywczej skórą do dołu, pokryć równomiernie marynatą, owinąć folią i wstawić do lodówki na 30 minut.</li>
                            <li>Rozgrzać piekarnik do 220 stopni C.</li>
                            <li>Z łososia zdjąć folię i ułożyć w brytfannie skórą do dołu. Piec przez 12-15 minut.</li>
                        </ul>
                    </div>
                    </div>

                    <div className={this.state.visibilityMilkShake?'textRecipe show':'textRecipe hide'}>
                    <div className='leftTextRecipe'>
                    <div onClick={this.closeMilkShakeRecipe} className='closeButton'></div>
                        <h2>Składniki:</h2>
                        <p>lody waniliowe lub czekoladowe, 1 szklanka</p>
                        <p>mleko, 1/4 szklanki</p>
                        <p>sos czekoladowy, 2 łyżki</p>
                        <p>3-4 kostki lodu</p>
                    </div>
                    <div className='rightTextRecipe'>
                        <h2>Przygotowanie:</h2>
                        <ul>
                            <li>W mikserze lub blenderze wymieszać wszystkie składniki na gładko.Wlać do szklanki.Można posypać czekoladową posypką.</li>
                        </ul>
                    </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}
export default MainContent;