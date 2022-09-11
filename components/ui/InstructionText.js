import { StyleSheet, Text } from "react-native";

function InstructionText({ children, styleprops }) {
  return <Text style={[styles.instructionText, styleprops]}>{children}</Text>;
}

export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    fontFamily: "open-sans",
    color: "white",
    fontSize: 24,
  },
});
