import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import IconFeather from 'react-native-vector-icons/Feather'
const Header = (props) => {
  console.log("header props",props.props.data.cartItem)
  return (
    <View style={styles.container}>
      <Text style={[styles.headerText]}>E-Commerce</Text>

      <TouchableOpacity style={styles.sharebtn}>
        <Icon name="file-text-o" size={20} color="#000" />
        <Text style={{color:'#737D94',fontWeight:'700'}}>Share Logs</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.cartbtn,styles.shadowProp]}>
        <IconFeather name="shopping-cart" size={20} color="#000" />
        <Text style={[styles.textBlack]}>{props.props.data.cartItem.length}</Text>
      </TouchableOpacity>

    </View>
  )
}

const styles=StyleSheet.create({
  textBlack:{
    color:'black',
    fontWeight:'bold',
  },
  container:{
    padding:20,
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
  },
  headerText:{
    fontSize:20,
    fontWeight:'700',
    fontFamily:'fantasy',
    lineHeight:28,
    color:'#100E3A'
  },
  sharebtn:{
    flexDirection:'row',
    gap:5,
    padding:10,
    borderWidth:1,
    borderRadius:40,
  },
  cartbtn:{
    flexDirection:'row',
    justifyContent:'space-between',
    width:90,
    padding:10,
    paddingHorizontal:20,
    borderRadius:25,
    overflow:'hidden',
    backgroundColor:'#fff'
  },
  shadowProp:{
    shadowColor:'#000',
    shadowOffset:{width:1,height:1},
    shadowOpacity:0.4,
    shadowRadius:5,
    elevation:5
  }
})

export default Header