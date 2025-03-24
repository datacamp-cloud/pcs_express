import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style = {styles.text}>
      <Text>BIENVENUE !</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text : {
    flex : 1,
    color : "green",
  }
})

