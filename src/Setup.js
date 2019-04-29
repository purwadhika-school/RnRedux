/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  StyleSheet,
  ActivityIndicator,
  Text,
  View
} from 'react-native'
import { connect } from 'react-redux'
import { fetchData } from './actions'
import Profile from '../src/components/Profile'

class Setup extends Component {
  componentDidMount(){
    this.props.dispatch(fetchData())
  }


  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, backgroundColor: 'blue' }}>
          {
            this.props.data ? (<Text>{this.props.data}</Text>) : (<ActivityIndicator size='large' />)
          }
        </View>
        <View style={{ flex: 1, backgroundColor: 'red' }}>
          <Profile />
        </View>
      </View>
    );
  }
}


const mapStateToProps = (state) => {
  console.log(state)
  return {
    data: state.data.items
  }
}

export default connect(mapStateToProps)(Setup)