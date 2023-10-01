import React, { useRef, useState } from 'react'
import { Text, StyleSheet, View, ScrollView,TouchableWithoutFeedback } from 'react-native'
import IconFA5 from 'react-native-vector-icons/FontAwesome5'
import categoryData from '../categoryData'
import ProductDetails from './ProductDetails';


const Categories = (props) => {
  const [selectedItem, setSelectedItem] = useState(0);

  return (
    <View style={{ height: '100%' }}>
      <ScrollView
        style={styles.container}
        horizontal
        bounces={false}
        showsHorizontalScrollIndicator={false}
      >
        {categoryData.map((e, index) => {
          return (
            <TouchableWithoutFeedback
              style={styles.categoryBox}
              key={index}
              onPress={() => setSelectedItem(index)}
            >
              <View style={styles.categoryBox}>
                <View style={[styles.catBox, styles.shadowProp, { backgroundColor: selectedItem == index ? '#5DA9E9' : '#EDEDED', }]}>
                  <IconFA5 name={e.icon} size={26} color={selectedItem == index ? '#fff' : '#B6BAC3'} />
                </View>
                <Text style={[styles.textGrey, { color: selectedItem == index ? '#5DA9E9' : '#B6BAC3', }]}>{e.categoryName}</Text>
              </View>
            </TouchableWithoutFeedback>
          )
        })}

      </ScrollView>

      <View style={styles.hr} ></View>
      <ProductDetails setSelectedItem={setSelectedItem} selectedItem={selectedItem} props={props} />

    </View>
  )
}



const styles = StyleSheet.create({
  hr: {
    marginVertical: 20,
    height: 1,
    backgroundColor: '#EDEDED'
  },
  textGrey: {
    color: '#B6BAC3',
    fontWeight: 'bold',
    fontSize: 12,
  },
  container: {
    height: 120,
    marginLeft: 10,
    flexDirection: 'row',
  },
  categoryBox: {
    marginHorizontal: 15
  },
  shadowProp: {
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 5
  },
  catBox: {
    width: 52,
    height: 52,
    marginBottom: 6,
    padding: 12,

    borderRadius: 5
  },

})


export default Categories