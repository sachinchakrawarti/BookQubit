import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { DrawerContentComponentProps } from "@react-navigation/drawer";
import { theme } from "@/src/constants/theme";

const NAV_ITEMS = [
  "Home",
  "Books",
  "Comics",
  "Collections",
  "Category",
  "Genre",
  "Authors",
  "Publications",
  "AI Tools",
  "About",
];

export default function DrawerMenu({
  navigation,
}: DrawerContentComponentProps) {
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: theme.colors.background,
        padding: theme.spacing.md,
      }}
    >
      {/* Search */}
      <TextInput
        placeholder="Search books, authors..."
        placeholderTextColor={theme.colors.mutedText}
        style={{
          borderWidth: 1,
          borderColor: theme.colors.border,
          borderRadius: theme.radius.md,
          padding: theme.spacing.sm,
          fontSize: theme.fontSize.md,
          marginBottom: theme.spacing.lg,
        }}
      />

      {/* Sign Up */}
      <TouchableOpacity
        style={{
          backgroundColor: theme.colors.primary,
          padding: theme.spacing.md,
          borderRadius: theme.radius.md,
          marginBottom: theme.spacing.lg,
        }}
      >
        <Text
          style={{
            color: "#fff",
            textAlign: "center",
            fontSize: theme.fontSize.md,
            fontWeight: "600",
          }}
        >
          Sign Up
        </Text>
      </TouchableOpacity>

      {/* Nav Items */}
      {NAV_ITEMS.map((item) => (
        <TouchableOpacity
          key={item}
          onPress={() => {
            navigation.closeDrawer();
            navigation.navigate(item.replace(" ", ""));
          }}
          style={{
            paddingVertical: theme.spacing.sm,
          }}
        >
          <Text
            style={{
              fontSize: theme.fontSize.md,
              color: theme.colors.text,
            }}
          >
            {item}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}
