import React, { Key, useEffect, useState } from "react"; 
import { StyleSheet, ScrollView, Text, ActivityIndicator, TouchableOpacity } from "react-native";
import TopicCard from "../components/topicCard";
import { Colors } from "@/constants/Colors";
import { useNavigation } from '@react-navigation/native';

interface Topic {
  id: Key,
  title: string;
  content: string;
  date_posted: string;
  author: string;
}

const TopicsList: React.FC = () => {
  const navigation = useNavigation();
  const [topics, setTopics] = useState<Topic[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        // const response = await fetch("http://10.0.2.2:8000/api/topic/"); local
        const response = await fetch("https://pe-iv.vercel.app/api/topic/");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data: Topic[] = await response.json();
        setTopics(data);
      } catch (error) {
        setError(`Error fetching topics: ${error}`);
      } finally {
        setLoading(false);
      }
    };

    fetchTopics();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color={Colors.dark.tint} />;
  }

  if (error) {
    return <Text style={{ color: Colors.dark.secondaryText }}>{error}</Text>;
  }

  return (
    <ScrollView style={styles.container}>
      {topics.map((topic) => (
        <TouchableOpacity
          key={topic.id}
          onPress={() => navigation.navigate('TopicDetail', { id: topic.id })}
        >
          <TopicCard
            title={topic.title}
            author={`Por ${topic.author}`}
            imageUrl="https://reactjs.org/logo-og.png"
          />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.dark.background,
  },
});

export default TopicsList;
