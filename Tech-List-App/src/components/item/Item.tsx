import { Pressable, StyleSheet, Text, View } from 'react-native';
import { MyCheckbox } from '../checkbox/MyCheckbox';
import { ListItem } from '../../types/listType';

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
      <Text style={styles.text}>{listItem.title}</Text>
      <Pressable 
        style={styles.button} 
        onPress={removeitem}
      >
        <View style={styles.tv}>
          <Text style={styles.text}>X</Text>
        </View>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#333333',
    width: 320,
    height: 70,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
    zIndex: -1,
    flexDirection: 'row',
    gap: 50,
    justifyContent: 'space-evenly',
    borderWidth: 1,
    borderColor: '#444444',
  },
  text: {
    color: '#D9D9D9',
    fontSize: 15,
  },
  button: {
    width: 30,
    height: 30,
    backgroundColor: '#E25858',
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
  }
})