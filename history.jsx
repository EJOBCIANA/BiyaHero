import { View, Text, Button, StyleSheet, ScrollView, Image, TouchableOpacity, FlatList } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";

export default function HistoryPage() {
  const router = useRouter();
  
  const [history, setHistory] = useState([
    {
      id: "1",
      name: "Alangilan",
      time: "10:53 am",
      date: "03/12/2025",
      duration: "30 min",
      distance: "4 km",
      price: "₱25",
      image: "https://via.placeholder.com/300x150",
    },
    {
      id: "2",
      name: "Kumintang Ibaba",
      time: "8:00 am",
      date: "03/05/2025",
      duration: "25 min",
      distance: "9 km",
      price: "₱26",
      image: "https://via.placeholder.com/300x150",
    },
  ]);

  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (ride) => {
    const alreadyFavorite = favorites.some(fav => fav.id === ride.id);
    if (!alreadyFavorite) {
      setFavorites([...favorites, ride]);
    }
  };

  const renderFavoriteItem = ({ item }) => (
    <View style={styles.favoriteCard}>
      <Image source={{ uri: item.image }} style={styles.favoriteImage} />
      <View style={styles.routeInfo}>
        <Text style={styles.routeName}>{item.name}</Text>
        <Text>{item.time} {item.date}</Text>
      </View>
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Favorites Section */}
      <View style={styles.sectionHeader}>
        <Text style={styles.title}>Favorites</Text>
        <Text style={styles.reorderText}>Re-order</Text>
      </View>

      {favorites.length === 0 ? (
        <Text style={styles.emptyText}>No favorites yet.</Text>
      ) : (
        <FlatList
          data={favorites}
          keyExtractor={(item) => item.id}
          renderItem={renderFavoriteItem}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ marginBottom: 20 }}
        />
      )}

      {/* Ride History Section */}
      <View style={styles.sectionHeader}>
        <Text style={styles.title}>Ride History</Text>
        <Text style={styles.filterText}>Filter</Text>
      </View>

      {history.map((ride) => (
        <View key={ride.id} style={styles.card}>
          <Image source={{ uri: ride.image }} style={styles.image} resizeMode="cover" />
          <View style={styles.content}>
            <View style={styles.row}>
              <Text style={styles.routeName}>{ride.name}</Text>
              <TouchableOpacity onPress={() => addToFavorites(ride)}>
                <Text style={styles.favoriteIcon}>⭐</Text>
              </TouchableOpacity>
            </View>
            <Text>{ride.time} {ride.date}</Text>
            <View style={styles.detailsRow}>
              <Text>{ride.duration}</Text>
              <Text>{ride.distance}</Text>
              <Text>{ride.price}</Text>
            </View>
            <Button title="Re-route" onPress={() => router.push("/route")} />
          </View>
        </View>
      ))}

      <Button title="Back to Home" onPress={() => router.push("/")} color="gray" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 50,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  reorderText: {
    color: "gray",
    fontSize: 16,
  },
  filterText: {
    color: "gray",
    fontSize: 16,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  favoriteCard: {
    width: 200,
    marginRight: 10,
    borderWidth: 1,
    borderRadius: 8,
    overflow: "hidden",
  },
  favoriteImage: {
    width: "100%",
    height: 100,
  },
  routeInfo: {
    padding: 10,
  },
  emptyText: {
    textAlign: "center",
    color: "gray",
    marginBottom: 20,
  },
  card: {
    marginBottom: 20,
    borderWidth: 1,
    borderRadius: 10,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 150,
  },
  content: {
    padding: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  routeName: {
    fontWeight: "bold",
    fontSize: 18,
  },
  favoriteIcon: {
    fontSize: 22,
    color: "#FFD700", // yellow
  },
  detailsRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 5,
    marginBottom: 10,
  },
});
