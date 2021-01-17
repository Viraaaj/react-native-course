import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

const GoalItem = (props) => {
  return (
    <TouchableOpacity onPress={props.onDelete.bind(this, props.id)} >
      <View 
        style={{ marginTop:8, borderColor:"#000000", borderWidth:1, height:30, width:"100%", justifyContent:"center", backgroundColor:"rgba(0,0,0,0.2)"}}>
          <Text style={{textAlign:"center"}}>{props.title}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default GoalItem;
