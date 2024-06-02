import React, {useEffect} from 'react';
import {View, Image} from 'react-native';
import {action} from './store';
import {iconConstant} from 'rbase-constants/icons_constant';
import {baseStyleConstant} from 'rbase-constants/styles_constant';

export default ({navigation}) => {
  useEffect(() => {
    action.initialize(navigation);
    return () => {
      action.cleanUp();
    };
  }, [navigation, action]);
  return (
    <View style={baseStyleConstant.containerCenterScreen}>
      <Image
        source={iconConstant.icLoading}
        resizeMode={'contain'}
        style={{width: '40%'}}
      />
    </View>
  );
};
