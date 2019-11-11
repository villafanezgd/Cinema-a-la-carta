import React, {useState} from 'react'
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { Button, Input, Item, Label } from 'native-base';


const Login = () => {


    return <View style={{
        flexDirection: 'column',
        justifyContent: 'center'
    }
        
    }>
        <ImagenLoginComponent />
        
        <EmailTextBoxComponent />

        <PasswordTextBoxComponent />

        <Button dark small><Text>Login</Text></Button>

        
    </View>
}

const styles = StyleSheet.create ({

    botonLogueo: {
        
    }
})


const ImagenLoginComponent = () => {

    return <Image source={require('../assets/Cinema.jpg')} />

    
}

const EmailTextBoxComponent = () => {
    return (
        
 <View>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input />
            </Item>
</View>
    )
    
}

const PasswordTextBoxComponent = () => {
    return <View >
        
        <TextInput style={{
            borderBottomWidth: 1
        }} placeholder="Password" secureTextEntry={true} ></TextInput>
        
    </View>
}

const validar = (text) => {
    
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
    if(reg.test(text) === false)
    {
    
    this.setState({email:text})
    return false;
      }
    else {
      this.setState({email:text})
      
    }
}

const NoTieneCuenta = () => {
    return <View>
        <Text>¿No tiene Cuenta? Haga click </Text>
        <Text style="">aqui</Text>
    </View>
}
export default Login