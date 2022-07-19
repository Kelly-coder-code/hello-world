import React,  { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, Button, TextInput, SafeAreaView, ActionButton, Card } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {useNavigation} from '@react-navigation/native';




// class Home extends Component{
    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }

export default function Home({setIsAuthenticated}) {
        // const navigation = useNavigation();
        return (
        <SafeAreaView style={styles.container}>

            <TouchableOpacity style={styles.receiveButton} onPress={() => navigation.navigate('QRcodeScan')}>
            <Text style={{ fontSize: 17, color: '#fff', fontWeight: '600', top: 4 }}>  Scan  </Text>
            <Icon name="qrcode" size={28} color="#fff" />
            </TouchableOpacity>
        
        
            <Text style={styles.title}>Welcome!</Text>
        
            {/* <TextInput
                style={styles.textInput}
                placeholder="Add a Note"
                placeholderTextColor="gray" /> */}
             <TouchableOpacity 
                 onPress={() => setIsAuthenticated(false)}
                 style={styles.btn}>
                 <Text style={styles.text}>Log out</Text>
             </TouchableOpacity>


            {/* <Card style={styles.accountCard} >
                <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                <TouchableOpacity style={styles.receiveButton} onPress={() => this.navigation.navigate('QRcodeScan')}>
                    <Text style={{ fontSize: 17, color: '#fff', fontWeight: '600', top: 4 }}>  Scan  </Text>
                    <Icon name="qrcode" size={28} color="#fff" />
                </TouchableOpacity>
                </View>
            </Card> */}
        </SafeAreaView>)
        }
        



  


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
    btn:{
        width: 200,
        alighItems: 'center',
        justifyContent: 'center',
        alighSelf: 'center',
        backgroundColor: '#0893FC',
        padding: 10,
        borderRadius: 5,
    },
    text:{
        color: '#fff',
        fontSize: 20,
        fontWeight: '500',
    },
    title:{
        fontSize: 50,
        fontWeight: '400',
        marginVertical: 30,
        textAlign: 'center',

    },
    textInput:{
        width: '90%',
        height: 50,
        padding: 10,
        borderRadius:15,
        backgroundColor:'#00000010',
        marginBottom: 20,
    },
    
    accountCard: {
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 20,
        maxHeight: 120,
        backgroundColor: '#0A0F24',
        borderColor: '#0A0F24',
        borderWidth: 0,
        borderRadius: 10,
        width: '90%',
        flexDirection: 'column'
      },
      receiveButton: {
        borderRadius: 40,
        backgroundColor: '#13182B',
        paddingVertical: 10,
        paddingHorizontal: 15,
        margin: 15,
        width: '42%',
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 10,
        flexDirection: 'row',
        alignContent: 'center'
      },
})