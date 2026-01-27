import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { theme } from "@/src/constants/theme";

export default function Navbar({ title }: { title: string }) {
  const navigation = useNavigation<any>();

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: theme.spacing.md,
        paddingVertical: theme.spacing.sm,
        backgroundColor: theme.colors.background,
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.border,
      }}
    >
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Ionicons
          name="menu"
          size={26}
          color={theme.colors.text}
        />
      </TouchableOpacity>

      <Text
        style={{
          marginLeft: theme.spacing.md,
          fontSize: theme.fontSize.lg,
          fontWeight: "600",
          color: theme.colors.text,
        }}
      >
        {title}
      </Text>
    </View>
  );
}
