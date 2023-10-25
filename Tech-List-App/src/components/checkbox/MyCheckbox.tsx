import { Text, TouchableOpacity, View } from 'react-native';

export function MyCheckbox() {
  return (
    <TouchableOpacity>
      <View>
        {true ? (
          <Text>✔️</Text>
        ) : (
          <Text>◻️</Text>
        )}
      </View>
    </TouchableOpacity>
  );
}