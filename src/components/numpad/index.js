import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
	Text,
	View,
	TouchableOpacity,
	ViewPropTypes
} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Numpad = (props) => {
    const [number, setNumber] = useState("");
    let {pressMode, color, onPress, onComplete, rowStyle, cellStyle} = props;

    const Backspace = () => {
		return (
			<TouchableOpacity accessibilityLabel='backspace' style={styles.backspace} onPress={() => { onTap('back') }}>
				<Icon name="backspace" color={color} size={25}/>
			</TouchableOpacity>
		);
	}
	
	const Enter = () => {
		return (
			<TouchableOpacity accessibilityLabel='enter' style={styles.backspace} onPress={() => { onTap('enter') }}>
				<Icon name="check-circle" color={color} size={25}/>
			</TouchableOpacity>
		);
	}

	const Row = (numbersArray) => {
		let cells = numbersArray.map((val) => Cell(val));
		return (
			<View style={[styles.row, rowStyle]}>
				{cells}
			</View>
		);
	}

	const Cell = (symbol) => {
		return (
			<TouchableOpacity style={[styles.cell, cellStyle]} key={symbol} accessibilityLabel={symbol.toString()} onPress={() => { onTap(symbol.toString()) }}>
				<Text style={[styles.number, { color: color }]}>{symbol}</Text>
			</TouchableOpacity>
		);
	}

	const onTap = (val) => {
		if (pressMode === 'string') {
			let curText = number;
			if (isNaN(val)) {
				if (val === 'back') {
					curText = curText.slice(0, -1);
				} else if (val === 'enter') {
					console.log(val);
					onComplete();
					return;
				} else {
					if (curText.length < 6) curText += val;
				}
			} else {
				if (curText.length < 6) curText += val;
			}
			setNumber(curText);
			onPress(curText);
		} else {
			onPress(val);
		}
	}

    return(
        <View style={[styles.container]}>
            {Row([1, 2, 3])}
            {Row([4, 5, 6])}
            {Row([7, 8, 9])}
            <View style={[styles.row, rowStyle]}>
                {Backspace()}
                {Cell(0)}
				{Enter()}
            </View>
        </View>
    );
    
}

Numpad.propType = {
    pressMode: PropTypes.oneOf(['string', 'char']),
    color: PropTypes.string,
    onPress: PropTypes.func.isRequired,
    onComplete: PropTypes.func.isRequired,
    rowStyle: ViewPropTypes.style,
    cellStyle: ViewPropTypes.style
}

Numpad.defaultProps = {
    pressMode: 'string',
    color: 'white',
}

export default Numpad;