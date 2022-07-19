import React from 'react';
import {TouchableOpacityProps} from 'react-native';
import {
  Container,
  Title,
  Info,
  Version,
  VersionText,
  VersionContainer,
} from './styles';

interface Props extends TouchableOpacityProps {
  title: string;
  info?: string[];
  version?: string;
}

export function ListCard({title, info, version, ...rest}: Props) {
  return (
    <Container {...rest}>
      <Title>{title}</Title>
      {info && info.map((item, index) => <Info key={index}>{item}</Info>)}
      {version && (
        <Version>
          <VersionContainer>
            <VersionText> {version}</VersionText>
          </VersionContainer>
        </Version>
      )}
    </Container>
  );
}
