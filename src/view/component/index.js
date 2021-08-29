import React, {useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView, Dimensions} from 'react-native';
import {view} from '@risingstack/react-easy-state';
import {sys_colors, sys_styles, sys_text_styles} from '../../utils/constants';
import * as store from './store';
import {CustomButton, Divider, GlobalHeader, SpaceText} from '../../components';

const {width, height} = Dimensions.get('window');

export default view(({navigation}) => {
  useEffect(() => {
    store.initialized();
    return () => {
      store.cleanUp();
    };
  }, [navigation, store]);
  return (
    <View style={sys_styles.scaffold}>
      <GlobalHeader title="General Header" />
      <ScrollView style={sys_styles.scroll_container}>
        <Text style={styles.textInfo}>
          See detail code on "src/view/component/index.js"
        </Text>
        <Text style={styles.textTitle}>Button</Text>
        <View style={styles.container}>
          <CustomButton title="Primary" />
          <CustomButton title="Secondary" type="secondary" />
          <CustomButton title="25%" baseWidth="25%" />
          <CustomButton title="50%" baseWidth="50%" type="secondary" />
          <CustomButton title="75%" baseWidth="75%" />
          <CustomButton title="100%" baseWidth="100%" type="secondary" />
        </View>
        <Text style={styles.textTitle}>Divider</Text>
        <View style={{padding: 12}}>
          <Text style={styles.textInfo}>Standar</Text>
          <Divider />
          <Text style={styles.textInfo}>Custom Line Height</Text>
          <Divider lineHeight={3} />
          <Text style={styles.textInfo}>Custom Line Color</Text>
          <Divider lineHeight={3} color="black" />
          <Text style={styles.textInfo}>Custom Line Width</Text>
          <Divider lineHeight={3} color="black" width="50%" />
          <Text style={styles.textInfo}>Custom Container Height</Text>
          <Divider lineHeight={3} color="black" height={50} />
          <Text style={styles.textInfo}>Custom Line Align "flex-start"</Text>
          <Divider
            lineHeight={3}
            color="black"
            width="50%"
            align="flex-start"
          />
          <Text style={styles.textInfo}>Custom Line Align "flex-end"</Text>
          <Divider lineHeight={3} color="black" width="75%" align="flex-end" />
        </View>
        <Text style={styles.textTitle}>Space Text</Text>
        <View style={{padding: 12}}>
          <SpaceText left="standar" right="space text" />
          <SpaceText
            left="styling"
            right="container"
            containerStyle={{width: '75%', backgroundColor: 'yellow'}}
          />
          <SpaceText
            left="styling"
            right="left text"
            leftStyle={{fontSize: 16, color: 'red', textAlign: 'center'}}
          />
          <SpaceText
            left="styling"
            right="right text"
            rightStyle={{
              fontSize: 16,
              color: 'red',
              textAlign: 'right',
              fontWeight: 'bold',
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
});
const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    height: height * 0.5,
    padding: 12,
  },
  textInfo: {
    ...sys_text_styles.content_medium_black,
  },
  textTitle: {
    ...sys_text_styles.header_black,
    marginVertical: 10,
  },
});
