import React, { Component } from 'react';
import '../../index.css';

class Steak extends Component{
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
                    this.props.steakRecipe()
                    this.scrollToTop()
                }}  className='meal'>
                        <div className='mealPhoto steakPhoto'></div>
                        <div className='mealName'>
                            <h3>Stek wołowy</h3>
                            <p>Idealnie nada się na leni grill z przyjaciółmi</p>
                        </div>
                    </div>
            </div>
        )
    }
}
export default Steak;