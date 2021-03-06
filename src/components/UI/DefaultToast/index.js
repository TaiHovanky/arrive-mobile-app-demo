// Vendors
import React from 'react';
import { View, Text } from 'react-native';

// Styles
import styles from './styles.js';

const defaultToast = props => (
    <View
      {...props}
      style={[
        styles.toast,
        props.showToast ? styles.showToast : styles.hideToast,
        props.style,
        props.valid ? styles.toastSuccess : styles.toastError
      ]}>
        <Text
          style={[
            props.textStyle,
            styles.toast__text
          ]}
        >{props.children}</Text>
    </View>
)

export default defaultToast;
