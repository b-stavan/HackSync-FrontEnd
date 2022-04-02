import {SafeAreaView} from 'react-native'
import React from 'react'
import Routes from './app/navigation/Routes'

const App = () => {
  return (
    <SafeAreaView style={{flex:1}}>
    <Routes/>
    </SafeAreaView>
  )
}

export default App