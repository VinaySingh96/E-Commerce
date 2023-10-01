import React from 'react'
import Header from './Header'
import Categories from './Categories'
import { View,Text, StyleSheet } from 'react-native';

const Index = (props) => {
  console.log(props)
  return (
    <View style={[styles.container]}>
      <Header props={props} />
      <Categories props={props} />

    </View>
  )
}

const styles=StyleSheet.create({
  container:{
    backgroundColor:'#FFF'
  },
  
})

export default Index