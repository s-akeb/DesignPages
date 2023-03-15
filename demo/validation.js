// // Yuotube Linkinghttps://www.youtube.com/watch?v=LtfSb5Yk6a8


// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, TextInput, TouchableOpacity, Linking } from 'react-native';

// //Formic
// import { Formik } from 'formik'; 
// import * as Yup from 'yup'


// const SignupSchema = Yup.object().shape({
//   name: Yup.string()
//     .min(2, 'Too Short!')
//     .max(50, 'Too Long!')
//     .required('Please enter full name'),
//   email: Yup.string().email('Invalid email').required('Required'),
// });


// export default function App() {
//   return (
//     <Formik initialValues={{
//       name: '',
//       email: '',
//       mobile: '',
//       password: '',
//       confirmPassword: '',
//     }}
//     validationSchema={SignupSchema}
//     >
     
//     {({values, errors, touched, handleChange, setFieldTouched, isValid, handleSubmit}) => (

 
//     <View style={styles.container}>
//       <View style={styles.formContainer}>
//       <Text style={styles.title}>Sign Up</Text>
//       <View style={styles.inputWrapper}>
//       <TextInput style={styles.inputStyle} placeholder='Full Name' value={values.name} onChangeText={handleChange('name')}/>
//       {errors.name && (
//         <Text style={styles.errorTxt}>{errors.name}</Text>
//       )}
//       </View>
//       <View style={styles.inputWrapper}>
//       <TextInput style={styles.inputStyle} placeholder='Email Address' />
//       </View>
//       <View style={styles.inputWrapper}>
//       <TextInput style={styles.inputStyle} placeholder='Mobile No.'/>
//       </View>
//       <View style={styles.inputWrapper}>
//       <TextInput style={styles.inputStyle} placeholder='Password'/>
//       </View>
//       <View style={styles.inputWrapper}>
//       <TextInput style={styles.inputStyle} placeholder='Confirm Password' />
//       </View>

//       <TouchableOpacity onPress={() => {}} style={styles.submitBtn}>
//         <Text style={styles.submitBtnTxt}>Submit</Text>
//       </TouchableOpacity>
//       </View>
//       <StatusBar style="light" />
//     </View>
//        )}
//     </Formik>
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
