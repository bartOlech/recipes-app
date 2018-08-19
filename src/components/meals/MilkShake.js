import React, { Component } from 'react';
import '../../index.css';

class MilkShake extends Component{
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
        const style={
            marginBottom:"3px"
        }
        return(
            <div>
                <div style={style} onClick={()=>{
                    this.props.milkShakeRecipe()
                    this.scrollToTop()
                }}  className='meal'>
                        <div className='mealPhoto milkShakePhoto'></div>
                        <div className='mealName'>
                            <h3>Mleczny shake</h3>
                            <p>Shake, który jest dostępny w McDonald’s teraz możesz zrobić w domu</p>
                        </div>
                    </div>
            </div>
        )
    }
}
export default MilkShake;