import React, {useState} from 'react';
import {View, TextInput} from 'react-native';
import styles from './styles';

function Generator() {
  const [message, setMessage] = useState();
  return (
    <View style={styles.container}>
      <View />
      <TextInput
        style={styles.textimput}
        value={message}
        onChange={text => setMessage(text)}
      />
    </View>
  );
}

export default Generator;
