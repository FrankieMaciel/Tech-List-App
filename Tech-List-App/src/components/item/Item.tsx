import { Pressable, StyleSheet, Text, View } from 'react-native';
import { MyCheckbox } from '../checkbox/MyCheckbox';
import { ListItem } from '../../types/listType';
import { Dispatch, SetStateAction } from 'react';

type Dispatcher<S> = Dispatch<SetStateAction<S>>;

export function Item(
  title: String, 
  isChecked: boolean,
  list: ListItem[], 
  setList: Dispatcher<ListItem[]>, 
  index: number
  ) {

  let toggleItem = (id: number, newValue: boolean) => {
    const updatedList = list.map((item) => {
      if (item.id === id) {
        return { ...item, isChecked: newValue };
      }
      return item;
    });
  
    setList(updatedList);
  }

  return(
    <View style={styles.background}>
      <MyCheckbox/>
      <Text style={styles.text}>{title}</Text>
      <Pressable style={styles.button}>
            <Text style={styles.text}>Excloi</Text>
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
  },
  text: {
    color: '#D9D9D9',
    fontSize: 15,
  },
  button: {

  }
})