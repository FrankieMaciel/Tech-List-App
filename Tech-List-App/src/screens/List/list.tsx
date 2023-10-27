import { StyleSheet, TouchableOpacity, Pressable, ScrollView, Text, TextInput, View } from 'react-native';
import { styles, textStyles } from './styles';
import { useState, useCallback } from 'react';

import { ListItem } from '../../types/listType';
import { Item } from '../../components/item/Item';
import { PlusCircle, Clipboard } from 'react-native-feather';

import * as SplashScreen from 'expo-splash-screen';

import { useFonts, Inter_400Regular } from '@expo-google-fonts/inter';
import { Abel_400Regular } from '@expo-google-fonts/abel';
import { LoadingScreen } from '../LoadingScreen/LoadingScreen';

export function ListPage()
{  
  const [list, setList] = useState<Array<ListItem>>([]);
  const [usertextInput, setUserTextInput] = useState('');
  const [isInputOnFocus, setisInputOnFocus] = useState(false);
  const [markeditens, setMarkeditens] = useState(0);
  const [numList, setNumList] = useState(0);

  const [fontsLoaded] = useFonts({
    Abel: Abel_400Regular,
  });

  if (!fontsLoaded) {
    return <LoadingScreen />;
  }

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
    let isEmpty = usertextInput.trim() === "";
    if (isEmpty) return;
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

  function handleInputFocus(): void {
    setisInputOnFocus(true);
  }
  function handleInputBlur(): void {
    setisInputOnFocus(false);
  };

  return (
    <>
      <View style={styles.TitleBackground}>
        <Text style={textStyles.Title}>Minhas tecnologias</Text>
        <View style={styles.InputBackground}>
          <TextInput
          value={usertextInput}
          placeholder="Adicione uma nova tecnologia"
          placeholderTextColor="#808080"
          style={[isInputOnFocus ? styles.inputBorder : styles.input]}
          onChangeText={setUserTextInput}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          />
          <View style={styles.underButton}>
            <TouchableOpacity onPress={addItem} style={styles.button}>
              <PlusCircle 
              stroke={styles.text.color} 
              fill="#00000000" 
              width={20} 
              height={20}/>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.BodyBackground}>
        <View style={styles.techBackground}>
          <View style={[styles.infoBackground, borderBottomStyle]}>
            <View style={styles.infoLAdo}>
              <Text style={textStyles.text}>Criadas</Text>
              <View style={styles.numbers}>
                <Text style={styles.text}>{numList}</Text>
              </View>
            </View>
            <View style={styles.infoLAdo}>
              <Text style={textStyles.text}>Concluídas</Text>
              <View style={styles.numbers}>
                <Text style={styles.text}>{markeditens}</Text>
              </View>
            </View>
          </View>
            <View style={styles.listView}>
            <ScrollView 
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.list}
            >
              {list.map((item, index) => (
                <Item
                  key={index}
                  index={index}
                  title={item.title} 
                  isChecked={item.isChecked}
                  removeItem={deleteItem}
                  checkItem={markCheckItem}
                  />
                  ))}
            </ScrollView>
            {numList < 1 ? (
              <View style={textStyles.emptyView}>
                <View style={textStyles.clipboardView}>
                  <Clipboard
                    stroke="#808080"
                    width={80}
                    height={80}
                    />
                  </View>
                  <Text style={textStyles.empty}>
                  <Text style={textStyles.boldText}>
                    Você ainda não tem tecnologias cadastradas{'\n'}
                  </Text>
                    Crie tarefas e organize seus itens a fazer
                  </Text>
                </View>
            ) : null}
          </View>
        </View>
      </View>
    </>
  );
}