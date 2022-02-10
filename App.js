import React, {useState} from 'react';
// import type {Node} from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
  Linking,
  ImageBackground,
  Image,
  TouchableHighlight,
  Alert,
} from 'react-native';
const App = () => {
  const [name, setName] = useState('style training!');

  const onClickHandler = () => {
    setName('React native training');
  };

  return (
    <View style={styles.body}>
      <View style={styles.view1}>
        <Text style={styles.text}>1</Text>
      </View>
      <View style={styles.view2}>
        <Text style={styles.text}>2</Text>
      </View>
      <View style={styles.view3}>
        <Text style={styles.text}>3</Text>
      </View>

      {/* <Button
        title="greet me"
        onPress={() => {
          Linking.openURL('https://www.bbc.com');
        }}></Button> */}
      {/* <TouchableHighlight onPress={()=> {Alert.alert("the touchable button has been pressed")}}
        activeOpacity={0.5}
        underlayColor={"#076B0E"}>
          <Text>Click me </Text>
        </TouchableHighlight> */}
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex:1,
    flexDirection:"column",
    backgroundColor: '#C73AF8',
    alignItems: 'strech',
    justifyContent: 'center',
    // borderBottomColor: "#FF1106",
    // borderWidth:10,
    // borderColor:'#3BE8F2',
    // borderRadius:10,
  },
  text: {
    color: '#000000',
    fontSize: 20,
    fontStyle: 'italic',
    margin: 10,
    textTransform: 'uppercase',
  },
  bgimage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  image: {
    width: 150,
    height: 120,
  },
  button: {
    width: 150,
    height: 60,
  },
  view1: {
    flex:1,
    backgroundColor:"#00ffff",
    alignItems:'center',
    justifyContent:'center'
  },
  view2: {
    flex:1,
    backgroundColor:"#F8763A",
    alignItems:'center',
    justifyContent:'center'
  },
  view3: {
    flex:1,
    backgroundColor:"#B3F83A",
    alignItems:'center',
    justifyContent:'center'
  }
});

export default App;
