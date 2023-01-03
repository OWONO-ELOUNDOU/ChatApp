//import liraries
import React, { Component } from 'react';
import { Platform, KeyboardAvoidingView, SafeAreaView } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';

// create a component
class chatScreen extends React.Component {

    state = {
        messages: []
    }

    /*
    get user() {
        return {
            _id: Fire.uid,
            name: this.props.navigation.state.params.name
        }
    }

    componentDidMount() {
        Fire.get(message => this.setState(previous => ({
            messages: GiftedChat.append(previous.messages, message)
        })))
    }

    componentWillUnmount() {
        Fire.off()
    }
    */

    render() {
        const chat = <GiftedChat messages={this.state.messages} /* onSend={Fire.send} user={this.user} */ />

        if(Platform.OS === 'android') {
            return(
                <KeyboardAvoidingView style={{ flex: 1 }} keyboardVerticalOffset={30} enabled >
                    {chat}
                </KeyboardAvoidingView>
            )
        }
        return <SafeAreaView style={{ flex: 1 }} >{chat}</SafeAreaView>
    }
}

// define your styles


//make this component available to the app
export default chatScreen;
