import { Text, View, Image, StyleSheet, ScrollView } from "react-native";
import { useLayoutEffect, useContext } from 'react';
import { FavoritesContext } from "../store/favorites-context";

import MealDetails from "../components/MealDetails";
import { MEALS } from "../data/meal-data";
import Subtitle from "../components/Subtitle";
import List from "../components/List";
import IconButton from "../components/IconButton";

export default function MealDetailsScreen({ route, navigation }) {
  const favoriteMealsCtx = useContext(FavoritesContext);
  const mealid = route.params.mealid;
  const selectedMeal = MEALS.find((meal) => meal.id === mealid);
  const mealIsFavorite = favoriteMealsCtx.ids.includes(mealid);

  function changeFavoriteStatusHandler() {
  
  console.log('ปุ่มถูกกดแล้ว! สถานะปัจจุบันคือ:', mealIsFavorite);

  if (mealIsFavorite) {
    favoriteMealsCtx.removeFavorite(mealid);
  } else {
    favoriteMealsCtx.addFavorite(mealid);
  }
}

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={mealIsFavorite ? 'star' : 'star-outline'}
            color="white"
            onPress={changeFavoriteStatusHandler}
          />
        );
      },
    });
  }, [navigation, changeFavoriteStatusHandler, mealIsFavorite]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title} </Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordbility={selectedMeal.affordability} 
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
});