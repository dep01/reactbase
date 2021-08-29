import React, {useEffect} from 'react';
import {ActivityIndicator, Image, View, StyleSheet} from 'react-native';
import {static_routes} from '../routes/static_routes';
import {sys_icons, sys_colors} from '../utils/constants';

export default ({navigation}) => {
  const timer = async () => {
    setTimeout(() => {
      navigation.replace(static_routes.signin);
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
      <Image
        resizeMode="contain"
        source={sys_icons.ic_react}
        style={styles.image}
      />
      <ActivityIndicator
        size={32}
        color={sys_colors.primary}
        style={styles.loading}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: sys_colors.primary,
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
