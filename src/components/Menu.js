import { View, TouchableOpacity, StyleSheet, Text, Image } from 'react-native';
import {useNavigation} from "@react-navigation/native";
import React from 'react';

const Menu = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.menuContainer}>
      <TouchableOpacity 
      style={styles.buttonStyle}
      onPress={() => navigation.navigate('Users')}
      >
        <Text>Users</Text>
        <Image
        style={styles.iconStyle}
        source={require("../../assets/users.png")}
         />
      </TouchableOpacity>

      <TouchableOpacity 
      style={styles.buttonStyle}
      onPress={() => navigation.navigate('Kyc')}
      >
        <Text>KYC</Text>
        <Image
        style={styles.iconStyle}
        source={require("../../assets/kyc.png")}
         />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({

    menuContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly"
    },

    textStyle: {
        textTransform: "uppercase",
        marginBottom: 50,
    },

    iconStyle:{
        width: "100%",
        height: 50,
        aspectRatio: 1,
    },

})

export default Menu
