import { View, Text } from "react-native";
import Navbar from "@/src/layout/navbar/Navbar";
import { theme } from "@/src/constants/theme";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.surface }}>
      <Navbar title="Home" />

      <View style={{ padding: theme.spacing.md }}>
        <Text style={{ fontSize: theme.fontSize.lg, color: theme.colors.text }}>
          Welcome to BookQubit
        </Text>
      </View>
    </View>
  );
}
