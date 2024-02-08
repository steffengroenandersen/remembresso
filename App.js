import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import CapsuleBox from "./CapsuleBox";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.topMenu}></View>

      <View style={styles.bodyContainer}>
        <View style={styles.capsulesContainer}>
          <Image source={require("./assets/capsule.jpg")} name="Capsule Name" />
        </View>
      </View>

      <View style={styles.bottomMenu}></View>

      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  topMenu: {
    height: 50,
    backgroundColor: "lightblue",
    justifyContent: "center",
    alignItems: "center",
  },
  bodyContainer: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  bottomMenu: {
    height: 50,
    backgroundColor: "lightblue",
    justifyContent: "center",
    alignItems: "center",
  },
  capsulesContainer: {
    alignItems: "center", // Center the CapsuleBox horizontally
    paddingTop: 20, // Adjust as needed
  },
});
