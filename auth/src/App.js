import React, { Component } from 'react'
import { View, Text } from 'react-native'
import firebase from 'firebase'
import { Header, Button, Spinner } from './compontents/common'
import LoginForm from './compontents/LoginForm'


class App extends Component{
    state ={ loggedIn: null }

    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyAvy0hcIF_DshLGbiDiXC4lLOSjqu62F2g',
            authDomain: 'authentication-56aa6.firebaseapp.com',
            databaseURL: 'https://authentication-56aa6.firebaseio.com',
            projectId: 'authentication-56aa6',
            storageBucket: 'authentication-56aa6.appspot.com',
            messagingSenderId: '191840679085'
        })

        firebase.auth().onAuthStateChanged((user) => {
            if(user) {
                this.setState({ loggedIn: true })
            } else {
                this.setState({ loggedIn: false })
            }
        })
    }

    renderContent() {
        switch(this.state.loggedIn){
            case true:
                return (
                    <View style={styles.buttonStyle}>
                        <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
                    </View>
                )
            case false:
                return <LoginForm />
            default:
                return (
                    <View style={styles.spinnerStyle}>
                        <Spinner size='large' />
                    </View>
                )
        }
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                {this.renderContent()}
            </View>
        )
    }
}

const styles = {
    spinnerStyle: {
        alignSelf: 'center'
    },
    buttonStyle: {
        flexDirection: 'row'
    }
}

export default App
