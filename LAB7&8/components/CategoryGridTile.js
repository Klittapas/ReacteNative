import { View, Text, Pressable, StyleSheet, Platform,SafeAreaView } from "react-native";

export default function CategoryGridTile({ title, color, onPress }) {
  return (
    <View style={styles.griditem}>
        <SafeAreaView style={styles.container}>
      <Pressable
      ios_ripple={{color:'#ccc'}}
      style={({pressed})=>[
        styles.button,
        pressed? styles.buttonPressed:null
      ]}
      onPress={onPress}
      >
        <View style={[styles.innerContainer,{backgroundColor:color}]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
      </SafeAreaView>
    </View>
  );
}
const styles = StyleSheet.create({
  griditem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: "#351401",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "ios" ? "hidden" : "visible",
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
   container: {
    flex: 1, // 
    backgroundColor: '#351401' 
  },
});
