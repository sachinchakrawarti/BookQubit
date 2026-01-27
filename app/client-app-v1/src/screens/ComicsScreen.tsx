import { View, Text } from "react-native";
import Navbar from "@/src/layout/navbar/Navbar";
import { theme } from "@/src/constants/theme";

export default function ComicsScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.surface }}>
      <Navbar title="Comics" />

      <View style={{ padding: theme.spacing.md }}>
        <Text>Comics Collection</Text>
      </View>
    </View>
  );
}
