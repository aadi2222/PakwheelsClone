const App = () => {
    
styles = StyleSheet.create({
    container: {
      padding: 13,
      marginBottom: 10,
    },
    footer: {
      backgroundColor: "#f4f0ec",
      padding: 10,
      flexDirection: "row",
    },
    chatSms: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      borderColor: "#1F75FE",
      borderWidth: 1,
      borderRadius: 5,
      flexDirection: "row",
      padding: 10,
      marginRight: 5,
    },
    call: {
      flex: 2,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#1F75FE",
      borderRadius: 5,
      padding: 10,
    },
    blueText: {
      color: "#1F75FE",
    },
    whiteText: {
      color: "white",
    },
    title: {
      fontSize: 20,
    },
    bold: {
      fontWeight: "bold",
      fontSize: 17,
      paddingTop: 5,
      paddingBottom: 5,
    },
    light: {
      color: "grey",
      fontSize: 17,
    },
    req: {
      flex: 0.5,
      color: "#1F75FE",
      fontWeight: "bold",
      fontSize: 15,
      textAlign: "right",
      textDecorationLine: "underline",
    },
    rowSpace: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    row: {
      flex: 1.2,
      flexDirection: "row",
      marginRight: 10,
    },
    iconContainer: {
      flexDirection: "row",
      justifyContent: "space-around",
      margin: 10,
    },
    iconText: {
      padding: 10,
      justifyContent: "space-between",
      alignItems: "center",
    },
    specsContainer: {
      padding: 10,
    },
    specs: {
      flexDirection: "row",
      justifyContent: "space-between",
      borderTopWidth: 0.5,
      borderTopColor: "lightgrey",
      paddingTop: 15,
      paddingBottom: 15,
    },
    compContainer: {
      paddingBottom: 10,
      paddingTop: 10,
    },
    heading: {
      fontSize: 20,
      fontWeight: "bold",
      color: "#525252",
    },
    para: {
      paddingTop: 10,
      paddingBottom: 10,
      fontSize: 17,
      color: "grey",
    },
    featureContainer: {
      paddingTop: 10,
      paddingBottom: 20,
      flexDirection: "column",
      flex: 1,
      borderBottomWidth: 0.5,
      borderBottomColor: "lightgrey",
    },
    features: {
      flexDirection: "row",
      justifyContent: "space-between",
      flexWrap: "wrap",
    },
    featureRow: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center",
      padding: 10,
      textAlign: "left",
      paddingLeft: 20,
    },
    sellerContainer: {
      borderBottomWidth: 0.5,
      borderBottomColor: "lightgrey",
      flexDirection: "row",
      padding: 10,
      paddingBottom: 20,
      marginBottom: 15,
    },
    sellerRow: {
      paddingLeft: 10,
    },
    sellerIcon: {
      flexDirection: "row",
    },
    scrollContainer: {
      height: 200,
      width: "100%",
      marginBottom: 10,
    },
    similarContainer: {
      display: "flex",
      // width:'50%',
      borderRadius: 10,
      borderColor: "lightgrey",
      borderWidth: 1,
      backgroundColor: "white",
      margin: 10,
      marginBottom: 5,
      paddingBottom: 20,
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
      height: "60%",
      width: "100%",
    },
    content: {
      padding: 10,
    },
    boldText: {
      fontWeight: "bold",
      fontSize: 13,
    },
    lightText: {
      color: "grey",
      fontSize: 12,
    },
    year: {
      flexDirection: "row",
    },
  });

}

  export default App;
