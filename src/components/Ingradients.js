import React, { Component } from 'react';
import '../index.css';

class Ingradients extends Component{
    constructor(props){
        super(props)
        this.state={
            apple:false,
            cucumber:false,
            tomato:false,
            milk:false,
            meat:false,
            fish:false
        }
    }
    apple=(e)=>{
        this.props.apple();
        this.setState({
            apple:!this.state.apple
        })
    }
    cucumber=(e)=>{
        this.props.cucumber();
        this.setState({
            cucumber:!this.state.cucumber
        })
    }
    tomato=(e)=>{
        this.props.tomato();
        this.setState({
            tomato:!this.state.tomato
        })
    }
    milk=(e)=>{
        this.props.milk();
        this.setState({
            milk:!this.state.milk
        })
    }
    meat=(e)=>{
        this.props.meat();
        this.setState({
            meat:!this.state.meat
        })
    }
    fish=(e)=>{
        this.props.fish();
        this.setState({
            fish:!this.state.fish
        })
    }
    render(){
        
        return(
              <div className='ingredients'>
                  <h4>Wybierz składniki:</h4>
                  <div className='selectIngradient'>
                      <div onClick={this.apple} className={this.state.apple?'ingradientClick apple':'ingradient apple'}></div>
                      <div onClick={this.cucumber} className={this.state.cucumber?'ingradientClick cucumber':'ingradient cucumber'}></div>
                      <div onClick={this.tomato} className={this.state.tomato?'ingradientClick tomato':'ingradient tomato'}></div>
                      <div onClick={this.milk} className={this.state.milk?'ingradientClick milk':'ingradient milk'}></div>
                      <div onClick={this.meat} className={this.state.meat?'ingradientClick meat':'ingradient meat'}></div>
                      <div onClick={this.fish} className={this.state.fish?'ingradientClick fish':'ingradient fish'}></div>
                  </div>
                  <hr/>
              </div>
        )
    }
}
export default Ingradients;