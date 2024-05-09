import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Card = (props) => {
  const navigation = useNavigation();

  const [background, setBackground] = useState("grey");

  const navigateHandler = () => {
    navigation.navigate("Ad", { data: props.data });
  };

  return (
    <TouchableOpacity onPress={navigateHandler}>
      <View style={styles.cardContainer}>
        <Image style={styles.image} source={{ uri: props.data.image }} />
        <View style={styles.content}>
          <View style={styles.titleRow}>
            <Text style={styles.title}> {props.data.title} </Text>
            <View>
              <TouchableOpacity
                onPress={() =>
                  setBackground(background == "grey" ? "maroon" : "grey")
                }
              >
                <MaterialCommunityIcons
                  name="heart"
                  size={25}
                  color={background}
                />
              </TouchableOpacity>
            </View>
          </View>

          <Text style={styles.boldText}> PKR {props.data.price} </Text>
          <Text style={styles.lightText}> {props.data.city} </Text>
          <View style={styles.year}>
            <Text style={styles.lightText}> {props.data.year} </Text>
            <Text style={styles.lightText}> | {props.data.milage} </Text>
            <Text style={styles.lightText}> | {props.data.fuel} </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightgrey",
  },
  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    // marginRight: 10,
  },
  cardContainer: {
    display: "flex",
    padding: 10,
    height: 130,
    borderRadius: 5,
    flexDirection: "row",
    backgroundColor: "white",
    margin: 10,
    marginBottom: 0,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  image: {
    height: "95%",
    width: "35%",
    flex: 1,
    borderRadius: 5,
  },
  content: {
    flex: 2,
    paddingLeft: 10,
    paddingTop: 0,
  },
  title: {
    fontSize: 17,
    flex: 1,
    paddingRight: 2,
  },
  boldText: {
    fontWeight: "bold",
    fontSize: 17,
  },
  lightText: {
    color: "grey",
    fontSize: 17,
  },
  year: {
    flexDirection: "row",
  },
});
