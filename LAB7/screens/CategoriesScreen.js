import { FlatList } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/meal-data";
export default function CategoriesScreen({ navigation }) {
  function renderCategoryItem(itemData) {
    function pressHanler() {
      navigation.navigate("MealsOverview",{categoryid:itemData.item.id});
    }
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHanler}
      />
    );
  }
  return (
  <FlatList
    data={CATEGORIES}
    keyExtractor={(item) => item.id}
    renderItem={renderCategoryItem}
    numColumns={2}
  />
);
}

