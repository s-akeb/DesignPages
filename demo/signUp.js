// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
// import React, { useState } from "react";



// // export default function App() {

//   export default function App({navigation}) {

//    const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [mobNum, setMobNum] = useState("");
//   const [password, setPassword] = useState("");
//   // console.log(email,password)


//   const submit = () => {
//     // return Alert.alert(email, password)
//     if (firstName === "sakeb" && lastName === "ahmad" && email === "xyz@123" && mobNum === "1234" && password === "ssss" ) {
//       Alert.alert(`Thank you ${email}`);
//       navigation.navigate("Home", {email: `${email}`});
//       setFirstName(""); 
//       setLastName("");
//       setEmail("");
//       setMobNum("");
//       setPassword("");
//     } else {
//       Alert.alert(`Email and Password is not correct`);
//     }
//   };


//   return (

//     <View style={styles.container}>

//       <View style={styles.formContainer}>

//       <Text style={styles.title}>Sign Up</Text>

//       <View style={styles.inputWrapper}>
//       <TextInput style={styles.inputStyle} placeholder='firstName'
//       autoCapitalize="none"
//       autoCorrect={false}
//       value={firstName}
//       onChangeText={(data) => setFirstName(data)}
//       />
//       </View>

//       <View style={styles.inputWrapper}>
//       <TextInput style={styles.inputStyle} placeholder='lastName' 
//       autoCapitalize="none"
//       autoCorrect={false}
//       value={lastName}
//       onChangeText={(data) => setLastName(data)}
//       />
//       </View>
//       <View style={styles.inputWrapper}>
//       <TextInput style={styles.inputStyle} placeholder='email' 
//       autoCapitalize="none"
//       autoCorrect={false}
//       value={email}
//       onChangeText={(data) => setEmail(data)}
//       />
//       </View>
//       <View style={styles.inputWrapper}>
//       <TextInput style={styles.inputStyle} placeholder='mobNum' 
//       value={mobNum}
//       onChangeText={(data) => setMobNum(data)}
//       />
//       </View>
//       <View style={styles.inputWrapper}>
//       <TextInput style={styles.inputStyle} placeholder='password' 
//       autoCapitalize="none"
//       autoCorrect={false}
//       secureTextEntry={true}
//       value={password}
//       onChangeText={(data) => {
//         setPassword(data);
//       }}
//       />
//       </View>

//       <TouchableOpacity onPress={() => submit()} style={styles.submitBtn}>
//         <Text style={styles.submitBtnTxt}>Submit</Text>
//       </TouchableOpacity>
//       </View>
//       <StatusBar style="light" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#2C3333',
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingHorizontal: 15,
//   },
//   formContainer: {
//     backgroundColor: '#F5EDDC',
//     padding: 20,
//     borderRadius: 20,
//     width: '100%',
//   },
//   title: {
//     color: '#16213E',
//     fontSize: 26,
//     fontWeight: '400',
//     marginBottom: 15,
//   },
//   inputWrapper: {
//     marginBottom: 15,
//   },
//   inputStyle: {
//     borderColor: '#16213E',
//     borderWidth: 1,
//     borderRadius: 10,
//     padding: 10,
//   },
//   errorTxt: {
//     fontSize: 12,
//     color: '#FF0D10',
//   },
//   submitBtn: {
//     backgroundColor: '#395B64',
//     padding: 10,
//     borderRadius: 15,
//     justifyContent:'center',
//   },
//   submitBtnTxt: {
//     color: '#fff',
//     textAlign: 'center',
//     fontSize: 18,
//     fontWeight: '700'
//   },
// });
