import axios from 'axios';
import React, { Component } from 'react';
import './App.css';
import NewClipModal from './components/NewClipModal';
import LoginModal from './components/LoginModal';
import { API_URL } from './constants';

class App extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            authToken: {
                refresh: "",
                access: ""
            }
        };
    }

    handleAuthToken = (authToken) => {
        this.setState({authToken: authToken});
    }

    render() {
        return (
        <div className="App">
            <LoginModal onLogin={this.handleAuthToken} />
            <NewClipModal accessToken={this.state.authToken.access}/> 
        </div>
        );
    }
}

export default App;
