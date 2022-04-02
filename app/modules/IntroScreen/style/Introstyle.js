import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {flex: 1},
  imgStyle: {flex:1},
  imgViewContainer: {width: '100%',justifyContent:'center' , alignItems: 'center', marginTop: 50},
  imgInnerContainer: {
    backgroundColor: 'white',
    padding: 12, 
    borderRadius: 10, 
    shadowColor: 'grey', 
    shadowOffset: {width: 1,height: 1}, 
    shadowOpacity: 0.6},
  imgView: {
    height: 130, 
    width: 130, 
  },
    textContainer: {alignItems: 'center', justifyContent: 'center', marginTop: 50},
    textStyle: {textAlign: 'center', padding: 20, fontSize: 35, fontWeight: '900', color : 'black'},
    bigTextContainer: { paddingHorizontal: 25,alignItems: 'center', justifyContent: 'center'},
    bigTextStyle: {fontSize: 17,fontWeight: '500', color: 'black' }
});