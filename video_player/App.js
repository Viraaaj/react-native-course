import React, { Component } from 'react'
import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import { Button, Container, Content, List, ListItem, Text, View } from 'native-base';
import { createStackNavigator } from '@react-navigation/stack';
import Video, { FilterType } from 'react-native-video';
import { Animated, StyleSheet } from 'react-native';
import { useState } from 'react';
import Swipeable from 'react-native-gesture-handler/Swipeable'
import { TouchableOpacity } from 'react-native-gesture-handler';

var navigation = null

function VideoListScreen({navigation}) {
  return (
    <Container style={{backgroundColor:"#000000"}}>
      <Content>
        <List>

          <ListItem 
            onPress={() => navigation.navigate('Video Player', {
              external: true,
              videoURL: 'https://www.w3schools.com/html/mov_bbb.mp4'
            })} >
              <Text style={styles.text}> 
                External Video 
              </Text>
          </ListItem>



          {/* <ListItem
            onPress={() => navigation.navigate('Video Player', {
            external: false,
            videoURL: require('./react.mp4')
            })} >
              <Text style={styles.text}> React-Native </Text>
          </ListItem>

          <ListItem 
            onPress={() => navigation.navigate('Video Player', {
            external: false,
            videoURL: require('./react.mp4')
            })} >
              <Text style={styles.text}> React.js </Text>
          </ListItem>

          <ListItem 
            onPress={() => navigation.navigate('Video Player', {
            external: false,
            videoURL: require('./react.mp4')
            })} >
              <Text style={styles.text}> React-Redux </Text>
          </ListItem>

          <ListItem 
            onPress={() => navigation.navigate('Video Player', {
            external: false,
            videoURL: require('./react.mp4')
            })} >
              <Text style={styles.text}> React-Hooks </Text>
          </ListItem>

          <ListItem 
            onPress={() => navigation.navigate('Video Player', {
            external: false,
            videoURL: require('./react.mp4')
            })} >
              <Text style={styles.text}> React-Native libraries </Text>
          </ListItem>

          <ListItem 
            onPress={() => navigation.navigate('Video Player', {
            external: false,
            videoURL: require('./react.mp4')
            })} >
              <Text style={styles.text}> Django </Text>
          </ListItem>

          <ListItem 
            onPress={() => navigation.navigate('Video Player', {
            external: false,
            videoURL: require('./react.mp4')
            })} >
              <Text style={styles.text}> Complete web development </Text>
          </ListItem> */}

          
          {/* <Swipeable renderLeftActions={LeftActions} >
            <ListItem style={{ flex: 1, backgroundColor:"#000000"}}
              onPress={() => navigation.navigate('Video Player', {
                external: false,
                videoURL: require('./react.mp4')
                })}
               >
                <Text style={styles.text}> React-Native </Text>
            </ListItem>
          </Swipeable>

          <Swipeable renderLeftActions={LeftActions} >
            <ListItem style={{ flex: 1, backgroundColor:"#000000"}}
              onPress={() => navigation.navigate('Video Player', {
                external: false,
                videoURL: require('./react.mp4')
                })}
               >
                <Text style={styles.text}> React.js </Text>
            </ListItem>
          </Swipeable>

          <Swipeable renderLeftActions={LeftActions} >
            <ListItem style={{ flex: 1, backgroundColor:"#000000"}}
              onPress={() => navigation.navigate('Video Player', {
                external: false,
                videoURL: require('./react.mp4')
                })}
               >
                <Text style={styles.text}> React-Redux </Text>
            </ListItem>
          </Swipeable>

          <Swipeable renderLeftActions={LeftActions} >
            <ListItem style={{ flex: 1, backgroundColor:"#000000"}}
              onPress={() => navigation.navigate('Video Player', {
                external: false,
                videoURL: require('./react.mp4')
                })}
               >
                <Text style={styles.text}> React-Hooks </Text>
            </ListItem>
          </Swipeable>

          <Swipeable renderLeftActions={LeftActions} >
            <ListItem style={{ flex: 1, backgroundColor:"#000000"}}
              onPress={() => navigation.navigate('Video Player', {
                external: false,
                videoURL: require('./react.mp4')
                })}
               >
                <Text style={styles.text}> React-Native libraries </Text>
            </ListItem>
          </Swipeable>

          <Swipeable renderLeftActions={LeftActions} >
            <ListItem style={{ flex: 1, backgroundColor:"#000000"}}
              onPress={() => navigation.navigate('Video Player', {
                external: false,
                videoURL: require('./react.mp4')
                })}
               >
                <Text style={styles.text}> Django </Text>
            </ListItem>
          </Swipeable>

          <Swipeable renderLeftActions={LeftActions} >
            <ListItem style={{ flex: 1, backgroundColor:"#000000"}}
              onPress={() => navigation.navigate('Video Player', {
                external: false,
                videoURL: require('./react.mp4')
                })}
               >
                <Text style={styles.text}> Complete web development </Text>
            </ListItem>
          </Swipeable> */}

          
        
          <Swipeable renderLeftActions={ () => {
  return (
    <View
      style={{ flex: 1, backgroundColor: '#000000', justifyContent: 'center' }}>
      <Text onPress={() => navigation.navigate('Video Player', {
                external: false,
                videoURL: require('./react.mp4')
                })}
        style={{
          color: '#ff0000',
          paddingHorizontal: 10,
          fontWeight: 'bold',
          fontSize: 20,
          left: 18
        }}>
        Open Video
      </Text>
    </View>
  )
 }} >
            <ListItem style={{ flex: 1, backgroundColor:"#000000"}}
            
               >
                <Text style={styles.text}> Complete mobile development </Text>
            </ListItem>
          </Swipeable>

        </List>
      </Content>
    </Container>
  )
}

