import React, { Component } from 'react';
import '../../index.css';

class Salmon extends Component{
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
                    this.props.salmonRecipe()
                    this.scrollToTop()
                }}  className='meal'>
                        <div className='mealPhoto salmonPhoto'></div>
                        <div className='mealName'>
                            <h3>Łosoś wędzony</h3>
                            <p>Łosoś z dodatkiem ziemniaków doprawionych świeżym koperkiem</p>
                        </div>
                    </div>
            </div>
        )
    }
}
export default Salmon;