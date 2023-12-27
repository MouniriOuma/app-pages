import { View, StyleSheet, Text, Button } from "react-native";

function ProfileScreen({navigation}) {
    return (
        <View style={styles.container}>
            <Text>Profile screen</Text>
            <Button title="test" onPress={()=>navigation.navigate('test')} />
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

export default ProfileScreen;