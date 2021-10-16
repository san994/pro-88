import React, { Component } from 'react';
import { Text, View } from 'react-native';

import firebase from "firebase"

export default class LogOut extends Component {
    componentDidMount=()=>{
        firebase.auth().signOut()
    }
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text>bye</Text>
            </View>
        )
    }
}