import { View, Text } from "react-native";
import Navbar from "@/src/layout/navbar/Navbar";
import { theme } from "@/src/constants/theme";

export default function AuthorsScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.surface }}>
      <Navbar title="Authors" />

      <View style={{ padding: theme.spacing.md }}>
        <Text>Authors Directory</Text>
      </View>
    </View>
  );
}
