import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { Colors } from "@/constants/Colors";

const TopicDetailScreen = ({ route }) => {
  const { id } = route.params;
  const [topic, setTopic] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTopic = async () => {
      try {
        // const response = await fetch(`http://10.0.2.2:8000/api/topic/${id}/`); local
        const response = await fetch(`https://pe-iv.vercel.app/api/topic/${id}/`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setTopic(data);
      } catch (error) {
        setError(`Error fetching topic: ${error}`);
      } finally {
        setLoading(false);
      }
    };

    fetchTopic();
  }, [id]);

  if (loading) {
    return <ActivityIndicator size="large" color={Colors.dark.tint} />;
  }

  if (error) {
    return <Text style={{ color: Colors.dark.secondaryText }}>{error}</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{topic.title}</Text>
      <Text style={styles.content}>{topic.content}</Text>
      <Text style={styles.author}>Por {topic.author}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.dark.background,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.dark.primaryText,
  },
  content: {
    fontSize: 16,
    color: Colors.dark.secondaryText,
    marginVertical: 10,
  },
  author: {
    fontSize: 14,
    color: Colors.dark.secondaryText,
  },
});

export default TopicDetailScreen;
