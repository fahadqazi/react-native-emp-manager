import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyCJPxP9of8CJTisjQFazcWgIt7l2Nhw47k',
            authDomain: 'manager-22868.firebaseapp.com',
            databaseURL: 'https://manager-22868.firebaseio.com',
            projectId: 'manager-22868',
            storageBucket: 'manager-22868.appspot.com',
            messagingSenderId: '561935401460'
        };
        firebase.initializeApp(config);
    }

    render() {
        return (
            <Provider store={createStore(reducers)}>
               <LoginForm />
            </Provider>
        );
    }
}

export default App;
