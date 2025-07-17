import {StatusBar} from 'expo-status-bar';
import {Image, Linking, StyleSheet, Text, TouchableOpacity, View} from 'react-native';


export default function App() {
    const onPressLearnMore = () => {
    };
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            marginTop: 170,
        },
        stretch: {
            // alignItems: 'center',
            // display: 'flex',
            // justifyContent: 'center',
            width: 200,
            height: 230,
            resizeMode: 'stretch',
            borderWidth: 5,
            borderRadius: 100,
            borderColor: 'skyblue',

            // marginLeft: 100,
            //
        },
        text: {
            alignSelf: 'center',
            color: 'skyblue',
            marginTop: -300,
            fontSize: 40,
        },
        date: {
            alignSelf: 'center',
            marginTop: 3,
            fontSize: 15,
        },
        address: {
            alignSelf: 'center',
            marginTop: 270,
            fontSize: 30,
            color: 'skyblue',

        },
        addr: {
            fontSize: 15,
        },
        Education: {
            alignSelf: 'center',
            marginTop: 20,
            fontSize: 30,
            color: 'skyblue',
        },
        myUniv: {
            alignSelf: 'center',
            marginTop: 20,
            fontSize: 30,
            color: 'skyblue',
        },
        textdes: {
            borderStyle: 'solid',
            fontSize: 19,
            color: 'blue',
        }
    });
    return (
        <View style={styles.container}>
            <Image
                style={styles.stretch}
                source={require('./assets/IMG_7030.png')}/>
            <Text style={styles.text}>My Proflie</Text>
            <Text style={styles.date}>Date of Birth:Noverber 19 2004</Text>
            <Text style={styles.address}>[Address:]</Text>
            <Text style={styles.addr}>ITMI,MII,MUT</Text>
            <Text style={styles.addr}>Nong Chok</Text>
            <Text style={styles.addr}>Bangkok</Text>
            <Text style={styles.addr}>Thailand</Text>
            <Text style={styles.addr}>10530</Text>

            <Text style={styles.Education}>[Education]</Text>
            <Text style={styles.addr}>Thawalanukul school</Text>
            <Text style={styles.addr}>Mahanakron univercity of Technology</Text>
            <Text style={styles.myUniv}>[Contact]</Text>
            <TouchableOpacity onPress={() => Linking.openURL('https://mut.ac.th')} style={styles.addr}><Text
                style={styles.textdes}>{"<<My" +
                "Univercity>>"}</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL('https://www.facebook.com/klittapas.pongprae/')}
                              style={styles.addr}><Text
                style={styles.textdes}>{"<<Facebook>>"}</Text></TouchableOpacity>
            <Text style={styles.addr}>My Name: Klittapas Pongprae ID:6614110015</Text>
            {/*<Button*/}
            {/*    onPress={onPressLearnMore}*/}
            {/*    title="Learn More"*/}
            {/*    color="#841584"*/}
            {/*    accessibilityLabel="Learn more about this purple button"*/}
            {/*/>*/}
            <StatusBar style="auto"/>
        </View>
    );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
