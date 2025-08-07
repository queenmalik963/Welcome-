import React from 'react';
import { View, Text } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Your Profile Info</Text>
    </View>
  );
}
import React from "react";
import { View, Text } from "react-native";
import { auth } from "./firebaseConfig";

export default function ProfileScreen() {
  return (
    <View style={{ padding: 20 }}>
      <Text>User: {auth.currentUser?.email}</Text>
    </View>
  );
}
