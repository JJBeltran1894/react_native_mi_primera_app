import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageSourcePropType,
} from "react-native";

interface ProfileCardProps {
  nombre: string;
  cargo: string;
  imagen: ImageSourcePropType;
}

export default function ProfileCard(props: ProfileCardProps) {
  const { nombre, cargo, imagen } = props;
  return (
    <View style={styles.card}>
      <Image
        source={imagen}
        //source={{
        //  uri: "https://cdn.vectorstock.com/i/1000v/05/75/construction-worker-with-helmet-logo-vector-51800575.jpg",
        //}}
        style={styles.profileImage}
      />
      <Text style={styles.title}>{nombre}</Text>
      <Text style={styles.subtitle}>{cargo}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    marginTop: 5,
    marginBottom: 5,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 100,
    marginBottom: 10,
  },
  title: {
    fontSize: 27,
    fontWeight: "800",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: "#F07F2D",
  },
});
