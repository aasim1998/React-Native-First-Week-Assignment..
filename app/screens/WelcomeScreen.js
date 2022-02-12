import React from 'react';
import {ImageBackground , StyleSheet , View, Image, Text} from 'react-native';

function WelcomeScreen(props) {
    return (
        <ImageBackground 
        style={styles.background}
        source={require("../assets/background.jpg")}>
            <View style={styles.logocontainer}>
            <Image
            style={styles.logo}

            source={require("../assets/logo-red.png")}/>
            <Text>Sell what you don't need</Text>

            </View>
            
            <View style={styles.loginbutton}>

            </View>
            <View style={styles.registerbutton}>

            </View>

        </ImageBackground>
        
    );
}

const styles = StyleSheet.create({
    background:{
        flex:1,
        justifyContent:'flex-end',
        paddingBottom:20,
        alignItems: 'center'
        
    },
    loginbutton:{
        width:'100%',
        height:70,
        backgroundColor:'#fc5c65'
    },

    logo:{
        width:100,
        height:100,
        
    },

    logocontainer:{
        position:'absolute',
        top:70,
        alignItems:'center'


    },
    


    registerbutton:{
        width:'100%',
        height:70,
        backgroundColor:'#4ecdc4'
    }
        
        

    
    
})

export default WelcomeScreen;