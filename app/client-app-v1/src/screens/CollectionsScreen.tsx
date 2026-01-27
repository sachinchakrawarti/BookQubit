import { View, Text } from "react-native";
import Navbar from "@/src/layout/navbar/Navbar";
import { theme } from "@/src/constants/theme";

export default function CollectionsScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.surface }}>
      <Navbar title="Collections" />

      <View style={{ padding: theme.spacing.md }}>
        <Text>Curated Collections</Text>
      </View>
    </View>
  );
}
