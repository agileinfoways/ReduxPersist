import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

class SplashScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
        setTimeout(() => {
            if (this.props.userData.email != undefined && this.props.userData.email != "") {
                this.props.navigation.navigate("Home")
            } else {
                this.props.navigation.navigate("Login")
            }
        }, 1000);
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                {/* <Text> SplashScreen </Text> */}
            </View>
        );
    }
}

export default connect(
    state => {
        console.log("SPLASH STATE", state)
        return {
            userData: state.userReducer.userData
        }
    },
    dispatch => {
        return {
            saveUserData: data => {
                dispatch(saveUserDataInRedux(data))
            }
        }
    }
)(SplashScreen)