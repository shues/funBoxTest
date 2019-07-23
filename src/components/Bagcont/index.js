import React, {Component} from 'react';
import './styles.css';
import Bag from '../Bag';
import Footblock from '../Footblock';

class Bagcont extends Component{
    constructor(props){
        super(props);
        this.state = {
            hover: '',
            selected: '',
            disabled: this.props.options.disabled
        }

        this.hoverBag = this.hoverBag.bind(this);
        this.leaveBag = this.leaveBag.bind(this);
        this.selectBag = this.selectBag.bind(this);
    }

    render(){
        return(
            <div 
                className = "bagcont"
                onClick = {this.selectBag}
                onMouseEnter = {this.hoverBag}
                onMouseLeave = {this.leaveBag}
            >
                <Bag
                    state = {this.state}
                    options = {this.props.options} 
                />
                <Footblock
                    state = {this.state} 
                    footmsg = {this.props.options.footblock}
                    name = {this.props.options.prodType} 
                />
            </div>
        );
    }
  
    hoverBag = () => {
        console.log('hover');
        if (this.state.disabled !== '') return;
        this.setState({
            hover: 'hover',
        });
    }

    leaveBag = () => {
        console.log('leave');
        if (this.state.disabled !== '') return;
        this.setState({
            hover: '',
        });
    }

    selectBag = () => {
        console.log('selected');
        if (this.state.disabled !== '') return;
        this.setState({
            selected: this.state.selected === '' ? 'selected' : ''
        });
    }
}

export default Bagcont;
