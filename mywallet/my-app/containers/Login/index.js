import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function Login({onAuthenticate}) {

    return(
        <View>
            <Text style={styles.title}>Hello</Text>
            <TouchableOpacity 
            onPress={onAuthenticate}
            style={styles.btn}>
                <Text style={styles.text}>Login</Text>
            </TouchableOpacity>
        </View>
    )
}
    
    const styles = StyleSheet.create({
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
    
        }
    })