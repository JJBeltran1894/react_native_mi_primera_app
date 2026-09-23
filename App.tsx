import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ProfileCard from "./src/components/ProfileCard";
import EmployeeList from "./src/components/EmployeeList";
import CompanyHeader from "./src/components/CompanyHeader";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="light" backgroundColor="#2173F3" />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.appContainer}>
          <View style={styles.headerContainer}>
            <CompanyHeader
              nombreEmpresa="Vitalis"
              slogan="Con cariño te cuidamos"
              logotipo={require("./src/assets/images/logotipo.jpg")}
            />
          </View>
          <View style={styles.listContainer}>
            <EmployeeList />
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flex: 0.3,
    backgroundColor: "#faf6f6",
    alignItems: "center",
    justifyContent: "center",
  },

  listContainer: {
    flex: 0.7,
    backgroundColor: "#ced1db",
    alignItems: "center",
    justifyContent: "center",
  },

  safeArea: {
    flex: 1,
    backgroundColor: "#11214d",
  },

  appContainer: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#ffff",
  },
});
