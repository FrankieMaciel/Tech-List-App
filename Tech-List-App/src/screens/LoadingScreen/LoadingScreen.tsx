import { StyleSheet, Text, View } from 'react-native';

export function LoadingScreen() {
  return (
    <View style={styles.TitleBackground}>
      <Text>
        Loading...
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  TitleBackground: {
    flex: 1,
    backgroundColor: '#0D0D0D',
    alignItems: 'center',
    justifyContent: 'center',
  },
});