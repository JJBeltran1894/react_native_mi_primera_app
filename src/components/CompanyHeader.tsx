import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageSourcePropType,
} from "react-native";

interface CompanyHeaderProps {
  nombreEmpresa: string;
  slogan: string;
  logotipo: ImageSourcePropType;
}

export default function CompanyHeader(props: CompanyHeaderProps) {
  const { nombreEmpresa, slogan, logotipo } = props;
  return (
    <View style={styles.header}>
      <Image source={logotipo} style={styles.logo} />
      <Text style={styles.nombreEmpresa}>{nombreEmpresa}</Text>
      <Text style={styles.slogan}>{slogan}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  logo: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 6,
    resizeMode: "cover",
  },
  nombreEmpresa: {
    fontSize: 35,
    fontWeight: "bold",
    color: "#F07F2D", // Warm orange from logo
    marginBottom: 2,
  },
  slogan: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#1A253A", // Dark navy/grey from logo
    marginTop: 2,
  },
});
