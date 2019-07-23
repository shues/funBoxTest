import React, { Component } from 'react';
import './App.css';
import Bagcont from './components/Bagcont';
import Header from './components/Header';
import {inpData} from './data';

class App extends Component {

    render() {
        const header = inpData.header;
        const BagsList = inpData.bags.map((el,i)=> <Bagcont key={i} options={el}/>);
        console.log(inpData);
        return (
            <div className="App">
                <Header header = {header}/>
                {BagsList}
            </div>
        );
    }

    componentDidMount(){
        this.setBlockInCenter();
    }

    setBlockInCenter(){
        let mass = document.getElementsByClassName('App');
        if(mass.length > 0){
            let elHeight = mass[0].offsetHeight;
            let winHeight = document.documentElement.clientHeight;
            if(elHeight < winHeight){
                mass[0].style.marginTop = (winHeight - elHeight)/2+'px';
            }
        }
    }
}
export default App;
