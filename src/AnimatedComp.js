import * as React from "react"
import Animated, { Extrapolate } from "react-native-reanimated"
import { useDrawerProgress } from "@react-navigation/drawer"
import { Dimensions, StyleSheet } from "react-native"

const AnimatedComp = ({ children }) => {
  const progress = useDrawerProgress()

  const scale = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.7],
    extrapolate: Extrapolate.CLAMP,
  })

  const borderRadius = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [0, 15],
    extrapolate: Extrapolate.CLAMP,
  })

  const animatedStyle = {
    borderRadius,
    transform: [{ scale }],
  }

  return (
    <Animated.View style={[styles.navigationContainer, animatedStyle]}>
      {children}
    </Animated.View>
  )
}

export default AnimatedComp

const styles = StyleSheet.create({
  navigationContainer: {
    flex: 1,
    width: Dimensions.get("window").width,
    backgroundColor: "#fff",
    overflow: "hidden",
  },
})
