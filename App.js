import { StyleSheet, Text, View, StatusBar, SafeAreaView, Image, ScrollView } from "react-native";

import {planetas} from "./planetas";
import {Planeta} from "./planetacard";

export default function App() {

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar style="auto" />

      <View style={styles.header}>
        <Text style = {styles.titulo}>Sistema Solar</Text>
      </View>

      <ScrollView>
        {
          planetas.map((planeta) => (
            <Planeta planeta={planeta}></Planeta>
          ))
        }
      </ScrollView>
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#070707dd",
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: 15,
    marginTop: 30,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
});