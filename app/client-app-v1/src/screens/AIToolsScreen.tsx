import { View, Text } from "react-native";
import Navbar from "@/src/layout/navbar/Navbar";
import { theme } from "@/src/constants/theme";

export default function AIToolsScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.surface }}>
      <Navbar title="AI Tools" />

      <View style={{ padding: theme.spacing.md }}>
        <Text>AI-powered tools</Text>
      </View>
    </View>
  );
}
