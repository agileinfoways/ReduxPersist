import React, { Component } from 'react';
import {
    View, Text, TextInput,
    TouchableOpacity, StyleSheet
} from 'react-native';
import { saveUserDataInRedux, saveTokenInRedux } from '../redux/action/UserAction';
import { connect } from 'react-redux';

class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            username: ""
        };
    }

    onEmailChange = (text) => {
        this.setState({ email: text })
    }

    onUsernameChange = (text) => {
        this.setState({ username: text })
    }

    saveClick = () => {
        let params = {
            email: this.state.email,
            username: this.state.username
        }
        this.props.saveUserData(params)
        this.props.saveToken("dvndfvdbnvfbnfb45645645bvdebbbe4etnrn")
        this.props.navigation.navigate("Home")
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <TextInput
                    style={style.textInput}
                    placeholder={"Username"}
                    autoCapitalize={false}
                    value={this.state.username}
                    onChangeText={this.onUsernameChange}
                />

                <TextInput
                    style={style.textInput}
                    placeholder={"Email"}
                    value={this.state.email}
                    autoCapitalize={false}
                    keyboardType="email-address"
                    onChangeText={this.onEmailChange}
                />

                <TouchableOpacity style={style.buttonContainer} onPress={this.saveClick}>
                    <Text style={{
                        color: "#fff",
                        fontSize: 14
                    }}>{"Submit"}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default connect(
    state => {
        console.log("HOME STATE", state)
        return {

        }
    },
    dispatch => {
        return {
            saveUserData: data => {
                dispatch(saveUserDataInRedux(data))
            },
            saveToken: data => {
                dispatch(saveTokenInRedux(data))
            }
        }
    }
)(LoginScreen)

export const style = StyleSheet.create({

    textInput: {
        width: "80%",
        fontSize: 14,
        marginTop: 10,
        padding: 8,
        borderWidth: 1,
        borderColor: "gray"
    },
    buttonContainer: {
        marginTop: 10,
        backgroundColor: "green",
        paddingVertical: 10,
        paddingHorizontal: 30
    }

})