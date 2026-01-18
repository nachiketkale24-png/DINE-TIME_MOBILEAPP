import {view,text} from 'react-native';
import React from 'react'
import { Tabs } from 'expo-router'
import { Colors } from '../../assets/css/Colours';
import Icnicons from 'react-native-vector-icons/Ionicons';

const TabLayout = () => {
  return (
    <Tabs screenOptions={{ headerShown: true, tabBarActiveTintColor: Colors.PRIMARY,
    tabBarInactiveTintColor: Colors.dark.text,
    tabBarStyle:{
        backgroundColor:Colors.SECONDARY,
        paddingBottom:14,
        height:75,
    },
    tabBarLabelStyle:{ fontSize:12, fontWeight:'bold'},
     }}
     >
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <Icnicons name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen name="history" options={{ title: 'History'}} />
      <Tabs.Screen name="profile" options={{ title: 'Profile' }} />
    </Tabs>
  )
}

export default TabLayout;