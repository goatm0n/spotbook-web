import React, { Component } from 'react';
import './App.css';
import NewClipModal from './components/NewClipModal';
import LoginModal from './components/LoginModal';
import NewSpotModal from './components/NewSpotModal';
import EditProfileModal from './components/EditProfileModal';
import ProfilesModal from './components/ProfilesModal';
import AccountsModal from './components/AccountsModal';
import ClipsModal from './components/ClipsModal';
import SpotsModal from './components/SpotsModal';
import FollowersModal from './components/FollowersModal';

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
            <NewClipModal accessToken={this.state.authToken.access} /> 
            <NewSpotModal auth={this.state.authToken.access} />
            <EditProfileModal />
            <ProfilesModal />
            <AccountsModal />
            <ClipsModal />
            <SpotsModal />
            <FollowersModal id="2" type="profile" />
        </div>
        );
    }
}

export default App;
