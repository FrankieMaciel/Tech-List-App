import { Text, TouchableOpacity, View } from 'react-native';
import { ListItem } from '../../types/listType';

export function MyCheckbox(ListItem: ListItem) {


  function handleCheckPress(): void {
    ListItem.checkItem(ListItem.index);
  }

  return (
    <TouchableOpacity onPress={handleCheckPress}>
      <View>
        {ListItem.isChecked ? (
          <Text>✔️</Text>
        ) : (
          <Text>◻️</Text>
        )}
      </View>
    </TouchableOpacity>
  );
}