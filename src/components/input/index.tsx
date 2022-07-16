import React, {useState} from 'react';
import {TextInputProps} from 'react-native';
import IconType from 'react-native-vector-icons/MaterialIcons';
import {Container, TextInput, Icon} from './styles';

interface Props extends TextInputProps {
  icon: React.ComponentProps<typeof IconType>['name'];
}

export function Input({icon, ...rest}: Props) {
  const [isFocused, setIsFocused] = useState(false);

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputBlur() {
    setIsFocused(false);
  }

  return (
    <Container isFocused={isFocused}>
      <Icon name={icon} isFocused={isFocused} />

      <TextInput
        isFocused={isFocused}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        {...rest}
      />
    </Container>
  );
}
