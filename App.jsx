import React from 'react';
import { Text, View } from 'react-native';
function App(){
return  (<View
style={{
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#ecf0f1',
  padding: 8,
}}
>
  <Text style={{
    fontSize: 20,
    fontWeight: 'bold',
  }}>Test app</Text>
</View>)
}


export default App;
