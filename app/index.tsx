import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import TopicsList from "@/screens/topicsList";
import TopicDetailScreen from "@/screens/topicDetailScreen";
import LoginScreen from "@/screens/loginScreen";
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function Index() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <NavigationContainer independent={true}>
      {isLoggedIn ? (
        <Stack.Navigator>
          <Stack.Screen name="Home" component={TabNavigator} options={{ headerShown: false }} />
          <Stack.Screen name="TopicDetail" component={TopicDetailScreen} />
        </Stack.Navigator>
      ) : (
        <LoginScreen onLogin={handleLogin} />
      )}
    </NavigationContainer>
  );
}

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: Colors.dark.secondaryBackground,
        },
        tabBarActiveTintColor: Colors.dark.tint,
        tabBarInactiveTintColor: Colors.dark.tabIconDefault,
        tabBarLabelStyle: { display: 'none' },
        headerShown: false,
      }}
    >
      <Tab.Screen 
        name="Topics" 
        component={TopicsList} 
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="home-outline" size={24} color={color} />,
        }} 
      />
      <Tab.Screen 
        name="Search" 
        component={TopicsList}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="search-outline" size={24} color={color} />,
        }} 
      />
      <Tab.Screen 
        name="Add" 
        component={TopicsList}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="add-circle-outline" size={24} color={color} />,
        }} 
      />
      <Tab.Screen 
        name="Trending" 
        component={TopicsList}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="flame-outline" size={24} color={color} />,
        }} 
      />
      <Tab.Screen 
        name="Profile" 
        component={TopicsList}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="person-outline" size={24} color={color} />,
        }} 
      />
    </Tab.Navigator>
  );
};
