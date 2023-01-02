//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Touchable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// create a component
class LoginScreen extends Component {

    state = {
        name: ""
    }

    continue = () => {
        this.props.navigation.navigate("Chat", {name: this.state.name})
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={ styles.circle } />
                <View style={{ marginTop: 64 }} >
                    <Image
                        source={require('./assets/icon.png')}
                        style={{ width: 100, height: 100, alignSelf: "center" }}
                    />
                </View>
                <View style={{ marginHorizontal: 32 }} >
                    <Text style={ styles.header } >Username</Text>
                    <TextInput
                        style={ styles.input }
                        placeholder="Username"
                        onChangeText={name => {
                            this.setState({ name })
                        }}
                        value={this.state.name}
                    />
                    <View style={{ alignItems: 'flex-end', marginTop: 64 }} >
                        <TouchableOpacity style={ styles.continue } onPress={this.continue} >
                            <Ionicons name="arrow-forward-outline" size={24} color="#29358a" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0d112b',
    },
    circle: {
        width: 500,
        height: 500,
        borderRadius: 500 / 2,
        backgroundColor: '#29358a',
        position: 'absolute',
        left: -120,
        top: -20
    },
    header: {
        fontWeight: '800',
        fontSize: 30,
        color: '#fff',
        marginTop: 32
    },
    input: {
        marginTop: 32,
        height: 50,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#fff',
        borderRadius: 30,
        paddingHorizontal: 16,
        color: '#fff',
        fontWeight: '600'
    },
    continue: {
        width: 70,
        height: 70,
        borderRadius: 70 / 2,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

//make this component available to the app
export default LoginScreen;
