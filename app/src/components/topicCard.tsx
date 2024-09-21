import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Colors } from '@/constants/Colors';

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
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topicCard: {
    flexDirection: 'row',
    backgroundColor: Colors.dark.secondaryBackground,
    padding: 10,
    margin: 7,
    borderRadius: 5,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    color: Colors.dark.primaryText,
    fontWeight: 'bold',
    marginBottom: 5,
    flexShrink: 1,
  },
  description: {
    color: Colors.dark.secondaryText,
    flexShrink: 1,
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 10,
    borderRadius: 5,
  },
});

export default TopicCard;