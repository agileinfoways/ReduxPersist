import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { increaseCounter, decreaseCounter } from '../redux/action/CounterAction';
import { FONTS } from '../utils/fonts';

class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    increaseCounter = () => {
        let counter = this.props.counter
        this.props.increaseCounter(counter + 1)
    }

    decreaseCounter = () => {
        let counter = this.props.counter
        this.props.increaseCounter(counter - 1)
    }

    render() {
        return (
            <View style={{
                flex: 1,
                marginTop: 30,
                // justifyContent: "center",
                // alignItems: "center"
            }}>
                <Text style={{ fontFamily: FONTS.BOLD, fontSize: 18, marginTop: 30, paddingHorizontal: 8 }}>
                    {"Persist value"}
                </Text>
                <Text style={{ fontFamily: FONTS.REGULAR, fontSize: 14, marginTop: 10, paddingHorizontal: 8 }}>
                    {"Email: " + this.props.userData.email}
                </Text>

                <Text style={{ fontFamily: FONTS.REGULAR, fontSize: 14, marginTop: 10, paddingHorizontal: 8 }}>
                    {"Username: " + this.props.userData.username}
                </Text>



                <Text style={{ fontFamily: FONTS.BOLD, fontSize: 18, marginTop: 30, paddingHorizontal: 8 }}>
                    {"Non-persist value"}
                </Text>
                <Text style={{ fontFamily: FONTS.REGULAR, fontSize: 14, marginTop: 10, paddingHorizontal: 8 }}>
                    {"Counter:"}
                </Text>
                <View style={{ flexDirection: "row", paddingHorizontal: 8, marginTop: 10, alignItems: "center" }}>
                    <TouchableOpacity style={{ padding: 5, backgroundColor: "green" }} onPress={this.decreaseCounter}>
                        <Text style={{ fontSize: 18, paddingHorizontal: 8, color: "#ffffff" }}>{"-"}</Text>
                    </TouchableOpacity>

                    <Text style={{ fontFamily: FONTS.REGULAR, fontSize: 14, paddingHorizontal: 8 }}>{this.props.counter}</Text>

                    <TouchableOpacity style={{ padding: 5, backgroundColor: "green" }} onPress={this.increaseCounter}>
                        <Text style={{ fontSize: 18, paddingHorizontal: 8, color: "#ffffff" }}>{"+"}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default connect(
    state => {
        console.log("HOME STATE", state)
        return {
            userData: state.userReducer.userData,
            counter: state.counterReducer.counter
        }
    },
    dispatch => {
        return {
            increaseCounter: data => {
                dispatch(increaseCounter(data))
            },
            decreaseCounter: data => {
                dispatch(decreaseCounter(data))
            }
        }
    }
)(HomeScreen)