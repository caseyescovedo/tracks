import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = '';
  const [password, setPassword] = '';
  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3>Sign Up</Text>
      </Spacer>

      <Spacer>
        <Input
          label='Email'
          value={email}
          onChangeText={setEmail}
          // shouldn't auto capitalize or autocorrect email or password
          autoCapitalize='none'
          autoCorrect={false}
        />
      </Spacer>

      <Spacer>
        <Input
          // dont need to write the prop name, default is true
          secureTextEntry
          label='Password'
          value={password}
          onChangeText={setPassword}
          // shouldn't auto capitalize or autocorrect email or password
          autoCapitalize='none'
          autoCorrect={false}
        />
      </Spacer>

      <Button title='Submit' />
    </View>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 250,
  },
});

export default SignupScreen;
