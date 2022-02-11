import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView , Alert, Button} from 'react-native';

export default function App() {
  

  return (
    <SafeAreaView style={styles.container}>
      <Button 
      color= 'green' 
      title="click me " 
      onPress={() => 
      Alert.prompt("My title", "My message", text => console.log(text))}/>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textSize:{
    fontSize: 20
  }
});
    
    

    
