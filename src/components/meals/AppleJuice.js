import React, { Component } from 'react';
import '../../index.css';
class AppleJuice extends Component{
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
                    this.props.appleJuiceRecipe()
                    this.scrollToTop()
                }}  className='meal'>
                        <div  className='mealPhoto appleJuicePhoto'></div>
                        <div  className='mealName'>
                            <h3>Sok jabłkowy</h3>
                            <p>Sok z jabłek nie tylko gasi pragnienie, lecz także jest bardzo zdrowy</p>
                        </div>
                    </div>
            </div>
        )
    }
}
export default AppleJuice;