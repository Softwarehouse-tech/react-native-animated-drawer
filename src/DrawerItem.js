import React from "react"

import { TouchableOpacity, Image, Text, StyleSheet } from "react-native"

const colors = {}

const DrawerItem = ({ icon, text, routeName, onPress }) => {
  const activeRoute = false

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image
        source={icon}
        style={
          routeName === activeRoute ? styles.activeIcon : styles.deactiveIcon
        }
      />
      <Text
        style={
          routeName === activeRoute ? styles.selectText : styles.notSelectText
        }
      >
        {text}
      </Text>
    </TouchableOpacity>
  )
}

export default DrawerItem

const styles = StyleSheet.create({
  container: { flexDirection: "row", marginVertical: 24 },
  selectText: {
    marginLeft: 25,
    fontWeight: "500",
    fontSize: 16,
    color: colors.white,
  },
  notSelectText: {
    fontWeight: "500",
    marginLeft: 25,
    fontSize: 16,
    color: colors.lightGray,
  },
  activeIcon: {
    width: 24,
    height: 24,
    tintColor: colors.white,
  },
  deactiveIcon: {
    width: 24,
    height: 24,
    tintColor: colors.lightGray,
  },
})
