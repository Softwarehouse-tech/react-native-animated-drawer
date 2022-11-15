import React from "react"

import { createDrawerNavigator } from "@react-navigation/drawer"
import { StyleSheet, View } from "react-native"

import AnimatedDrawerContent from "./AnimatedDrawerContent"
import AnimatedComp from "./AnimatedComp"

const Drawer = createDrawerNavigator()

const colors = {}

const AnimatedDrawerProvider = ({ children, photo, fullName, items }) => (
  <View style={{ flex: 1, backgroundColor: colors.whiteGreen }}>
    <Drawer.Navigator
      useLegacyImplementation
      screenOptions={{
        drawerType: "slide",
        overlayColor: "transparent",
        swipeEnabled: false,
        headerShown: false,
        drawerStyle: {
          flex: 1,
          width: "50%",
          paddingRight: 10,
          backgroundColor: "transparent",
        },
        sceneContainerStyle: {
          backgroundColor: "transparent",
        },
      }}
      drawerContent={() => (
        <AnimatedDrawerContent
          photo={photo}
          fullName={fullName}
          items={items}
        />
      )}
    >
      <Drawer.Screen name="Drawer">
        {() => <AnimatedComp>{children}</AnimatedComp>}
      </Drawer.Screen>
    </Drawer.Navigator>
  </View>
)

export default AnimatedDrawerProvider

const styles = StyleSheet.create({})
