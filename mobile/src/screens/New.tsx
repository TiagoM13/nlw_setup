import React from 'react';
import { ScrollView, View } from 'react-native';
import { BackButton } from '../components/BackButton';

export const New = () => {
  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <ScrollView showsVerticalScrollIndicator={false}>

        <BackButton />

      </ScrollView>
    </View>
  );
}
