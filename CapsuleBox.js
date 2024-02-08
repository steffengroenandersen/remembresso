import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

const CapsuleBox = ({ imageSource }, name) => {
  return (
    <View style={styles.capsule}>
      <View style={styles.capsuleImage}>
        <Image source={imageSource} style={styles.image} />
      </View>

      <View style={styles.capsuleName}>
        <Text style={styles.name}>{name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  capsule: {
    width: "100%",
    aspectRatio: 1,
    backgroundColor: "white",
    borderRadious: 10,
    borderWidth: 1,
    borderColor: "lightgray",
    overflow: "hidden",
  },
  capsuleImage: {
    flex: 8,
  },
  capsuleName: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    fontSize: 16,
    fontWEight: "bold",
    textAlign: "center",
  },
});

export default CapsuleBox;
