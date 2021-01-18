import React, { Component } from 'react'
import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import { Button, Container, Content, List, ListItem, Text, View } from 'native-base';
import { createStackNavigator } from '@react-navigation/stack';
import Video, { FilterType } from 'react-native-video';
import { Animated, ImageBackground, StyleSheet } from 'react-native';
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
            onPress={() => navigation.navigate('Video List', {
              external: true,
              videoURL: 'https://www.w3schools.com/html/mov_bbb.mp4'
            })} >
              <Text style={styles.text1}> 
                Videos List 
              </Text>
          </ListItem>


          <Swipeable renderLeftActions={ (progress, dragX) => {
              const scale = dragX.interpolate({
                inputRange: [0, 100],
                outputRange: [0, 1],
                extrapolate: 'clamp'
              })
              return (
                <View
                  style={{ flex: 1, backgroundColor: '#000000', justifyContent: 'center', borderBottomColor: "#ffffff", borderWidth:0.5, }}>
                  <Animated.Text 
                    onPress={() => navigation.navigate('Video Player', {
                    external: false,
                    videoURL: require('./react.mp4')
                    })}
                    style={{
                      color: '#00CC99',
                      paddingHorizontal: 10,
                      fontWeight: 'bold',
                      fontSize: 20,
                      left: 18,
                      transform: [{ scale }]
                    }}>
                    Open Video
                  </Animated.Text>
                </View>
              )
            }}>

            <ListItem style={{ flex: 1, backgroundColor:"#000000"}}>
                <Text style={styles.text}> React-Native </Text>
            </ListItem>
          </Swipeable>


          <Swipeable renderLeftActions={ (progress, dragX) => {
              const scale = dragX.interpolate({
                inputRange: [0, 100],
                outputRange: [0, 1],
                extrapolate: 'clamp'
              })
              return (
                <View
                  style={{ flex: 1, backgroundColor: '#000000', justifyContent: 'center', borderBottomColor: "#ffffff", borderWidth:0.5, }}>
                  <Animated.Text 
                    onPress={() => navigation.navigate('Video Player', {
                    external: false,
                    videoURL: require('./react.mp4')
                    })}
                    style={{
                      color: '#00CC99',
                      paddingHorizontal: 10,
                      fontWeight: 'bold',
                      fontSize: 20,
                      left: 18,
                      transform: [{ scale }]
                    }}>
                    Open Video
                  </Animated.Text>
                </View>
              )
            }}>

            <ListItem style={{ flex: 1, backgroundColor:"#000000"}}>
                <Text style={styles.text}> React.js </Text>
            </ListItem>
          </Swipeable>


          <Swipeable renderLeftActions={ (progress, dragX) => {
              const scale = dragX.interpolate({
                inputRange: [0, 100],
                outputRange: [0, 1],
                extrapolate: 'clamp'
              })
              return (
                <View
                  style={{ flex: 1, backgroundColor: '#000000', justifyContent: 'center', borderBottomColor: "#ffffff", borderWidth:0.5, }}>
                  <Animated.Text 
                    onPress={() => navigation.navigate('Video Player', {
                    external: false,
                    videoURL: require('./react.mp4')
                    })}
                    style={{
                      color: '#00CC99',
                      paddingHorizontal: 10,
                      fontWeight: 'bold',
                      fontSize: 20,
                      left: 18,
                      transform: [{ scale }]
                    }}>
                    Open Video
                  </Animated.Text>
                </View>
              )
            }}>

            <ListItem style={{ flex: 1, backgroundColor:"#000000"}}>
                <Text style={styles.text}> React-Redux </Text>
            </ListItem>
          </Swipeable>


          <Swipeable renderLeftActions={ (progress, dragX) => {
              const scale = dragX.interpolate({
                inputRange: [0, 100],
                outputRange: [0, 1],
                extrapolate: 'clamp'
              })
              return (
                <View
                  style={{ flex: 1, backgroundColor: '#000000', justifyContent: 'center', borderBottomColor: "#ffffff", borderWidth:0.5, }}>
                  <Animated.Text 
                    onPress={() => navigation.navigate('Video Player', {
                    external: false,
                    videoURL: require('./react.mp4')
                    })}
                    style={{
                      color: '#00CC99',
                      paddingHorizontal: 10,
                      fontWeight: 'bold',
                      fontSize: 20,
                      left: 18,
                      transform: [{ scale }]
                    }}>
                    Open Video
                  </Animated.Text>
                </View>
              )
            }}>

            <ListItem style={{ flex: 1, backgroundColor:"#000000"}}>
                <Text style={styles.text}> React-Hooks </Text>
            </ListItem>
          </Swipeable>


          <Swipeable renderLeftActions={ (progress, dragX) => {
              const scale = dragX.interpolate({
                inputRange: [0, 100],
                outputRange: [0, 1],
                extrapolate: 'clamp'
              })
              return (
                <View
                  style={{ flex: 1, backgroundColor: '#000000', justifyContent: 'center', borderBottomColor: "#ffffff", borderWidth:0.5, }}>
                  <Animated.Text 
                    onPress={() => navigation.navigate('Video Player', {
                    external: false,
                    videoURL: require('./react.mp4')
                    })}
                    style={{
                      color: '#00CC99',
                      paddingHorizontal: 10,
                      fontWeight: 'bold',
                      fontSize: 20,
                      left: 18,
                      transform: [{ scale }]
                    }}>
                    Open Video
                  </Animated.Text>
                </View>
              )
            }}>

            <ListItem style={{ flex: 1, backgroundColor:"#000000"}}>
                <Text style={styles.text}> Django </Text>
            </ListItem>
          </Swipeable>


          <Swipeable renderLeftActions={ (progress, dragX) => {
              const scale = dragX.interpolate({
                inputRange: [0, 100],
                outputRange: [0, 1],
                extrapolate: 'clamp'
              })
              return (
                <View
                  style={{ flex: 1, backgroundColor: '#000000', justifyContent: 'center', borderBottomColor: "#ffffff", borderWidth:0.5, }}>
                  <Animated.Text 
                    onPress={() => navigation.navigate('Video Player', {
                    external: false,
                    videoURL: require('./react.mp4')
                    })}
                    style={{
                      color: '#00CC99',
                      paddingHorizontal: 10,
                      fontWeight: 'bold',
                      fontSize: 20,
                      left: 18,
                      transform: [{ scale }]
                    }}>
                    Open Video
                  </Animated.Text>
                </View>
              )
            }}>

            <ListItem style={{ flex: 1, backgroundColor:"#000000"}}>
                <Text style={styles.text}> Complete web development </Text>
            </ListItem>
          </Swipeable>
        
          <Swipeable renderLeftActions={ (progress, dragX) => {
              const scale = dragX.interpolate({
                inputRange: [0, 100],
                outputRange: [0, 1],
                extrapolate: 'clamp'
              })
              return (
                <View
                  style={{ flex: 1, backgroundColor: '#000000', justifyContent: 'center', borderBottomColor: "#ffffff", borderWidth:0.5, }}>
                  <Animated.Text 
                    onPress={() => navigation.navigate('Video Player', {
                    external: false,
                    videoURL: require('./react.mp4')
                    })}
                    style={{
                      color: '#00CC99',
                      paddingHorizontal: 10,
                      fontWeight: 'bold',
                      fontSize: 20,
                      left: 18,
                      transform: [{ scale }]
                    }}>
                    Open Video
                  </Animated.Text>
                </View>
              )
            }}>

            <ListItem style={{ flex: 1, backgroundColor:"#000000"}}>
                <Text style={styles.text}> Complete mobile development </Text>
            </ListItem>
          </Swipeable>

        </List>
      </Content>
    </Container>
  )
}

