import React, {useEffect} from 'react';
import {ActivityIndicator, Image, View, StyleSheet} from 'react-native';
import {icon, baseColor} from '../utils/constants';

export default ({navigation}) => {
  const timer = async () => {
    setTimeout(() => {
      navigation.replace('/example');
    }, 2000);
  };
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
    timer();
  }, [timer]);
  return (
    <View style={styles.container}>
      <Image resizeMode="contain" source={icon.ic_react} style={styles.image} />
      <ActivityIndicator
        size={32}
        color={baseColor.body}
        style={styles.loading}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: baseColor.body,
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
  },
  image: {height: 150, width: 150},
  loading: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
  },
});
