import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TopicsList from "@/screens/topicsList";
import LoginScreen from "@/screens/loginScreen";
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';

const Tab = createBottomTabNavigator();

export default function Index() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <NavigationContainer independent={true}>
      {isLoggedIn ? (
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
            name="Home" 
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
      ) : (
        <LoginScreen onLogin={handleLogin} />
      )}
    </NavigationContainer>
  );
}
