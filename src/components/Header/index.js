import React, {Component} from 'react';
import styles from './styles.module.css';

class Header extends Component {
    render(){
        return (
            <div
                className = {styles['mainQuest']}
            >{ this.props.header }</div>
        );
    }
}

export default Header;
