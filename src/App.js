import React, { Component } from 'react';
import './App.css';
import LoginModal from './components/LoginModal';

class App extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    render() {
        return (
        <div className="App">
            <LoginModal></LoginModal>
        </div>
        );
    }
}

export default App;
