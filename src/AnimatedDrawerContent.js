import React from "react"

import { DrawerContentScrollView } from "@react-navigation/drawer"
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"

import DrawerItem from "./DrawerItem"

const colors = {}
const fonts = {}

const AnimatedDrawerContent = ({ photo, fullName, items = [] }) => {
  return (
    <DrawerContentScrollView
      scrollEnabled
      contentContainerStyle={{ flex: 1, backgroundColor: colors.whiteGreen }}
    >
      <View
        style={{
          flex: 1,
          paddingHorizontal: 15,
        }}
      >
        <View
          style={{
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              marginLeft: 0,
            }}
          >
            <TouchableOpacity>
              <Image style={styles.image} source={photo} />
              <View style={styles.orangeDot} />
            </TouchableOpacity>
            <Text
              style={{
                marginLeft: 20,
                fontFamily: fonts.ceraProBold,
                color: colors.white,
                fontSize: 16,
              }}
            >
              {fullName}
            </Text>
          </View>

          <View style={{ marginTop: 56 }}>
            {items.map((item) => (
              <DrawerItem
                text={item.text}
                icon={item.icon}
                routeName={item.routeName}
                onPress={item.onPress}
              />
            ))}
          </View>
        </View>
      </View>
    </DrawerContentScrollView>
  )
}

export default AnimatedDrawerContent

const styles = StyleSheet.create({
  image: {
    height: 40,
    width: 40,
    borderRadius: 15,
    backgroundColor: colors.white,
    padding: 10,
    borderWidth: 2,
    borderColor: colors.white,
  },
  orangeDot: {
    marginLeft: 30,
    zIndex: 2,
    position: "absolute",
    height: 10,
    width: 10,
    borderRadius: 20,
    backgroundColor: colors.yelllow,
  },
})
