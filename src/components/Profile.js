import React, { Component } from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import { getDataStarWars, fetchData } from '../actions/index'

class Profile extends Component {
  componentDidMount() {
    this.props.dispatch(fetchData())
    this.props.dispatch(getDataStarWars())
  }

  render() {
    console.log(this.props.dataStarwars)
    return (
      <View>
        <Text>{this.props.dataStatic}</Text>
        {
          this.props.isLoading ? (
            <ActivityIndicator size="large" />
          ) : (
            <Text style={{ color: 'white', fontSize: 25 }}>
              {this.props.dataStarwars.name}
            </Text>
          )
        }
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    dataStarwars: state.dataSwapi.data,
    isLoading: state.dataSwapi.isLoading, 
    dataStatic: state.data.items
  }
}

export default connect(mapStateToProps) (Profile)
