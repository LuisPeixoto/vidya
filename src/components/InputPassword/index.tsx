import React, {useState} from 'react';
import {
  Control,
  Controller,
  DeepRequired,
  FieldError,
  FieldErrorsImpl,
  Merge,
} from 'react-hook-form';
import {TextInputProps} from 'react-native';
import {
  Container,
  TextInput,
  Icon,
  ButtonVisibility,
  TextInputError,
} from './styles';

interface Props extends TextInputProps {
  name: string;
  error: Merge<FieldError, FieldErrorsImpl<DeepRequired<any>>> | undefined;
  control: Control;
}

export function InputPassword({control, name, error, ...rest}: Props) {
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
    <>
      {error && <TextInputError>{error}</TextInputError>}
      <Container isFocused={isFocused} isErrored={error}>
        <Icon name="lock" isFocused={isFocused} />
        <Controller
          control={control}
          name={name}
          render={({field: {onChange, value}}) => (
            <TextInput
              value={value}
              isFocused={isFocused}
              onChangeText={onChange}
              onFocus={() => handleInputFocus()}
              onBlur={() => handleInputBlur()}
              secureTextEntry={showPassword}
              {...rest}
            />
          )}
        />
        <ButtonVisibility onPress={() => handleShowPassword()}>
          <Icon name={showPassword ? 'eye' : 'eye-off'} isFocused={isFocused} />
        </ButtonVisibility>
      </Container>
    </>
  );
}