// const LeftActions =

// const LeftActions = (progress, dragX) => {
//   const scale = dragX.interpolate({
//     inputRange: [0, 100],
//     outputRange: [0, 1],
//     extrapolate: 'clamp'
//   })
//   return (
//     <View
//       style={{ flex: 1, backgroundColor: '#000000', justifyContent: 'center', borderBottomColor: "#ffffff", borderWidth:0.5, }}>
//       <Animated.Text 
//         style={{
//           color: '#ff0000',
//            paddingHorizontal: 10,
//            fontWeight: 'bold',
//            fontSize: 20,
//           left: 18,
//           transform: [{ scale }]
//         }}>
//         Open Video
//       </Animated.Text>
//     </View>
//   )
//  }


function VideoPlayerScreen({navigation, route}) {

  const {external, videoURL} = route.params;
  const [filterType, setFilterType] = React.useState(FilterType.MAXIMUMCOMPONENT)

  return <Container style={{backgroundColor:"#000000"}}>

    <Video
      controls
      paused
      filterEnable
      filter={filterType}
      source={external ? {uri: videoURL} : videoURL}
      style={{ top:0, left:22, bottom:0, right:0, position:"absolute", marginVertical:"50%", width:"90%" }}
    />

    {/* <Button 
      style = {{ marginTop: 500 }}
      block
      onPress={() => {}} 
    >
      <Text>  </Text>
    </Button> */}
    
  </Container>
}

const Stack = createStackNavigator();


// export default function App() {
//   return (
//     <NavigationContainer theme={DarkTheme}>
//       <Stack.Navigator>
//         <Stack.Screen name="Video List" component={VideoListScreen} />
//         <Stack.Screen name="Video Player" component={VideoPlayerScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   )
// }

export default class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       
    };
    navigation = this.props.navigation;
    // this.LeftActions = this.LeftActions.bind(this)
  }
  

  render() {
    return (
      <NavigationContainer theme={DarkTheme}>
      <Stack.Navigator>
        <Stack.Screen name="Video List" component={VideoListScreen} />
        <Stack.Screen name="Video Player" component={VideoPlayerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    )
  }
}

const styles = StyleSheet.create({
  text:{
    textAlign:"center",
    fontSize: 20,
    fontWeight:"bold",
    color: "#ff0000",
    alignSelf:"center"
  }
})


