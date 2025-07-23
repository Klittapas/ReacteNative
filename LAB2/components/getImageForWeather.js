const images = {
    Clear: require("../image/clear.png"),
    Hail: require("../image/hail.png"),
    "Heavy Cloud": require("../image/heavy-cloud.png"),
    "Light Cloud": require("../image/light-cloud.png"),
    "Heavy Rain": require("../image/heavy-rain.png"),
    "Light Rain": require("../image/light-rain.png"),
    Showers: require("../image/showers.png"),
    Sleet: require("../image/sleet.png"),
    Snow: require("../image/snow.png"),
    Thunder: require("../image/thunder.png"),
};
const images1 = {
    Bangkok: require("../image/clear.png"),
    Tokyo: require("../image/hail.png"),
    "London": require("../image/heavy-cloud.png"),
    "Kyoto": require("../image/light-cloud.png"),
    "Paris": require("../image/heavy-rain.png"),
    "Cheng Mai": require("../image/light-rain.png"),
    "Cheng Rai": require("../image/showers.png"),
    "New York": require("../image/sleet.png"),
    "crystal cove ": require("../image/snow.png"),
    "Chicago": require("../image/thunder.png"),
};
export default function getImage(weather){
    return images1[weather]

}