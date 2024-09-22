import { StyleSheet, Text, View, Image, SafeAreaView } from "react-native";


export function Planeta({ planeta }) {
  const formatNum = (value) => value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " km²";

  return (
    <SafeAreaView>
      <View style={styles.planetaCard}>
        <Text style={styles.nomePlaneta}>{planeta.nome}</Text>

        <Image style={styles.imagePlaneta} source={planeta.img} />

        <View style={styles.formatacao}>
          <Text style={styles.informacao}>Velocidade orbital média:</Text>
          <Text style={styles.valor}>{planeta.velocidadeOrbitalMediaKmS} km/s</Text>
        </View>

        <View style={styles.formatacao}>
          <Text style={styles.informacao}>Satélites:</Text>
          <Text style={styles.valor}>{planeta.quantidadeSatelites}</Text>
        </View>

        <View style={styles.formatacao}>
          <Text style={styles.informacao}>Área de superfície:</Text>
          <Text style={styles.valor}>{formatNum(planeta.areaSuperficieKm2)}</Text>
        </View>

        <View style={styles.formatacao}>
          <Text style={styles.informacao}>Período de rotação:</Text>
          <Text style={styles.valor}>{planeta.periodoRotacaoDias} d</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  nomePlaneta: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
  planetaCard: {
    alignItems: "center",
    margin: 15,
    padding: 10,
    backgroundColor: "#000000",
    borderRadius: 30,
  },
  imagePlaneta: {
    width: '100%',
    height: 320
  },
  valor: {
    color: '#ccc',
    fontSize: 14
  },
  informacao: {
    color: '#fff',
    fontWeight: "bold"
  },
  formatacao: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "80%",
    margin: 10,
    padding: 5
  },

})