import { Pressable, ScrollView, Text, TextInput, View } from 'react-native';
import { LoadingScreen } from '../LoadingScreen/LoadingScreen';

import { styles } from './styles';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { ListItem } from '../../types/listType';

import { Item } from '../../components/item/Item';

type Dispatcher<S> = Dispatch<SetStateAction<S>>;

interface itemProps {
  title: String, 
  isChecked: boolean,
  list: ListItem[], 
  setList: Dispatcher<ListItem[]>, 
  index: number
}

export function ListPage() {

  let addItem = () => {

    let newItem: ListItem = {
      title: usertextInput,
      isChecked: false,
    };
    
    setList((prevList) => [...prevList, newItem]);
    setNumList(numList + 1);
  }

  const [list, setList] = useState<Array<ListItem>>([]);
  const [usertextInput, setUserTextInput] = useState('');
  const [numList, setNumList] = useState(0);

  const borderBottomStyle = {
    borderBottomWidth: numList > 0 ? 0 : 1,
  };

  useEffect(() => {



  }, [list])


  return (
    <>
      <View style={styles.TitleBackground}>
        <Text style={styles.TitleText}>Minhas tecnologias</Text>
        <View style={styles.InputBackground}>
          <TextInput
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
                <Text style={styles.text}>0</Text>
              </View>
            </View>
          </View>
          <ScrollView contentContainerStyle={styles.list}>
            {list.map((item, index) => (
              <Item props={itemProps}/>
            ))}
          </ScrollView>
        </View>
      </View>
    </>
  );
}