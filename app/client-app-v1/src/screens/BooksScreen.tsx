import { View, Text } from "react-native";
import Navbar from "@/src/layout/navbar/Navbar";
import { theme } from "@/src/constants/theme";

export default function BooksScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.surface }}>
      <Navbar title="Books" />

      <View style={{ padding: theme.spacing.md }}>
        <Text style={{ color: theme.colors.text }}>
          Browse all books
        </Text>
      </View>
    </View>
  );
}
