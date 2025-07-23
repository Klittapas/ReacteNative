import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { useState } from "react";
export default function SearchInput(props) {
    const [location,setLocation] = useState();
    function handleChangeText(newLocation){
        console.log(newLocation);
        setLocation(newLocation)
    }
    function addLocationHandler(){
        console.log(location);
        props.onAddLocation(location)
        setLocation('')
        
    }
    return (
        <View style={styles.container}>
            <TextInput
                autoCorrect={false}
                placeholder={props.placeholder}
                placeholderTextColor="white"
                underlineColorAndroid="transparent"
                style={styles.textInput}    
                clearButtonMode="always"
                onChangeText={handleChangeText}
                onSubmitEditing={addLocationHandler}
                value= {location}
            />
        </View>
    );
} const styles = StyleSheet.create({
    container: {
        height: 50,
        marginTop: 20,
        backgroundColor: "#666",
        marginHorizontal: 40,
        paddingHorizontal: 13,
        borderRadius: 20,
    },
    textInput: {
        flex: 1,
        color: "white",
    },
});