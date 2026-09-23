import { StyleSheet, Text, View, TextInput, FlatList } from "react-native";
import ProfileCard from "./ProfileCard";

const EMPLEADOS = [
  {
    id: "1",
    nombre: "Ana Gomez",
    cargo: "Diseñadora UX",
    fotoUrl:
      "https://img.magnific.com/vector-premium/icono-perfil-avatar-predeterminado-imagen-usuario-redes-sociales-icono-avatar-gris-silueta-perfil-blanco-ilustracion-vectorial_561158-3407.jpg",
  },

  {
    id: "2",
    nombre: "Mario Gomez",
    cargo: "Desarrollador",
    fotoUrl:
      "https://img.magnific.com/vector-premium/icono-perfil-avatar-predeterminado-imagen-usuario-redes-sociales-icono-avatar-gris-silueta-perfil-blanco-ilustracion-vectorial_561158-3407.jpg",
  },

  {
    id: "3",
    nombre: "Andres Rodriguez",
    cargo: "BD Manager",
    fotoUrl:
      "https://img.magnific.com/vector-premium/icono-perfil-avatar-predeterminado-imagen-usuario-redes-sociales-icono-avatar-gris-silueta-perfil-blanco-ilustracion-vectorial_561158-3407.jpg",
  },

  {
    id: "4",
    nombre: "Ana Gomez",
    cargo: "QA",
    fotoUrl:
      "https://img.magnific.com/vector-premium/icono-perfil-avatar-predeterminado-imagen-usuario-redes-sociales-icono-avatar-gris-silueta-perfil-blanco-ilustracion-vectorial_561158-3407.jpg",
  },

  {
    id: "5",
    nombre: "Carolina Sabina",
    cargo: "Desarrollador",
    fotoUrl:
      "https://img.magnific.com/vector-premium/icono-perfil-avatar-predeterminado-imagen-usuario-redes-sociales-icono-avatar-gris-silueta-perfil-blanco-ilustracion-vectorial_561158-3407.jpg",
  },
];

export default function EmployeeList() {
  return (
    <View>
      <Text style={styles.title}>Directorio de Empleados</Text>
      <TextInput
        placeholder="Buscar empleado..."
        placeholderTextColor="#838282"
      />
      <FlatList
        data={EMPLEADOS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <ProfileCard
              nombre={item.nombre}
              cargo={item.cargo}
              imagen={{ uri: item.fotoUrl }}
            />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "800",
    marginBottom: 4,
    marginTop: 8,
    textAlign: "center",
  },
});
