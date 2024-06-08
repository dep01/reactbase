import React, {useEffect} from 'react';
import {View, Pressable, StyleSheet, ScrollView} from 'react-native';
import {action, useStore, baseState} from './store';
import {Card, GlobalHeader} from 'rbase-components/molecules';
import {
  baseStyleConstant,
  paddingSizeConstant,
  textStyleConstant,
} from 'rbase-constants/styles_constant';
import {backgroundColorsConstant} from 'rbase-constants/colors_constant';
import {Paragraph, SpaceText} from 'rbase-components/atoms';
import {globalModal} from 'rbase-utils/global_store';
export default ({navigation}) => {
  const state = useStore(state => baseState(state));
  useEffect(() => {
    action.initialize();
    return () => {
      action.cleanUp();
    };
  }, [navigation, action]);
  return (
    <View style={baseStyleConstant.scaffold}>
      <GlobalHeader title="HOME" />
      <ScrollView style={baseStyleConstant.scrollContainer}>
        {state.usersData.map((val, index) => {
          return (
            <Pressable
              key={`pressable-users-${index}`}
              onPress={() =>
                globalModal({
                  title: 'Greeting',
                  message: `Hi ${val.name}, i hope`,
                })
              }>
              <Card
                height={50}
                borderRadius={10}
                title={val.name}
                padding={paddingSizeConstant.card}
                backgroundColor={backgroundColorsConstant.white}>
                <SpaceText left={val.id} right={val.email} />
                <Paragraph
                  title="Address"
                  content={val.address.street}
                  numberOfLines={3}
                />
              </Card>
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  titleText: {
    ...textStyleConstant.headerSmallPrimary,
  },
});
