import { View, Text, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { styles } from './style/EditProfileStyle'
import images from '../../assets/images'
import icons from '../../assets/icons'
const EditProfile = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.content}>
      <View style={styles.imageContainer}>
        <Image source={icons.person} style={styles.image}/>
        <View style={styles.nameContainer}>
          <Text style={styles.nameText}>Heiden Biermann</Text>
          <Text>Hello</Text>
        </View>
      </View>
      <View style={styles.dataContainer}>
        <View style={styles.cardMenu}>
          <Image source={icons.person} style={styles.iconImage}/>
          <View style={styles.textContainer}>
            <Text style={styles.heading}>Login Details</Text>
            <Text>Username, Password</Text>
          </View>
        </View>
        <View style={styles.cardMenu}>
          <Image source={icons.help} style={styles.iconImage}/>
          <View style={styles.textContainer}>
            <Text style={styles.heading}>Login Details</Text>
            <Text>Username, Password</Text>
          </View>
        </View>
        <View style={styles.cardMenu}>
          <Image source={icons.details} style={styles.iconImage}/>
          <View style={styles.textContainer}>
            <Text style={styles.heading}>Login Details</Text>
            <Text>Username, Password</Text>
          </View>
        </View>
        <View style={styles.cardMenu}>
          <Image source={icons.person} style={styles.iconImage}/>
          <View style={styles.textContainer}>
            <Text style={styles.heading}>Login Details</Text>
            <Text>Username, Password</Text>
          </View>
        </View>
      </View>   
        <TouchableOpacity style={styles.button}>
          <Image source={icons.logOut} style={styles.iconImage}/>
          <Text style={styles.logOut}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default EditProfile