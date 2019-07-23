import React, {Component} from "react";
import './styles.css';
import Promoblock from '../Promoblock';
import Weightblock from '../Weightblock';

class Bag extends Component{

    render(){
        const PromoSection = this.props.options;
        const Weight = this.props.options.weight;
        const state = this.props.state;
        const subClassName = ' ' + state.hover + ' ' + state.selected + ' ' +  state.disabled;

        return(
            <div className = {'bigBag' + subClassName}>
                <Promoblock 
                    state={this.props.state} 
                    options = {PromoSection} 
                />
                <Weightblock 
                    weight = {Weight} 
                    state = {this.props.state} 
                />
            </div>
        );
    }
}

export default Bag;