// const LeftActions = () => {
//   return (
//     <View
//       style={{ flex: 1, backgroundColor: '#000000', justifyContent: 'center' }}>
//       <Text onPress={() => navigation.navigate('Video Player', {
//                 external: false,
//                 videoURL: require('./react.mp4')
//                 })}
//         style={{
//           color: '#ff0000',
//           paddingHorizontal: 10,
//           fontWeight: 'bold',
//           fontSize: 20,
//           left: 18
//         }}>
//         Open Video
//       </Text>
//     </View>
//   )
// }

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
  const [filterType, setFilterType] = React.useState(FilterType.FADE)

  const changeFilter = filterType => {
    setFilterType(filterType);
  }

  return <Container style={{backgroundColor:"#000000"}}>

    <Video
      controls
      paused
      filterEnabled={true}
      filter={filterType}
      source={external ? {uri: videoURL} : videoURL}
      resizeMode="contain"
      style={{ top:0, left:0, bottom:0, right:0, position:"absolute", marginVertical:"50%"}}
    />

    <Text
      onPress={() => navigation.navigate('Video List')} 
      style={{color:"#ffffff", fontWeight:"bold", textAlign:"right", right:16, top:12}}
    >
    Close
    </Text>


    <View style={{flex:1, marginTop:50}}>
      <Button 
        block
        onPress={() => {changeFilter(FilterType.MONO)} } 
      >
        <Text>
          Change filter to MONO 
        </Text>
      </Button>

      <Button 
        block
        onPress={() => {changeFilter(FilterType.CHROME)}} 
      >
        <Text>
          Change filter to CHROME 
        </Text>
      </Button>

      <Button 
        block
        onPress={() => {changeFilter(FilterType.SEPIA)}} 
      >
        <Text>
          Change filter to SEPIA 
        </Text>
      </Button>
    </View>
    
  </Container>
}

function SplashScreen({navigation}) {

  setTimeout(() => {
    navigation.replace('Video List')
  }, 1500);

  return (
    <ImageBackground style={{flex:1}} source={{uri:'https://camo.githubusercontent.com/26e52bf82450c26eab49c9db7bfc7c62d516afe77d81eb2f0706ef31cecb7b37/68747470733a2f2f7777772e66696c657069636b65722e696f2f6170692f66696c652f55763031334c6e77527a6d32485848426b396951'}} >
    </ImageBackground>
  )
}

// function SplashScreenVideo({navigation}) {

//   setTimeout(() => {
//     navigation.replace('Video List')
//   }, 1500);

//   return (
//     <Video style={{flex:1}} source={require('./react.mp4')} resizeMode="contain"/>
//   )
// }


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
  }
  

  render() {
    return (
      <NavigationContainer theme={DarkTheme}>
      <Stack.Navigator initialRouteName='SplashScreen' headerMode='none'>
        <Stack.Screen name="Video List" component={VideoListScreen} />
        <Stack.Screen name="Video Player" component={VideoPlayerScreen} />
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        {/* <Stack.Screen name="SplashScreenVideo" component={SplashScreenVideo} /> */}
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
  },
  text1:{
    textAlign:"center",
    fontSize: 20,
    fontWeight:"bold",
    color: "#ffffff",
    alignSelf:"center"
  }
})


