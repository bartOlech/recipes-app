import React, { Component } from 'react';
import '../../index.css';

class MeatSalad extends Component{
    constructor(props){
        super(props)
        this.state={
            intervalId: 0
        }
    }
    scrollStep=()=> {
        if (window.pageYOffset === 0) {
            clearInterval(this.state.intervalId);
        }
        window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
      }
      
      scrollToTop=()=> {
        let intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
        this.setState({ intervalId: intervalId });
        
      }
    render(){
        return(
            <div>
                <div onClick={()=>{
                    this.props.meatSaladRecipe()
                    this.scrollToTop()
                }}  className='meal'>
                        <div className='mealPhoto meatSaladPhoto'></div>
                        <div className='mealName'>
                            <h3>Sałatka z kurczakiem</h3>
                            <p>Sałatki stanowią idealne rozwiązanie na pyszną kolację</p>
                        </div>
                    </div>
            </div>
        )
    }
}
export default MeatSalad;