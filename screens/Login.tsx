import React, { useState,useContext } from 'react';
import { Alert, Pressable, Text, TextInput, View } from 'react-native';
import { styles } from '../styles/globalStyle'
import { UserLogin } from '../functions/UserLogin'
import { UserContext } from '../App';
import { IJsonResponse, IUser } from '../functions/Interfaces';
import { SafeAreaView } from 'react-native';

// export const UserContext = createContext<IJsonResponse | null>(null)
export default function Login({navigation}:any) {
  const [user, setUser] = useState<IUser>({} as IUser)
  const globalUser = useContext(UserContext)


  const handleUser= (name:string) => {
    setUser({...user,name})
  }
  const handlePassword= (password:string) => {
    setUser({...user,password})
  }

  const submitLogin = () => {
    let data : IJsonResponse = UserLogin(user)
    if(data.success)
    {
      globalUser.toggleUser(data.data)
      navigation.navigate('Products')
    }else
    {
      Alert.alert('Error',data.error ? data.error : 'Unknown Error')
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Login</Text>
        <Text style={styles.descriptionText}>Dummy Text Dummy Text Dummy Text Dummy Text</Text>
      </View>
        <View  style={styles.loginBoxView} >
          <TextInput style={styles.inputLoginBox} placeholder="Username" value={user.name}  onChangeText={handleUser} />
        </View>
        <View  style={styles.loginBoxView} >
          <TextInput style={styles.inputLoginBox} placeholder="Password" value={user.password} secureTextEntry={true}  onChangeText={handlePassword} />
        </View>
      <Pressable style={styles.buttonStartLogin} onPress={() =>{submitLogin()}}>
        <Text style={styles.loginText}>Submit</Text>
      </Pressable>
        
    </SafeAreaView>
  );

}
