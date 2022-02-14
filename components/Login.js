import React from "react";
import { View, StyleSheet, Text} from "react-native";
export default function Login() {
    return (
        <View style={ styles.body}>
<Text>hello</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#0080ff'

    },
    logo: {
        width: 100,
        height: 100,
        margin: 20
    },
    text: {
    fontSize: 30,
    color: '#ffffff',
    marginBottom: 130,
    },
    input : {
        width: 300,
        borderWidth: 1,
        borderColor: '#555',
        borderRadius: 10,
        backgroundColor: '#ffffff',
        textAlign: 'center',
        fontSize: 20,
        marginBottom:10
    }

}
)



