import React, { useEffect, useRef } from 'react'
import { Text, StyleSheet, ScrollView, View, Image, TouchableOpacity ,Animated} from 'react-native';
import IconEntypo from 'react-native-vector-icons/Entypo'
import data from '../productData.js'
import Categories from '../categoryData.js'

const ProductDetails = ({setSelectedItem,selectedItem,props}) => {
  const scrollView=useRef();
  const addedItems=props.props.data.cartItem;
  console.log("Pdetails = ",props.props.data.cartItem)
  return (
    <ScrollView
      ref={scrollView}
      style={styles.container}
      scrollEventThrottle={16}
      showsVerticalScrollIndicator={false}
      onScroll={({nativeEvent})=> {
        // console.log(nativeEvent.contentOffset.y);
        setSelectedItem(Math.floor((nativeEvent.contentOffset.y)/200))
      }}
    >

      {/* Category wise Products */}
      {Categories.map((e, index) => {
        return (
          <View key={index}>
            <View style={styles.productsHeader}>
              <Text style={styles.textCol}>{e.categoryName} &nbsp;
                <IconEntypo name="chevron-small-right" size={24} />
              </Text>
              <TouchableOpacity>
                <Text style={styles.viewall}>View all</Text>
              </TouchableOpacity>
            </View>

            {/* All products listed here */}
            <ScrollView
              style={styles.productsBox}
              horizontal
              scrollEventThrottle={16}
              bounces={false}
              showsHorizontalScrollIndicator={false}
            >
              {data.map((ele,index )=> {
                return (
                  <View style={styles.product} key={index}>
                    <Image style={styles.prodImage} source={ele.img} />
                    <TouchableOpacity 
                    style={styles.addbtn}
                    onPress={()=>props.props.addToCartHandler(ele)}
                    >
                      <IconEntypo name='plus' size={32} color={'#fff'} />
                    </TouchableOpacity>
                    <View>
                      <Text style={styles.price}>{ele.price}</Text>
                      <Text style={styles.prodName}>{ele.name}</Text>
                      <Text style={styles.quantity}>{ele.quantity}</Text>
                    </View>
                  </View>
                )
              })}
            </ScrollView>
          </View>
        )

      })}


    </ScrollView>
  )
}


const styles = StyleSheet.create({
  textCol: {
    color: '#100E3A',
    fontWeight: 'bold',
    fontSize: 18,
    fontFamily: 'mulish'
  },
  container: {
    height:'100%',
    paddingHorizontal: 16,
    paddingVertical: 5,
    marginBottom:154,
  },
  shadowProp: {
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 5
  },
  productsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  productsBox: {
    padding: 10,
    // backgroundColor:'red',
    marginBottom: 20
  },
  product: {
    width: 117,
    height: 157,
    marginRight: 30,
  },
  prodImage: {
    width: 117,
    height: 100,
    resizeMode: 'stretch',
  },
  viewall: {
    fontWeight: '700',
    fontSize: 14,
    color: '#5DA9E9'
  },
  addbtn: {
    height: 50,
    width: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#40D589',
    marginLeft: 66,
    marginTop: -55
  },
  price: {
    color: '#100E3A',
    fontSize: 20,
    fontWeight: '700'
  },
  prodName: {
    color: '#100E3A',
    fontSize: 14,
    fontWeight: '500'
  },
  quantity: {
    fontSize: 14,
    color: '#737D94',
  },
})

export default ProductDetails;