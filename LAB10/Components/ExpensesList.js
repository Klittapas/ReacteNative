import { FlatList,Text,StyleSheet } from "react-native";
import ExpenseItem from "./ExpenseItem";


export default function ExpensesList({expenses}){
    function rederExpensesItem(itemdata){
        return <ExpenseItem {...itemdata.item} />
    }
    return(
        <FlatList data={expenses} renderItem={rederExpensesItem} keyExtractor={(item)=>item.id} />
    )
}

