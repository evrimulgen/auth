import React from 'react'
import { View, Text, TextInput } from 'react-native'

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
    const { inputStyle, labelStyle, containerStyle } = styles

    return (
        <View style={containerStyle}>
            <Text style={labelStyle}>
                {label}
            </Text>
            <TextInput
				placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                autoCorrect={false}
                secureTextEntry={secureTextEntry}
                underlineColorAndroid={'transparent'}
                style={inputStyle}
            />
        </View>
    )
}

const styles = {
    inputStyle: {
        color: '#000',
        fontSize: 18,
        textAlignVertical: 'center',
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: 5,
        paddingRight: 5,
        lineHeight: 23,
        flex: 2,
    },
    labelStyle: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 18,
        paddingLeft: 20,
        flex: 1,
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
}

export { Input }
