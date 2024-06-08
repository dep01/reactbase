import React from 'react';
import {StyleSheet, Modal, View, Text, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  backgroundColorsConstant,
  borderColorsConstant,
  buttonColorsConstant,
  iconColorsConstant,
  textColorsConstant,
} from 'rbase-constants/colors_constant';
import {textStyleConstant} from 'rbase-constants/styles_constant';

import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'rbase-utils/responsive';

const alertCustomPayload = {
  onRequestClose:null,
  visible: false,
  onOk: null,
  onCancel: null,
  okText: '',
  cancelText: '',
  icon: '',
  iconColor: iconColorsConstant.secondary,
  title: '',
  message: '',
  height: heightPercentageToDP(30),
  align: 'left',
};
export const AlertCustom = (params = alertCustomPayload) => {
  const payload = {...alertCustomPayload,...params}
  return (
    <Modal
      transparent={true}
      visible={payload.visible}
      onRequestClose={payload.onRequestClose}>
      <View
        style={{
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={[styles.containerModal, {height: payload.height + 30}]}>
          <View style={styles.containerTitle}>
            <Text style={textStyleConstant.headerMediumPrimary}>
              {payload.title.toUpperCase()}
            </Text>
          </View>

          <View style={styles.containerContent}>
            {payload.icon == '' ? null : (
              <Icon
                name={payload.icon}
                color={payload.iconColor}
                size={42}
                style={{marginBottom: 10}}
              />
            )}
            {payload.message == '' ? null : (
              <Text
                style={[
                  textStyleConstant.contentMediumPrimary,
                  {
                    textAlign: payload.align,
                  },
                ]}>
                {payload.message.toUpperCase()}
              </Text>
            )}
          </View>
          <View style={styles.containerAction}>
            {payload.onOk == null ? null : (
              <Pressable onPress={payload.onOk}>
                <View style={styles.buttonOk}>
                  <Text style={textStyleConstant.contentMediumPrimary}>
                    {payload.okText.toUpperCase()}
                  </Text>
                </View>
              </Pressable>
            )}
            {payload.onCancel == null ? null : (
              <Pressable onPress={payload.onCancel}>
                <View style={styles.buttonCancel}>
                  <Text style={textStyleConstant.contentMediumSecondary}>
                    {payload.cancelText.toUpperCase()}
                  </Text>
                </View>
              </Pressable>
            )}
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  buttonCancel: {
    width: widthPercentageToDP(35),
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
    backgroundColor: buttonColorsConstant.primary,
  },
  buttonOk: {
    width: widthPercentageToDP(35),
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: textColorsConstant.secondary,
    marginRight: 5,
    borderColor: borderColorsConstant.primary,
    borderWidth: 0.5,
  },
  containerModal: {
    backgroundColor: backgroundColorsConstant.white,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    width: widthPercentageToDP(80),
    elevation: 30,
    maxHeight: heightPercentageToDP(60),
    padding: 12,
  },
  containerTitle: {
    width: '100%',
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerContent: {
    width: '100%',
    height: '60%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerAction: {
    height: '20%',
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 10,
  },
});
