import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './styles';

const Button = ({children, type, style, onPress}) => (
  <TouchableOpacity
    style={[styles.container, style, type ? styles[`button-${type}`] : {}]}
    onPress={onPress}>
    <Text style={[styles.text, type ? styles[`text-${type}`] : {}]}>
      {children}
    </Text>
  </TouchableOpacity>
);

export default Button;
