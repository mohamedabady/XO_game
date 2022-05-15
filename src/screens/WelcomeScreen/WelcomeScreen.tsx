import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Button from '../../components/Button';
import Input from '../../components/Input';
import useWelcomeScreen from './useWelcomeScreen';

export default function WelcomeScreen() {
  const {handleChangeO, handleChangeX, handleStartGame, isStartDisabled} =
    useWelcomeScreen();
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>
        Welcome To X/O. Enter your names down here
      </Text>
      <View>
        <Input label={'Player 1 : X'} onChangeText={handleChangeX} />
        <Input label={'Player 2 : O'} onChangeText={handleChangeO} />
      </View>
      <Button
        buttonText={'Start Game'}
        onPress={handleStartGame}
        disabled={isStartDisabled}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  welcomeText: {
    textAlign: 'center',
    paddingHorizontal: 32,
    fontSize: 32,
    fontWeight: '800',
  },
});
