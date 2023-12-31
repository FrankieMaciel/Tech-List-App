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
    width: 250,
    padding: 20,
    top: '90%',

  },
  TitleText: {
    fontSize: 30,
    color: '#32cf98',
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
    width: 260,
    backgroundColor: '#262626',
    borderRadius: 5,
    color: '#fff',
    zIndex: 1,
    textAlign: 'center',
    paddingHorizontal: 40,
    borderWidth: 1,
    borderColor: '#333333',
  },
  inputBorder: {
    height: 70,
    width: 260,
    backgroundColor: '#262626',
    borderRadius: 5,
    color: '#fff',
    zIndex: 1,
    textAlign: 'center',
    paddingHorizontal: 40,
    borderWidth: 1,
    borderColor: '#389c6f',
  },
  text: {
    color: '#D9D9D9',
  },
  text2: {
    color: '#808080',
  },
  infoText: {
    color: '#32cf98',
    fontWeight: 'bold',
  },
  infoText2: {
    color: '#32cf98',
    fontWeight: 'bold',
  },
  button: {
    height: 70,
    width: 70,
    alignItems: 'center',
    justifyContent: 'center',
    // paddingVertical: 20,
    // paddingHorizontal: 25,
    // marginLeft: 5,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#42a870',
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
    // width: 320,
    // height: 1000,
    // maxHeight: 300,
    justifyContent: 'center',
    alignItems: 'center',
    // padding: 16,
    zIndex: 2,
    overflow: 'hidden',
  },
  listView: {
    paddingBottom: 10,
    overflow: 'hidden',
    height: 280,
  },
  underButton: {
    display: 'flex',
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#158265',
    marginLeft: 5,
    elevation: 3,
    borderRadius: 4,
  },
  progressBarBG: {
    display: 'flex',
    position: 'absolute',
    width: 260,
    height: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    zIndex: 4,
    margin: 50,
    marginTop: 380,
  }
});

export const textStyles = StyleSheet.create({
  Title: {
    fontFamily: 'Abel',
    color: '#32cf98',
    fontSize: 30,
    // fontWeight: 'bold',
  },
  text: {
    fontFamily: 'Abel',
    color: '#32cf98',
    fontSize: 15,
    // fontWeight: 'bold',
  },
  empty: {
    fontFamily: 'Abel',
    color: '#808080',
    fontSize: 15,
    margin: 40,
    textAlign: 'center',
    width: 300,
  },
  clipboardView: {
    width: 300,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    paddingTop: 40,
    marginBottom: 30,
  },
  boldText: {
    fontFamily: 'Abel',
    color: '#808080',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    width: 100,
  },
  emptyView: {
    justifyContent: 'center',
    alignItems: 'center',
  }
});