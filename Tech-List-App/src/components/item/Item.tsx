import { TouchableOpacity, Pressable, StyleSheet, Text, View } from 'react-native';
import { MyCheckbox } from '../checkbox/MyCheckbox';
import { ListItem } from '../../types/listType';

import { Trash2 } from 'react-native-feather';

export function Item(listItem: ListItem) {

  function removeitem(): void {
    listItem.removeItem(listItem.index);
  }

  return(
    <View style={styles.background}>
      <MyCheckbox
        index={listItem.index}
        title={listItem.title}
        isChecked={listItem.isChecked}
        removeItem={listItem.removeItem}
        checkItem={listItem.checkItem}
      />
      <View style={styles.textBackground}>
        <Text 
        style={[styles.text, listItem.isChecked ? textStrike.text : null]}
        >
          {listItem.title}
          </Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={removeitem}
      >
        <View style={styles.tv}>
          <Trash2
            stroke="#808080"
            width={20} 
            height={20}
          />
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#333333',
    width: 320,
    maxWidth:320,
    height: 70,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
    zIndex: -1,
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'space-evenly',
    borderWidth: 1,
    borderColor: '#444444',
  },
  text: {
    color: '#D9D9D9',
    fontSize: 15,
    maxWidth: 200,
    overflow: 'hidden',
    textAlign: 'center',
  },
  button: {
    width: 30,
    height: 30,
    backgroundColor: '#00000000',
    borderRadius: 10,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  tv: {
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBackground: {
    width: 200,
    maxWidth: 200,
    paddingHorizontal: 10,
  }
})

const textStrike = StyleSheet.create({
  text: {
    textDecorationLine: 'line-through',
    color: '#808080',
    fontSize: 15,
    maxWidth: 200,
    overflow: 'hidden',
    textAlign: 'center',
  }
});