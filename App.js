import React, {useState} from 'react';
// import type {Node} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
const App = () => {
  const [Items, setItems] = useState([
    {key: 1, item: 'Item 1'},
    {key: 2, item: 'Item 2'},
    {key: 3, item: 'Item 3'},
    {key: 4, item: 'Item 4'},
    {key: 5, item: 'Item 5'},
    {key: 6, item: 'Item 6'},
    {key: 7, item: 'Item 7'},
    {key: 8, item: 'Item 8'},
    {key: 9, item: 'Item 9'},
    {key: 10, item: 'Item 10'},
    {key: 11, item: 'Item 11'},
  ]);
  return (
    <View style={styles.body}>
      <ScrollView>
      {Items.map(i => {
        return (
          <View style={styles.item}>
            <Text style={styles.text}>{i.item}</Text>
          </View>
        );
      })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    // alignItems: 'stretch',
    // justifyContent: 'center',
    // borderBottomColor: "#FF1106",
    // borderWidth:10,
    // borderColor:'#3BE8F2',
    // borderRadius:10,
  },
  item: {
    margin:10,
    backgroundColor: '#3A52F8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#000000',
    fontSize: 45,
    fontStyle: 'italic',
    margin: 10,
    textTransform: 'uppercase',
  },
});

export default App;
