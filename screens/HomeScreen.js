import { View, StyleSheet, Text, Button } from "react-native";

function HomeScreen({navigation}) {
    return (
        <View style={styles.container}>
            <Text>Home screen</Text>
            <Button title="profile" onPress={()=>navigation.navigate('Profile')} />
            <Button title="test" onPress={()=>navigation.navigate('test')} />
        </View>
    );
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default HomeScreen;