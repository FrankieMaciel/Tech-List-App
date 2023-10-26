import { Pressable, ScrollView, Text, TextInput, View } from 'react-native';
import { styles } from './styles';
import { useState } from 'react';

import { ListItem } from '../../types/listType';
import { Item } from '../../components/item/Item';

export function ListPage() 
{  
  const [list, setList] = useState<Array<ListItem>>([]);
  const [usertextInput, setUserTextInput] = useState('');
  const [numList, setNumList] = useState(0);
  const [markeditens, setMarkeditens] = useState(0);

  const borderBottomStyle = {
    borderBottomWidth: numList > 0 ? 0 : 1,
  };

  const deleteItem = (index: number): void => {
    let newList = list;
    if (index < 0 || index > newList.length) return;
    // Caso o item esteja marcado como concluido, 
    // o numero de concluidos será atualizado
    if (newList[index].isChecked) setMarkeditens(markeditens - 1)
    newList.splice(index, 1);
    setList(newList);
    setNumList(numList - 1);
  }

  const markCheckItem = (index: number): void => {
    let newList = list;
    if (index < 0 || index > newList.length) return;
    newList[index].isChecked = !newList[index].isChecked;
    setList(newList)
    if (newList[index].isChecked) {
      setMarkeditens(markeditens + 1)
    } else {
      setMarkeditens(markeditens - 1)
    }
  }

  let addItem = () => {
    let newItem: ListItem = {
      index: list.length,
      title: usertextInput,
      isChecked: false,
      removeItem: deleteItem,
      checkItem: markCheckItem
    };
    setList((prevList) => [...prevList, newItem]);
    setNumList(numList + 1);
    setUserTextInput('');
  }

  return (
    <>
      <View style={styles.TitleBackground}>
        <Text style={styles.TitleText}>Minhas tecnologias</Text>
        <View style={styles.InputBackground}>
          <TextInput
          value={usertextInput}
          placeholder="Adicione uma nova tecnologia"
          placeholderTextColor="#808080"
          style={styles.input}
          onChangeText={setUserTextInput}
          />
          <Pressable onPress={addItem} style={styles.button}>
            <Text style={styles.text}>+</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.BodyBackground}>
        <View style={styles.techBackground}>
          <View style={[styles.infoBackground, borderBottomStyle]}>
            <View style={styles.infoLAdo}>
              <Text style={styles.infoText}>Criadas</Text>
              <View style={styles.numbers}>
                <Text style={styles.text}>{numList}</Text>
              </View>
            </View>
            <View style={styles.infoLAdo}>
              <Text style={styles.infoText2}>Concluídas</Text>
              <View style={styles.numbers}>
                <Text style={styles.text}>{markeditens}</Text>
              </View>
            </View>
          </View>
          <ScrollView contentContainerStyle={styles.list}>
            {list.map((item, index) => (
              <Item 
                index={index}
                title={item.title} 
                isChecked={item.isChecked}
                removeItem={deleteItem}
                checkItem={markCheckItem}
              />
            ))}
          </ScrollView>
        </View>
      </View>
    </>
  );
}