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
    { name: 'Item 1'},
    { name: 'Item 2'},
    { name: 'Item 3'},
    { name: 'Item 4'},
    { name: 'Item 5'},
    { name: 'Item 6'},
    { name: 'Item 7'},
    { name: 'Item 8'},
    { name: 'Item 9'},
    { name: 'Item 10'},
    { name: 'Item 11'},
  ]);
  const [Refreshing, setRefreshing] = useState(false)
  const onRefresh = () => {
    setRefreshing(true);
    setItems([...Items, {name : 'Item 404'}]);
    setRefreshing(false)
  }
  return (
    <FlatList
    //numColumns={2}
        // horizontal
        // inverted
        keyExtractor={(item,index)=> index.toString()}
        refreshControl={<RefreshControl refreshing={Refreshing} onRefresh={onRefresh} colors={['#F08914']} />}
      data={Items}
      renderItem={({item}) => (
        <View style={styles.item} >
          <Text style={styles.text}>{item.name} </Text>
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
