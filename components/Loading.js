import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
const Loading = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Listing");
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/loading.jpeg")}
        resizeMode="cover"
        style={styles.image}
      ></ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
});

export default Loading;
