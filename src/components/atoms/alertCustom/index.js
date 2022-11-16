import React from 'react';
import {StyleSheet, TouchableOpacity, Modal, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {sys_colors, sys_text_styles} from 'rbase-helpers/constants';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'rbase-helpers/responsive';
export const AlertCustom = ({
  visible = false,
  onRequestClose,
  onOk = null,
  onCancel = null,
  okText = '',
  cancelText = '',
  icon = '',
  iconColor = sys_colors.secondary,
  title = '',
  message = '',
  height = heightPercentageToDP(30),
}) => {
  return (
    <Modal transparent={true} visible={visible} onRequestClose={onRequestClose}>
      <View
        style={{
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={[styles.containerModal, {height: height + 30}]}>
          <View style={styles.containerTitle}>
            <Text style={{...sys_text_styles.header_medium_black}}>
              {title.toUpperCase()}
            </Text>
          </View>

          <View style={styles.containerContent}>
            {icon == '' ? null : (
              <Icon
                name={icon}
                color={iconColor}
                size={42}
                style={{marginBottom: 10}}
              />
            )}
            {message == '' ? null : (
              <Text style={{...sys_text_styles.content_medium_black}}>
                {message.toUpperCase()}
              </Text>
            )}
          </View>
          <View style={styles.containerAction}>
            {onOk == null ? null : (
              <TouchableOpacity onPress={onOk}>
                <View style={styles.buttonOk}>
                  <Text style={{...sys_text_styles.content_medium_black}}>
                    {okText.toUpperCase()}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
            {onCancel == null ? null : (
              <TouchableOpacity
                onPress={onCancel}>
                <View style={styles.buttonCancel}>
                  <Text style={{...sys_text_styles.content_medium_white}}>
                    {cancelText.toUpperCase()}
                  </Text>
                </View>
              </TouchableOpacity>
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
    backgroundColor: sys_colors.button.primary,
  },
  buttonOk: {
    width: widthPercentageToDP(35),
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: sys_colors.text.white,
    marginLeft: 5,
    borderColor: sys_colors.button.primary,
    borderWidth: 0.5,
  },
  containerModal: {
    backgroundColor: sys_colors.text.white,
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
    justifyContent: 'space-between',
    flexDirection: 'row-reverse',
    marginBottom:10
  },
});
