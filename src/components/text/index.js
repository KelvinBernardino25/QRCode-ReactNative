import React from 'react';
import {Text} from 'react-native';
import styles from './styles';

const text = ({children, type, style}) => (
  <Text style={[styles.text, style, type ? styles[`text-${type}`] : {}]}>
    {children}
  </Text>
);

export default text;
