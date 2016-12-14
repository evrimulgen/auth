import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

const Button = ({ onPress, children }) => {
    const { buttonStyle, textStyle } = styles

    return (
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
            <Text style={textStyle}>
                {children} 
            </Text>
        </TouchableOpacity>
    )
}

const styles = {
    buttonStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#007aff',
        borderWidth: 3,
        borderRadius: 2,
    },
    textStyle: {
        fontSize: 16,
        color: '#007aff',
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10,
    },
}

export { Button }
