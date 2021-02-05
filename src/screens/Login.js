import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import {tryLogin} from '../api';
import {doStuff} from '../api/auth';

export const Login = () => {
    const [username, setUsername] = useState("test user");
    const [password, setPassword] = useState("test password");

    return <View>
        <Text>John's Matrix Client</Text>
        <View styles={styles.inline}>
            <TextInput
                placeholder={"Username"}
                value={username}
                onChangeText={text=>setUsername(text)}
            />
        </View>
        <View styles={styles.inline}>
            <TextInput
                placeholder={"Password"}
                value={password}
                onChangeText={text=>setPassword(text)}
            />
        </View>
        <TouchableOpacity
            onPress={()=>tryLogin(username,password)}
        >
            <View>
                <Text>Login</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity
            onPress={()=>tryLogin(username,password)}
        >
            <View style={styles.doButton}>
                <Text style={styles.doText}>do Stuff</Text>
            </View>
        </TouchableOpacity>
    </View>
}

const styles = StyleSheet.create({
    inline: {
      display: 'flex',
      flexDirection: 'row'
    },
    doText:{
        color: "white"
    },
    doButton: {
        backgroundColor: "black"
    }
  });