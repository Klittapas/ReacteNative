import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, KeyboardAvoidingView, Platform, TextInput, ImageBackground } from 'react-native';
import SearchInput from "./components/SerachInput";
import getImageForWeather from "./components/getImageForWeather";
import { useState } from "react";

export default function App() {
  const [location, setLocation] = useState("London")
  function addLocationHandler(newLocation) {
    setLocation(newLocation)
  }

  return (
    <KeyboardAvoidingView style={styles.container} behavior='padding'>

      <ImageBackground
        source={getImageForWeather(location)}
        style={styles.imageContainer}
        imageStyle={styles.image}
      >

        <View style={styles.detailsContainer}>
          <Text style={[styles.largeText, styles.textStyle]}>{location}</Text>
          <Text style={[styles.smallText, styles.textStyle]}>Light Cloud</Text>
          <Text style={[styles.largeText, styles.textStyle]}>28°</Text>

          <SearchInput placeholder="Search any city"
                      onAddLocation={addLocationHandler} 
                        />
        </View>
        <View>
          <Text style={styles.name}>Klittapas pongprae ID:6614110015</Text>
        </View>
        {/* <TextInput
        autoCorrect={false}
        placeholder="Search any city"
        placeholderTextColor="white"
        style={styles.textInput}
        clearButtonMode="always"
      /> */}
        <StatusBar style="auto" />
      </ImageBackground>
    </KeyboardAvoidingView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'start',
    justifyContent: 'center',
  },
  magenta: {
    color: 'magenta'
  },
  textStyle: {
    textAlign: 'center',
    fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Roboto',
    color: 'white'
  },
  largeText: {
    fontSize: 44,
  },
  smallText: {
    fontSize: 18,
  },
  name:{
    alignSelf:'center',
    justifyContent:'center',
    color:'white',
    fontSize:20,
    marginBottom:50,
    
  },
  textInput: {
    backgroundColor: "#666",
    color: "white",
    height: 40,
    width: 300,
    marginTop: 20,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    alignSelf: "center",
  },
  imageContainer: {
    flex: 1,
    // alignSelf:'center',
    // justifyContent:'center'
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "cover",
    // alignSelf:'center'
  },
  detailsContainer: {
    flex: 1,
    justifyContent: "center",
    // backgroundColor: "rgba(0,0,0,0.2)",
    paddingHorizontal: 20,
  },
  textStyle: {
    textAlign: "center",
    fontFamily: Platform.OS === "ios" ? "AvenirNext-Regular" : "Roboto",
    // color: 'white'
  },
}); 
