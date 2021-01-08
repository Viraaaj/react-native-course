import React, { useState } from 'react'
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {

  const [course, setcourse] = useState([]);

  const addgoal = goalTitle => {
    setcourse(currentGoals => [...currentGoals, { id: Math.random().toString(), value: goalTitle }]);
  }

  const removeGoal = goalId => {
    setcourse(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId );
    } )
  }

  return (
    <View style={{padding:50}}>

    <GoalInput onAdd={addgoal} />
        
    {/* <ScrollView>
      {course.map((goal) =>
            <View key={goal} style={{ marginTop:8, borderColor:"#000000", borderWidth:1, height:30, width:"100%", justifyContent:"center", backgroundColor:"rgba(0,0,0,0.2)"}}>
              <Text style={{textAlign:"center"}}>{goal}</Text>
            </View>
          )}
    </ScrollView> */}

    {/* rendering data using flatlist */}

    <FlatList
    keyExtractor={(item, index) => item.id }
    data={course}
    renderItem={itemData => <GoalItem id={itemData.item.id} onDelete={removeGoal} title={itemData.item.value} />} />

    </View>
    
  )
}


