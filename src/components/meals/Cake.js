import React, { Component } from 'react';
import '../../index.css';

class Cake extends Component{
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
                    this.props.cakeRecipe()
                    this.scrollToTop()
                }}  className='meal'>
                        <div className='mealPhoto cakePhoto'></div>
                        <div className='mealName'>
                            <h3>Prosta szarlotka</h3>
                            <p>Bardzo łatwa i dość szybka do przygotowania szarlotka</p>
                        </div>
                    </div>
            </div>
        )
    }
}
export default Cake;
