import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { theme } from "@/src/constants/theme";

import HomeScreen from "@/src/screens/HomeScreen";
import BooksScreen from "@/src/screens/BooksScreen";
import ProfileScreen from "@/src/screens/ProfileScreen";

const Tab = createBottomTabNavigator();

export default function BottomNav() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#0ea5e9", // BookQubit sky blue
        tabBarInactiveTintColor: "#94a3b8", // Gray for inactive
        tabBarStyle: {
          borderTopColor: "#e2e8f0",
          backgroundColor: "#ffffff",
          height: 60,
          paddingBottom: 8,
          paddingTop: 8,
          elevation: 8,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.05,
          shadowRadius: 4,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
          marginTop: 2,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons 
              name={focused ? "home" : "home-outline"} 
              size={size} 
              color={color} 
            />
          ),
          tabBarLabel: "Home",
        }}
      />

      <Tab.Screen
        name="Books"
        component={BooksScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <FontAwesome5 
              name={focused ? "book-open" : "book"} 
              size={size - 2} 
              color={color} 
            />
          ),
          tabBarLabel: "Books",
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons 
              name={focused ? "person-circle" : "person-circle-outline"} 
              size={size + 4} 
              color={color} 
            />
          ),
          tabBarLabel: "Profile",
        }}
      />
    </Tab.Navigator>
  );
}