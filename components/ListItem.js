import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';

const ListItem = ({ item }) => {
  const [numTaps, setNumTaps] = useState(0);

  const handleTap = () => {
    setNumTaps(numTaps + 1);
  };

  useEffect(() => {
    let timer;
    if (numTaps === 2) {
      // Trigger your action here
      console.log(`Double tap detected on ${item.title}!`);
    } else {
      timer = setTimeout(() => {
        setNumTaps(0);
      }, 300);
    }

    return () => clearTimeout(timer);
  }, [numTaps]);

  return (
    <TouchableOpacity onPress={handleTap}>
      <View style={{ padding: 10 }}>
        <Text>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;
