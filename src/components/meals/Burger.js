import React, { Component } from 'react';
import '../../index.css';

class Burger extends Component{
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
                    this.props.burgerRecipe()
                    this.scrollToTop()
                }}  className='meal'>
                        <div className='mealPhoto burgerPhoto'></div>
                        <div className='mealName'>
                            <h3>Burger wołowy</h3>
                            <p>Proste danie, które pokochało miliony amerykanów</p>
                        </div>
                    </div>
            </div>
        )
    }
}
export default Burger;