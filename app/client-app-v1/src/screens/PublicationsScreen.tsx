import { View, Text } from "react-native";
import Navbar from "@/src/layout/navbar/Navbar";
import { theme } from "@/src/constants/theme";

export default function PublicationsScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.surface }}>
      <Navbar title="Publications" />

      <View style={{ padding: theme.spacing.md }}>
        <Text>Publications</Text>
      </View>
    </View>
  );
}
