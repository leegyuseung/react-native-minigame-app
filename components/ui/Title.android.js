import { StyleSheet, Text, Platform } from "react-native";
import Colors from "../../constants/colors";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    // fontWeight: "bold",
    color: Colors.primary800,
    textAlign: "center",
    // Platform API example
    // borderWidth: Platform.OS === "android" ? 2 : 0,
    // borderWidth: Platform.select({ ios: 2, android: 0 }),
    borderWidth: 0,
    borderColor: Colors.primary800,
    padding: 12,
    maxWidth: "80%",
    width: 300,
  },
});
