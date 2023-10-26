import { Text, TouchableOpacity, View } from 'react-native';
import { ListItem } from '../../types/listType';

import { Square, CheckSquare } from 'react-native-feather';

export function MyCheckbox(ListItem: ListItem) {

  function handleCheckPress(): void {
    ListItem.checkItem(ListItem.index);
  }

  return (
    <TouchableOpacity onPress={handleCheckPress}>
      <View>
        {ListItem.isChecked ? (
          <CheckSquare
            stroke="#387065"
            width={20}
            height={20}
          />
        ) : (
          <Square
            stroke="#32cf98"
            width={20} 
            height={20}
          />
        )}
      </View>
    </TouchableOpacity>
  );
}