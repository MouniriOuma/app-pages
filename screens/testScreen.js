import { View, StyleSheet, Text, Button } from "react-native";

function TestScreen({navigation}) {
    return (
        <View style={styles.container}>
            <Text>Test screen</Text>
            <Button title="profile" onPress={()=>navigation.navigate('Profile')} />
            <Button title="go back" onPress={()=>navigation.goBack()} />
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

export default TestScreen;