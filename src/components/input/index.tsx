import React, {useState} from 'react';
import {TextInputProps} from 'react-native';
import {
  Control,
  Controller,
  DeepRequired,
  FieldError,
  FieldErrorsImpl,
  Merge,
} from 'react-hook-form';
import IconType from 'react-native-vector-icons/MaterialIcons';
import {Container, TextInput, Icon, TextInputError} from './styles';

interface Props extends TextInputProps {
  name: string;
  error: Merge<FieldError, FieldErrorsImpl<DeepRequired<any>>> | undefined;
  control: Control;
  icon?: React.ComponentProps<typeof IconType>['name'];
  mask?: (value: string) => string;
  blur?: () => void;
}

export function Input({
  icon = '',
  control,
  name,
  error,
  mask,
  blur,
  ...rest
}: Props) {
  const [isFocused, setIsFocused] = useState(false);

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputBlur() {
    setIsFocused(false);
    blur && blur();
  }

  return (
    <>
      {error && <TextInputError>{error}</TextInputError>}
      <Container isFocused={isFocused} isErrored={error}>
        {icon && <Icon name={icon} isFocused={isFocused} />}
        <Controller
          control={control}
          name={name}
          render={({field: {onChange, value}}) => (
            <TextInput
              value={mask && value ? mask(value) : value}
              onChangeText={onChange}
              autoCapitalize="none"
              autoCorrect={false}
              isFocused={isFocused}
              onFocus={() => handleInputFocus()}
              onBlur={() => handleInputBlur()}
              {...rest}
            />
          )}
        />
      </Container>
    </>
  );
}
