import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import ExpensesContextProvider from "./context/expenses-context";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AllExpense from "./Screen/AllExpense";
import ManageExpenses from "./Screen/ManegerExpense";
import RecentExpenses from "./Screen/RecentExense";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { DUMMY_EXPENSES } from "./data/expense-data";
import { GlobalStyles } from "./colors";
import IconButton from "./IconButton";
import { useNavigation } from "@react-navigation/native";
import ManageExpense from "./Screen/ManegerExpense";
import { Alert, Text } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function ExpensesOverview() {
  return (
    <BottomTabs.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        headerTintColor: "white",
        tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        tabBarActiveTintColor: GlobalStyles.colors.primary100,
        headerRight: ({ tintColor }) => (
          <IconButton
            icon="add"
            size={24}
            color={tintColor}
            onPress={() => {
              // Correctly use the navigation object provided as a prop
              navigation.navigate("ManageExpense");
            }}
          />
        ),
        headerLeft: ({ tintColor }) => (
          <IconButton
            icon="info"
            size={24}
            color={tintColor}
            onPress={() => {
              Alert.alert(
                'Develops',
                'Klittapas Pongprae\nID:6614110015'
              );
            }}
          />
        ),
      })}
    >
      <BottomTabs.Screen
        name="RecentExpenses"
        component={RecentExpenses}
        options={{
          title: "Recent Expenses",
          tabBarLabel: "Recent",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="hourglass" size={size} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="AllExpenses"
        component={AllExpense}
        options={{
          title: "All Expenses",
          tabBarLabel: "AllExpense",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar" size={size} color={color} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
}
export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <ExpensesContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
              headerTintColor: "white",
            }}
          >
            <Stack.Screen
              name="ExpensesOverview"
              component={ExpensesOverview}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ManageExpense"
              component={ManageExpense}
              options={{
                presentation: "modal",
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ExpensesContextProvider>
    </>
  );
}
