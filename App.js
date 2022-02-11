import React, {useState} from 'react';
// import type {Node} from 'react';
import {RefreshControl, ScrollView, StyleSheet, Text, View} from 'react-native';
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
  const [Refreshing, setRefreshing] = useState(false)
  const onRefresh = () => {
    setRefreshing(true);
    setItems([...Items, {key: 400, item : 'Item 400'}]);
    setRefreshing(false)
  }
  return (
    
      <ScrollView style={styles.body} refreshControl={<RefreshControl refreshing={Refreshing} onRefresh={onRefresh} colors={['#F08914']} />}>
      {Items.map(i => {
        return (
          <View style={styles.item} key={i.key}>
            <Text style={styles.text}>{i.item}</Text>
          </View>
        );
      })}
      </ScrollView>
    
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
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
