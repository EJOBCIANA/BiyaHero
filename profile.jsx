import { useState } from "react";
import { View, Text, StyleSheet, Alert, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";

export default function ProfilePage() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const router = useRouter();

  const handleToggleNotifications = () => {
    setNotificationsEnabled(!notificationsEnabled);
    Alert.alert(
      "Notifications",
      notificationsEnabled ? "Notifications Disabled" : "Notifications Enabled"
    );
  };

  const handleSignOut = () => {
    Alert.alert("Signed Out", "You have been signed out.");
  };

  return (
    <View style={styles.container}>
      {/* Profile Section */}
      <View style={styles.profileSection}>
        <View style={styles.avatar}>
          <Image
            source={{ uri: "https://via.placeholder.com/100" }}
            style={styles.avatarImage}
          />
        </View>
        <Text style={styles.name}>Biya Hero</Text>
        <Text style={styles.email}>@biyahero.gmail.com</Text>
      </View>

      {/* Divider */}
      <View style={styles.divider} />

      {/* Settings Options */}
      <View style={styles.optionsContainer}>
        <TouchableOpacity style={styles.optionButton} onPress={handleToggleNotifications}>
          <Text style={styles.optionText}>
            {notificationsEnabled ? "Disable Notifications" : "Enable Notifications"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.logoutButton} onPress={handleSignOut}>
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 20 },
  profileSection: { alignItems: "center", marginTop: 40 },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#eee",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
  avatarImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: { fontSize: 20, fontWeight: "bold", marginBottom: 5 },
  email: { fontSize: 14, color: "gray" },
  divider: {
    height: 1,
    backgroundColor: "#ccc",
    marginVertical: 20,
    marginHorizontal: 30,
  },
  optionsContainer: {
    marginTop: 10,
    gap: 15,
  },
  optionButton: {
    backgroundColor: "#e0e0e0",
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  optionText: {
    fontSize: 16,
    fontWeight: "500",
  },
  logoutButton: {
    backgroundColor: "#e0e0e0",
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  logoutText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },
});
