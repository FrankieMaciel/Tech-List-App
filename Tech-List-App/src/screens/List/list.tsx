import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { useFonts } from 'expo-font';
import { LoadingScreen } from '../LoadingScreen/LoadingScreen';

export function ListPage() {

  const [fontsLoaded] = useFonts({
    'Inter': require('../../../assets/fonts/Inter.ttf')
  });

  if (!fontsLoaded) {
    return <LoadingScreen/>
  }

  return (
    <>
      <View style={styles.TitleBackground}>
        <Text style={styles.TitleText}>Minhas tecnologias</Text>
        <View style={styles.InputBackground}>
          <TextInput
          placeholder="Adicione uma nova tecnologia"
          placeholderTextColor="#808080"
          style={styles.input}
          />
          <Pressable style={styles.button}>
            <Text style={styles.text}>+</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.BodyBackground}>
        <View style={styles.techBackground}>
          <View style={styles.infoBackground}>
            <View style={styles.infoLAdo}>
              <Text style={styles.infoText}>Criadas</Text>
              <View style={styles.numbers}>
                <Text style={styles.text}>0</Text>
              </View>
            </View>
            <View style={styles.infoLAdo}>
              <Text style={styles.infoText2}>Concluídas</Text>
              <View style={styles.numbers}>
                <Text style={styles.text}>0</Text>
              </View>
            </View>
          </View>
          <View style={styles.list}>
            <Text style={styles.text2}>Você ainda não tem tecnologias cadastradas
Crie tarefas e organize seus itens a fazer</Text>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  TitleBackground: {
    flex: 1,
    backgroundColor: '#0D0D0D',
    alignItems: 'center',
    justifyContent: 'center',
  },
  InputBackground: {
    display: 'flex',
    position: 'absolute',
    flex: 1,
    alignItems: 'center',
    height: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    padding: 20,
    top: '90%',

  },
  TitleText: {
    fontSize: 30,
    color: '#4EA8DE',
    // fontFamily: 'Inter',
    fontWeight: 'bold',
    marginBottom: 30,
  },
  BodyBackground: {
    backgroundColor: '#1A1A1A',
    height: '65%',
    zIndex: -1,
  },
  input: {
    height: 70,
    width: 'auto',
    backgroundColor: '#262626',
    borderRadius: 5,
    color: '#fff',
    zIndex: 1,
    textAlign: 'center',
    paddingHorizontal: 40,
  },
  text: {
    color: '#D9D9D9',
  },
  text2: {
    color: '#808080',
  },
  infoText: {
    color: '#4EA8DE',
    fontWeight: 'bold',
  },
  infoText2: {
    color: '#8284FA',
    fontWeight: 'bold',
  },
  button: {
    height: 70,
    width: 70,
    alignItems: 'center',
    justifyContent: 'center',
    // paddingVertical: 20,
    // paddingHorizontal: 25,
    marginLeft: 5,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#1E6F9F',
  },
  infoBackground: {
    width: '100%',
    borderBottomWidth: 1,
    borderColor: '#333333',
    paddingBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoLAdo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  numbers: {
    backgroundColor: '#333333',
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
    borderRadius: 10,
  },
  techBackground: {
    width: '100%',
    height: '100%',
    paddingHorizontal: 20,
    // justifyContent: 'center',
    marginTop: 60,
    // alignContent: 'center',
    // alignSelf: 'center',
  },
  list: {
    width: '100%',
    height: '70%',
    justifyContent: 'center',
    alignItems: 'center',
  }
});