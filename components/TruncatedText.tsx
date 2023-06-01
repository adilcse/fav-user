import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface TruncatedTextProps {
    text: string;
    maxLength: number;
    style?: object;
  }
  
  const TruncatedText: React.FC<TruncatedTextProps> = ({ text, maxLength, style= {} }) => {
    if (text.length <= maxLength) {
      return <Text>{text}</Text>;
    }
  
    const truncatedText = `${text.slice(0, maxLength)}...`;
  
    return <Text style={[styles.truncatedText, style]}>{truncatedText}</Text>;
  };
  
  const styles = StyleSheet.create({
    truncatedText: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    },
  });
  
  export default TruncatedText;
