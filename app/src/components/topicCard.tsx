import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

// Define o tipo das props que o TopicCard receberá
interface TopicCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const TopicCard: React.FC<TopicCardProps> = ({ title, description, imageUrl }) => {
  return (
    <View style={styles.topicCard}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <ScrollView style={styles.descriptionContainer}>
          <Text style={styles.description}>{description}</Text>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topicCard: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
    margin: 10,
    backgroundColor: '#2c2c2c',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    alignItems: 'flex-start',
    maxWidth: '100%',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 5,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#ffffff',
  },
  descriptionContainer: {
    maxHeight: 100,
  },
  description: {
    color: '#cccccc',
  },
});

export default TopicCard;
