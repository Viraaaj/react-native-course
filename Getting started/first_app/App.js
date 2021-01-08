import React, { useState } from 'react'
import { Button, Text, View } from 'react-native'

export default function App() {

  const [text, settext] = useState('Hello')

  return (
    <View style={{ flex:1, justifyContent:"center", alignSelf:"center" }}>
      <Text style={{ textAlign:"center" }} >{text}</Text>
      <Button title="Change text" onPress={() => settext('Welcome to the world of React-Native!!')} />
    </View>
  )
}

