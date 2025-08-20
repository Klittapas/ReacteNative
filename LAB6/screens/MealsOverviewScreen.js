import { View, Text, StyleSheet,FlatList } from "react-native";
import { MEALS } from "../data/meal-data";
import Mealitem from "../components/MealItem";

export default function MealsOverviewScreen({ route }) {
  const catid = route.params.categoryid;

  const displayedMeals = MEALS.filter((mealitem) => {
    return mealitem.categoryIds.indexOf(catid) >= 0;
  });

  function renderMealitem(itemData) {
   const item = itemData.item

   const mealitemProps = {
    title:item.title,
    imageUrl:item.imageUrl,
    affordability:item.affordability,
    complexity:item.complexity,
    duration:item.duration
   };
   return(
    <Mealitem {...mealitemProps} />
   )
  }
  return (
    <View style={styles.container}>
      {/* <Text>Meals Overview Screen-{catid}</Text> */}
      <FlatList
        data={displayedMeals}
        renderItem={renderMealitem}
        keyExtractor={(item) => 
          item.id}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
