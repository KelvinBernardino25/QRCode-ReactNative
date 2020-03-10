import React from 'react';
import {View, BackHandler} from 'react-native';
import {Button, Text} from '../../components';
import styles from './styles';

function Home({navigation}) {
  function QRCodeCreate() {
    navigation.navigate('create');
  }

  function QRCodeRead() {
    navigation.navigate('loader');
  }

  return (
    <View>
      <View style={styles.container}>
        <View />
        <Text type={'title'}>QR Code</Text>
        <View style={styles.containerButton}>
          <Button onPress={QRCodeCreate}>Create</Button>
          <Button style={styles.button} onPress={QRCodeRead}>
            Read
          </Button>
          <Button
            type={'outline'}
            style={styles.button}
            onPress={() => BackHandler.exitApp()}>
            Exit
          </Button>
        </View>
      </View>
      <View />
    </View>
  );
}

export default Home;
