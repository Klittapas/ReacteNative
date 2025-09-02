import { View,Text,StyleSheet } from "react-native";

export default function MealDetails({
    duration,
    complexity,
    affordbility,
    style,
    textStyle,
}){
    return (
        <View style = {[styles.details,style]}>
            <Text style ={[styles.detailiitem,textStyle]}>{duration}m</Text>
            <Text style = {[styles.detailiitem,textStyle]}>
                {complexity.toUpperCase()}
            </Text>
            <Text style= {[styles.detailiitem,textStyle]}>
                {affordbility.toUpperCase()}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    details:{
        flexDirection:"row",
        alignItems:'center',
        justifyContent:'center',
        padding: 8,
        // color:'white'
    },
    detailiitem:{
        color:'orange',
        marginHorizontal:4,
        fontSize:12,
        font:'bold'
    }
})

