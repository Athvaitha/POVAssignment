import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter, useFocusEffect } from "expo-router";
import { logout, getUserEmail } from "../../utils/auth";
import { useState, useCallback } from "react";

export default function Profile() {
  const router = useRouter();
  const [userEmail, setUserEmail] = useState("");

  useFocusEffect(
    useCallback(() => {
      loadUserEmail();
    }, [])
  );

  const loadUserEmail = async () => {
    const email = await getUserEmail();
    setUserEmail(email || "");
  };

  const handleLogout = async () => {
    await logout();
    router.replace("/login");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile</Text>
      <Text style={styles.email}>{userEmail}</Text>
      <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  text: { fontSize: 24, marginBottom: 10 },
  email: { fontSize: 16, color: "#666", marginBottom: 30 },
  logoutBtn: {
    backgroundColor: "#ff4444",
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 8,
  },
  logoutText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});
