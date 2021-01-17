import React, { useState } from 'react'
import { Button, StyleSheet, TextInput, View } from 'react-native';

const GoalInput = props => {
  
  const [goal, setgoal] = useState('');

  const textInputPress = (text) => {
    setgoal(text);
  };

  return (
    <View style={{ flexDirection:"row", justifyContent:"space-between", alignItems:"center", marginBottom:10 }}>
      <TextInput 
        placeholder={"Today's goal..."} 
        style={styles.textInput}
        onChangeText={textInputPress}
        value={goal} />
        
      <Button title="ADD" onPress={() => {
        if(goal.length > 0){
          props.onAdd(goal)
        }}} />
    </View>
  )
}

const styles = StyleSheet.create({
  textInput:{
    borderColor:"#000000", 
    borderWidth:1, 
    width:"80%"
  }
})

export default GoalInput;