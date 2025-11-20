import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";

export default function HomeScreen() {
  const stories = [
    require("../../assets/images/story1.png"),
    require("../../assets/images/story2.png"),
    require("../../assets/images/story3.png"),
    require("../../assets/images/story4.png"),
  ];

  const products = [
    require("../../assets/images/3.png"),
    require("../../assets/images/4.png"),
    require("../../assets/images/5.png"),
    require("../../assets/images/7.png"),
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={require("../../assets/images/story1.png")}
          style={styles.profile}
        />
        <View style={styles.headerIcons}>
          <TouchableOpacity style={styles.iconBox}>
            <Text>🔔</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconBox}>
            <Text>🛒</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconBox}>
            <Text>⚙️</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Greeting */}
      <Text style={styles.greeting}>Hello, Romina!</Text>

      {/* Orders Section */}
      <View style={styles.ordersRow}>
        {["To Pay", "To Receive", "To Review"].map((item, i) => (
          <TouchableOpacity key={i} style={styles.orderTab}>
            <Text style={{ color: "#1E63EE", fontWeight: "600" }}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Stories */}
      <Text style={styles.sectionTitle}>Stories</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {stories.map((src, i) => (
          <View key={i} style={styles.storyBox}>
            <Image source={src} style={styles.storyImg} />
            {i === 0 && <Text style={styles.liveBadge}>Live</Text>}
          </View>
        ))}
      </ScrollView>

      {/* New Items */}
      <View style={styles.newItemsRow}>
        <Text style={styles.sectionTitle}>New Items</Text>
        <Text style={styles.seeAll}>See All →</Text>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {products.map((src, i) => (
          <View key={i} style={styles.productCard}>
            <Image source={src} style={styles.productImg} />
            <Text numberOfLines={2} style={styles.productDesc}>
              Lorem ipsum dolor sit amet consectetur.
            </Text>
            <Text style={styles.price}>${(i + 1) * 10 + 7}.00</Text>
          </View>
        ))}
      </ScrollView>

      {/* Flash Sale */}
      <View style={styles.flashHeader}>
        <Text style={styles.sectionTitle}>Flash Sale</Text>
        <View style={styles.timer}>
          <Text>00 : 36 : 58</Text>
        </View>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {products.map((src, i) => (
          <View key={i} style={styles.flashCard}>
            <Image source={src} style={styles.flashImg} />
            <View style={styles.discountBox}>
              <Text style={styles.discountText}>-20%</Text>
            </View>
          </View>
        ))}
      </ScrollView>

      <View style={{ height: 60 }}></View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: "#fff", paddingHorizontal: 20 },
  header: { flexDirection: "row", justifyContent: "space-between", marginTop: 40 },
  profile: { width: 50, height: 50, borderRadius: 25 },
  headerIcons: { flexDirection: "row", gap: 10 },
  iconBox: {
    width: 35,
    height: 35,
    borderRadius: 10,
    backgroundColor: "#f1f3f5",
    justifyContent: "center",
    alignItems: "center",
  },
  greeting: { fontSize: 28, fontWeight: "700", marginVertical: 20 },
  ordersRow: { flexDirection: "row", gap: 10 },
  orderTab: {
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderRadius: 20,
    backgroundColor: "#e8f0ff",
  },
  sectionTitle: { fontSize: 22, fontWeight: "700", marginVertical: 20 },
  storyBox: {
    marginRight: 15,
    position: "relative",
    width: 80,
    height: 110,
  },
  storyImg: { width: "100%", height: "100%", borderRadius: 12 },
  liveBadge: {
    position: "absolute",
    top: 5,
    left: 5,
    backgroundColor: "green",
    color: "white",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 5,
    fontSize: 10,
  },
  newItemsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  seeAll: { color: "#1E63EE", fontWeight: "700" },
  productCard: {
    width: 150,
    marginRight: 20,
  },
  productImg: {
    width: "100%",
    height: 150,
    borderRadius: 12,
  },
  productDesc: { marginTop: 8, fontSize: 14, color: "#444" },
  price: { marginTop: 5, fontSize: 18, fontWeight: "700" },

  flashHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
    alignItems: "center",
  },
  timer: {
    backgroundColor: "#eee",
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  flashCard: {
    width: 150,
    height: 150,
    borderRadius: 12,
    marginRight: 20,
    overflow: "hidden",
    position: "relative",
  },
  flashImg: { width: "100%", height: "100%" },
  discountBox: {
    position: "absolute",
    top: 8,
    left: 8,
    backgroundColor: "red",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
  },
  discountText: { color: "white", fontWeight: "700" },
});
