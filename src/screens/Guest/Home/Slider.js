import {Animated, FlatList, StyleSheet, Text, View, Button} from 'react-native';
import React, {useRef, useState} from 'react';
import listImage from '../../../assets/data/listImage';
import SlideItem from './SlideItem';
import Pagination from './Pagination';

const Slider = () => {
  const [index, setIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;

  const handleOnScroll = event => {
    Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              x: scrollX,
            },
          },
        },
      ],
      {
        useNativeDriver: false,
      },
    )(event);
  };

  const handleOnViewableItemsChanged = useRef(({viewableItems}) => {
    // console.log('viewableItems', viewableItems);
    setIndex(viewableItems[0].index);
  }).current;

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

  return (
    <View>

      <FlatList
        data={listImage}
        renderItem={({item}) => <SlideItem item={item} />}
        horizontal
        pagingEnabled
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onScroll={handleOnScroll}
        onViewableItemsChanged={handleOnViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
      />
      <Pagination data={listImage} scrollX={scrollX} index={index} />
      <Button title='Order' style={styles.button} />
      <Text></Text>
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({
    button:{
       marginBottom: 30,
       paddingBottom: 30
    }
});