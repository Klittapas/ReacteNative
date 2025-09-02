import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"; // เปลี่ยนจาก createDrawerNavigator
import { Ionicons } from "@expo/vector-icons"; // เพิ่มการนำเข้าไอคอน

import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailsScreen from "./screens/MealDetailScreen";
import FavoritesScreen from "./screens/FavoritesScreen";
import FavoritesContextProvider from './store/favorites-context';
import OrdersScreen from "./screens/OrdersScreen";


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator(); // เปลี่ยนจาก Drawer

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#351401" },
        headerTintColor: "white",
        tabBarActiveTintColor: "#e4baa1",
        tabBarStyle: { backgroundColor: "#351401" },
      }}
    >
      <Tab.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="list" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          title: "Favorites",
          headerTitleStyle: { fontSize: 13 },
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="star" size={size} color={color} />
          ),
        }}
      />
     <Tab.Screen
        name="Orders"
        component={OrdersScreen}
        options={{
          title: "Orders",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cart" size={size} color={color} /> // ใช้ไอคอนรูปรถเข็น
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <FavoritesContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: "#351401" },
              headerTintColor: "white",
              contentStyle: { backgroundColor: "#3f2f25" },
            }}
          >
            {/* เปลี่ยนชื่อ Component และ Screen ให้เรียกใช้ Tab Navigator */}
            <Stack.Screen
              name="Tabs"
              component={TabNavigator}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
            <Stack.Screen name="MealDetails" component={MealDetailsScreen} options={{title: 'Meal Details'}}/>
          </Stack.Navigator>
        </NavigationContainer>
      </FavoritesContextProvider>
    </>
  );
}