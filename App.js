import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SectionList, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome6";

const songData = [
  {
    icon_name: 'music',
    title: 'Pop Hits',
    color: '#1DB954', // Spotify green color
    data: [
      {
        coverImage: require('./images/Apt.jpg'),
        name: 'Apt.',
        artist: 'Rose & Bruno Mars',
      },
      {
        coverImage: require('./images/IWALY.jpg'),
        name: 'IWALY',
        artist: 'ILAND2',
      },
    ],
  },
  {
    icon_name: 'fire',
    title: 'Trending Now',
    color: '#1DB954',
    data: [
      {
        coverImage: require('./images/Supernova.jpg'),
        name: 'Supernova',
        artist: 'Aespa',
      },
      {
        coverImage: require('./images/ThatsSoTrue.jpg'),
        name: 'Thats So True',
        artist: 'Gracie Abrams',
      },
    ],
  },
];

const Song = ({ item }) => (
    <TouchableOpacity style={styles.cardItem}>
      {/* Load the local image */}
      <Image
          source={item.coverImage}
          style={styles.coverImage}
      />
      <View style={styles.songInfo}>
        <Text style={styles.songName}>{item.name}</Text>
        <Text style={styles.artistName}>{item.artist}</Text>
      </View>
      <Icon name="heart" size={20} color="#B3B3B3" />
    </TouchableOpacity>
);

function App() {
  return (
      <View style={styles.container}>
        <StatusBar style="light" />

        {/* Spotify Header */}
        <View style={styles.headerBar}>
          <Text style={styles.headerTitle}>Spotify</Text>
        </View>

        {/* Song List */}
        <SectionList
            sections={songData}
            keyExtractor={(item, index) => item.name + index}
            renderItem={({ item }) => <Song item={item} />}
            renderSectionHeader={({ section }) => (
                <View style={[styles.sectionHeader, { backgroundColor: section.color }]}>
                  {/* Display the icon next to the section title */}
                  <Icon name={section.icon_name} size={24} color="#FFF" style={styles.sectionIcon} />
                  <Text style={styles.sectionTitle}>{section.title}</Text>
                </View>
            )}
        />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  headerBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#1DB954',
    borderBottomWidth: 1,
    borderBottomColor: '#1A1A1A',
    marginTop:50
  },
  spotifyLogo: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 10,
  },
  sectionIcon: {
    marginRight: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
  },
  cardItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#282828',
    borderRadius: 10,
    marginHorizontal: 10,
  },
  coverImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    resizeMode: 'cover',
    marginRight: 10,
  },
  songInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  songName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
  },
  artistName: {
    fontSize: 14,
    color: '#B3B3B3',
  },
});

export default App;
