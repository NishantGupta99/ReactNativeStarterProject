import React, {useState} from 'react';
import {
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,
  FlatList,
} from 'react-native';

const Flat= () => {
  const [Items, setItems] = useState([
    {key: '1', name: 'Item 1'},
    {key: '2', name: 'Item 2'},
    {key: '3', name: 'Item 3'},
    {key: '4', name: 'Item 4'},
    {key: '5', name: 'Item 5'},
    {key: '6', name: 'Item 6'},
    {key: '7', name: 'Item 7'},
    {key: '8', name: 'Item 8'},
    {key: '9', name: 'Item 9'},
    {key: '10', name: 'Item 10'},
    {key: '11', name: 'Item 11'},
  ]);
  return (
    <FlatList
      data={Items}
      renderItem={({item}) => (
        <View style={styles.item} >
          <Text style={styles.text}>{item.name}</Text>
        </View>
      )}
    />
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

export default Flat;
