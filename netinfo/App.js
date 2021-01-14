import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import NetInfo from "@react-native-community/netinfo";

export default class App extends Component {

  NetInfoSubscription = null;

  constructor(props) {
    super(props)
  
    this.state = {
       connection_status: false,
       connection_type: null,
       connection_reachable: false,
       connection_wifi: false,
       connection_details: null
    }
  }

  componentDidMount(){
    this.NetInfoSubscription = NetInfo.addEventListener(
      this.handleConnectivityChange
    )
  }

  // componentWillUnmount(){
  //   this.NetInfoSubscription && this.NetInfoSubscription();
  // }
  
  handleConnectivityChange = (state) => {
    this.setState({ 
      connection_status: state.isConnected,
      connection_type: state.type,
      connection_reachable: state.isInternetReachable,
      connection_wifi: state.isWifiEnabled,
      connection_details: state.details 
    })
  }

  render() {
    return (
      <View>

        <Text style={styles.text}>
          Connection status: {this.state.connection_status ? 'Connected' : 'Disconnected'}
        </Text>

        <Text style={styles.text}>
          Connection type: {this.state.connection_type}
        </Text>

        <Text style={styles.text}>
          Connection Reachable: {this.state.connection_reachable ? 'Internet Reachable' : 'Internet Not Reachable'}
        </Text>


        {/* (Only works in android)  */}
        <Text style={styles.text}>
          Connection wifi: {this.state.connection_wifi ? 'Connected to Wifi' : 'Not connected to Wifi'} 
        </Text> 

        <Text style={styles.text}>
        Connection Details:
        </Text> 

        <Text style={{textAlign: "center", fontSize: 18}}>
           {
            this.state.connection_type == 'wifi' ?
              this.state.connection_details.isConnectionExpensive ? 'Connection expensive: YES' : 'Connection expensive: NO' + '\n' +
              'ssid: ' + this.state.connection_details.ssid + '\n' +
              'bssid: ' + this.state.connection_details.bssid + '\n' +
              'Strength of wifi: ' + this.state.connection_details.strength + '\n' +
              'ip Address: ' + this.state.connection_details.ipAddress + '\n' +
              'subnet: ' + this.state.connection_details.subnet + '\n' +
              'Frequency of wifi: ' + this.state.connection_details.frequency + '\n' 
            : 
            
           
            this.state.connection_type == 'cellular' ? 
              this.state.connection_details.isConnectionExpensive ? 'Connection expensive: YES' : 'Connection expensive: NO' + '\n' +
              'Cellular Generation: ' + this.state.connection_details.cellularGeneration + '\n' + 
              'Carrier: ' + this.state.connection_details.carrier : 
              'Not Connect to wifi or cellular network'
          } 
        </Text> 

      </View>
    )
  }
}

const styles = StyleSheet.create({
  text:{
    fontSize: 18,
    textAlign: "center",
    marginTop: 20,
    fontWeight: "bold"
  }
})
