import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text} from "react-native";

export default function Settings() {
    return (
        <View style={styles.conatiner}>
            <Text>Hello Settings!!!</Text>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    conatiner: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});