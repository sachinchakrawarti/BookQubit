import { Drawer } from "expo-router/drawer";
import DrawerMenu from "@/src/layout/navbar/DrawerMenu";

export default function DrawerLayout() {
  return (
    <Drawer
      screenOptions={{ headerShown: false }}
      drawerContent={(props) => <DrawerMenu {...props} />}
    />
  );
}
