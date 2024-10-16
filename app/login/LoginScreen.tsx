import React from 'react';
import { View, StyleSheet } from 'react-native';
import FormInput from '@/components/inputs/FormInput';
import MainButton from '@/components/buttons/MainButton';
import { withSizes } from '@/styles/Sizes';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <FormInput label={'Correo'} />
      <FormInput label={'Contraseña'} />
      <MainButton text={'Iniciar session'} onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: withSizes['30'],
  },
});

export default LoginScreen;
