## Preview

<img src="https://github.com/Softwarehouse-tech/react-native-animated-drawer/blob/main/readme/preview.gif" width="250" />

## Installation

```bash
yarn add @softwarehouse/react-native-animated-drawer
```

## Usage

```jsx
import { AnimatedDrawerProvider } from "react-native-animated-drawer"

const App = () => {
  const items = [
    {
      text: "Aydınlatma",
      icon: require("../assets/lighting.png"),
      onPress: () => {
        alert("here")
      },
    },
    {
      text: "İletişim",
      icon: require("../assets/lighting.png"),
      onPress: () => {
        alert("here")
      },
    },
  ]

  return (
    <NavigationContainer>
      <AnimatedDrawerProvider
        items={items}
        photo={require("../assets/women.png")}
        fullName="İpek Muhammet"
      >
        {...screns}
      </AnimatedDrawerProvider>
    </NavigationContainer>
  )
}
```
