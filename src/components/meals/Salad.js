import React, { Component } from 'react';
import '../../index.css';

class Salad extends Component{
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
                    this.props.saladRecipe()
                    this.scrollToTop()
                }}  className='meal'>
                        <div className='mealPhoto saladPhoto'></div>
                        <div className='mealName'>
                            <h3>Sałatka z szynką</h3>
                            <p>Sałatka wzbogacona szynką i jajkiem</p>
                        </div>
                    </div>
            </div>
        )
    }
}
export default Salad;