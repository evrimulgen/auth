import React, { Component } from 'react'
import { Text, View } from 'react-native'
import firebase from 'firebase'
import { Header, Button, Spinner } from './components/common'
import LoginForm from './components/LoginForm'

class App extends Component {
    state = { loggedIn: null }

    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyDUTdy0BDZsN2LBWRuJnub12BAVdNQcPrA",
            authDomain: "auth-dbd1d.firebaseapp.com",
            databaseURL: "https://auth-dbd1d.firebaseio.com",
            storageBucket: "auth-dbd1d.appspot.com",
            messagingSenderId: "735925513026"
        })

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true })
            } else {
                this.setState({ loggedIn: false })
            }
        })
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <View style={{ flexDirection: 'row' }}>
                        <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
                    </View>
                )
            case false:
                return <LoginForm />
            default:
                return (
                    <View style={{ flexDirection: 'row' }}>
                        <Spinner />
                    </View>
                )
        }
    }

    render() {
        return (
            <View>
                <Header headerText='Authentication' />
                {this.renderContent()}
            </View>
        )
    }
}

export default App
