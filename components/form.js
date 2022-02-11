import axios from "axios";
import React from "react";
import { View, TextInput, Button, Text } from "react-native";

class Form extends React.Component {
    constructor(){
        super();
        this.state = {
            name: " ",
            age: " "
        }
    }
    
    submit(name,age) {
        console.log("button works");
        axios.post("http://10.0.2.2:8000/users" ,  {
            name: this.state.name,
            age: this.state.age
            
          },{
            headers:{
              ['content-type']:'application/json'
            }})
        .then(function(response){
            console.warn(response);
        })
        .then(function(error){
            console.warn(error);
        })
    }

    render() {
        return(
     <View style={{margin:20}}>
         <TextInput placeholder="enter your name"kk style={{borderWidth: 2, borderColor: '#B5C1AE', margin:20}}
         onChangeText={text=> {
             this.setState({name:text});
         }}></TextInput>
          <TextInput placeholder="enter your age" style={{borderWidth: 2, borderColor: '#B5C1AE', margin:20}}
         onChangeText={text=> {
             this.setState({age:text});
         }}></TextInput>
         <Button 
         title="submit" 
         onPress={() => {this.submit()}}/>

     </View>
        )
    }
}

export default Form