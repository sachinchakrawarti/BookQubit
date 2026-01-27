import { View, Text } from "react-native";
import Navbar from "@/src/layout/navbar/Navbar";
import { theme } from "@/src/constants/theme";

export default function GenreScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.surface }}>
      <Navbar title="Genre" />

      <View style={{ padding: theme.spacing.md }}>
        <Text>Genres List</Text>
      </View>
    </View>
  );
}
