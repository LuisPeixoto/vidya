import React, {useState} from 'react';
import {TextInputProps} from 'react-native';
import {Container, TextInput, Icon, ButtonVisibility} from './styles';

export function InputPassword({...rest}: TextInputProps) {
  const [showPassword, setShowPassword] = useState(true);
  const [isFocused, setIsFocused] = useState(false);

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputBlur() {
    setIsFocused(false);
  }

  function handleShowPassword() {
    setShowPassword(prevState => !prevState);
  }

  return (
    <Container isFocused={isFocused}>
      <Icon name="lock" isFocused={isFocused} />

      <TextInput
        isFocused={isFocused}
        onFocus={() => handleInputFocus()}
        onBlur={() => handleInputBlur()}
        secureTextEntry={showPassword}
        {...rest}
      />

      <ButtonVisibility onPress={() => handleShowPassword()}>
        <Icon name={showPassword ? 'eye' : 'eye-off'} isFocused={isFocused} />
      </ButtonVisibility>
    </Container>
  );
}
