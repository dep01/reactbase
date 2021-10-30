import React, {useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView, Dimensions} from 'react-native';
import {view} from '@risingstack/react-easy-state';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {sys_colors, sys_styles, sys_text_styles} from '../../utils/constants';
import * as store from './store';
import {
  CustomButton,
  CustomInput,
  Divider,
  GlobalHeader,
  Paragraph,
  SpaceText,
} from '../../components';

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
          <CustomButton title="Secondary" type={CustomButton.Types.SECONDARY} />
          <CustomButton title="25%" baseWidth="25%" />
          <CustomButton title="50%" baseWidth="50%" type="secondary" />
          <CustomButton title="75%" baseWidth="75%" />
          <CustomButton title="100%" baseWidth="100%" type="secondary" />
        </View>
        <Text style={styles.textTitle}>Divider</Text>
        <View style={styles.containerPadding}>
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

        <Text style={styles.textTitle}>Input Text</Text>
        <View style={styles.containerPadding}>
          <CustomInput
            // initial value for margin top in 5 but you can set the style
            value={store.state.inputText} //this is custom input you must have state for this value
            placeholder="Standar Input Text With Placeholder"
            onChangeText={(val) => store.handleTextChange(val)} //this is custom input you must have handle for change this value
          />
          <CustomInput
            value={store.state.inputText}
            onChangeText={(val) => store.handleTextChange(val)}
            placeholder="Type any..."
            label="Text Input With Label"
          />
          <CustomInput
            value={store.state.inputText}
            onChangeText={(val) => store.handleTextChange(val)}
            placeholder="Type any..."
            label="Styling Container"
            containerStyle={{backgroundColor: '#b8b8b8', marginTop: 20}} // standar view styling
          />
          <CustomInput
            value={store.state.inputText}
            onChangeText={(val) => store.handleTextChange(val)}
            placeholder="Type any..."
            label="Styling Label"
            labelStyle={{color: 'red', fontWeight: 'bold'}} // standar text styling
          />
          <CustomInput
            value={store.state.inputText}
            onChangeText={(val) => store.handleTextChange(val)}
            placeholder="Type any..."
            label="Styling Input"
            inputStyle={{color: 'green', fontWeight: 'bold'}} // standar text styling
          />
          <CustomInput
            value={store.state.inputText}
            onChangeText={(val) => store.handleTextChange(val)}
            placeholder="Type any..."
            label="Change Keyboard Type"
            keyboardType="number-pad" // you can open react native documentation for see the option
          />
          <CustomInput
            value={store.state.inputText}
            onChangeText={(val) => store.handleTextChange(val)}
            placeholder="Type any..."
            label="Secure Text"
            secureTextEntry={true} // bolean to set text is show or hide, you can make a state
          />
          <CustomInput
            value={store.state.inputText}
            onChangeText={(val) => store.handleTextChange(val)}
            placeholder="Type any..."
            label="Add left or right object"
            left={
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon name="user" size={16} />
              </View>
            } // pass the object here, component doesn't have base style. please stylng by self
            right={
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon name="eye" size={16} />
              </View>
            } // pass the object here, component doesn't have base style. please stylng by self
          />
          <CustomInput
            value={store.state.inputText}
            onChangeText={(val) => store.handleTextChange(val)}
            placeholder="Type any..."
            label="Set Max Length to 10"
            maxLength={10}
          />
          <CustomInput
            value={store.state.inputText}
            onChangeText={(val) => store.handleTextChange(val)}
            placeholder="Type any..."
            label="Number Line Set"
            numberOfLines={3}
          />
        </View>
        <Text style={styles.textTitle}>Paragraph</Text>
        <View style={styles.containerPadding}>
          <Paragraph
            title="Standar Paragraph" // only string for title and content
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          />
          <Divider />
          <Paragraph
            title="Max Line Paragraph"
            numberOfLines={2} // set max line for content if numberOfLines no set or set null the content will be show all text
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          />
          <Divider />
          <Paragraph
            title="Styling Container Paragraph"
            numberOfLines={2}
            style={{backgroundColor: '#f9f9f9f9'}} // standar view style
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          />
          <Divider />
          <Paragraph
            title="Styling Title Paragraph"
            numberOfLines={2}
            style={{backgroundColor: '#f9f9f9f9'}}
            titleStyle={{color: 'red'}} // standar text style
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          />
          <Divider />
          <Paragraph
            title="Styling Content Paragraph"
            numberOfLines={2}
            style={{backgroundColor: '#f9f9f9f9'}}
            titleStyle={{color: 'red'}}
            contentStyle={{color: 'green', fontWeight: 'bold'}} // standar text style
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          />
        </View>
        <Text style={styles.textTitle}>Space Text</Text>
        <View style={styles.containerPadding}>
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
    minHeight: height * 0.5,
    padding: 12,
  },
  containerPadding: {
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
