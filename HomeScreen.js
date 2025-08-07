import React from 'react';
import { View, Text, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to Rave Clone</Text>
      <Button title="Join Room" onPress={() => navigation.navigate('Room')} />
      <Button title="Profile" onPress={() => navigation.navigate('Profile')} />
    </View>
  );
}
import React from "react";
import { View, Button } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ padding: 20 }}>
      <Button title="Profile" onPress={() => navigation.navigate("Profile")} />
      <Button title="Video Room" onPress={() => navigation.navigate("Video")} />
      <Button title="Chat" onPress={() => navigation.navigate("Chat")} />
    </View>
  );
}
