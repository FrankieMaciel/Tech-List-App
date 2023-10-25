import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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
    backgroundColor: '#56c46c',
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
    flex: 0,
    // width: 'auto',
    // height: 300,
    // maxHeight: 300,
    justifyContent: 'center',
    alignItems: 'center',
    // padding: 16,
    zIndex: 2,
  }
});