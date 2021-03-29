import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/Home/index'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const Tabs = createBottomTabNavigator();

const HomeButtomTabNavigator = () => {
  return (
    <Tabs.Navigator tabBarOptions={{
      tabStyle: {
        backgroundColor: 'black'
      },
      activeTintColor: 'white'
    }}>
      <Tabs.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={24} />
          )
        }}
      />
      <Tabs.Screen
        name="Search"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="search" color={color} size={24} />
          )
        }}
      />
      <Tabs.Screen
        name="Upload"
        component={Home}
        options={{ 
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="add-box" color={color} size={35} />
          ),
          tabBarLabel: () => null
        }}
      />
      <Tabs.Screen
        name="Inbox"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="message-minus-outline" color={color} size={24} />
          )
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account-circle" color={color} size={24} />
          )
        }}
      />
    </Tabs.Navigator>
  )
}

export default HomeButtomTabNavigator
