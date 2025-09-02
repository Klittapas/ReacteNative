import { View, Text, StyleSheet } from 'react-native';

export default function OrdersScreen() {
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.text}>This is OrderScreen!</Text>
      <Text style={styles.text}>Klittapas Pongprae ID:6614110015</Text>
    </View>
  );
}



const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
});