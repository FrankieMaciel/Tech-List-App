import React, { Component } from 'react';
import { View } from 'react-native';
import * as Progress from 'react-native-progress';
import { Text } from 'react-native';

interface ProgressBarProps {
  progress: number;
  color: string;
}

const ProgressBar = ( props: ProgressBarProps ) => {

  return (
    <View>
      <Progress.Bar
        progress={props.progress}
        width={320}
        height={10}
        borderWidth={0}
        borderColor="#00000000"
        color={props.color}
        style={{
          backgroundColor: '#0D0D0D',
          borderRadius: 2,
        }}
      />
    </View>
  );
};

export default ProgressBar;