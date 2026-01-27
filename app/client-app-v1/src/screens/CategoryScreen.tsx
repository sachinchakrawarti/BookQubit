import { View, Text } from "react-native";
import Navbar from "@/src/layout/navbar/Navbar";
import { theme } from "@/src/constants/theme";

export default function CategoryScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.surface }}>
      <Navbar title="Category" />

      <View style={{ padding: theme.spacing.md }}>
        <Text>Browse by Category</Text>
      </View>
    </View>
  );
}
