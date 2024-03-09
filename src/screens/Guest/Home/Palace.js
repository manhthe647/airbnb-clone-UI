import { useState } from "react";
import { View, Text, Image, Button } from "react-native";
import Carousel from 'react-native-reanimated-carousel';

const Palace = () => {
    const width = 800;
    const carouselItems = [
        {
            image: {
                uri: 'https://images.unsplash.com/photo-1678436748951-ef6d381e7a25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDN8YWV1NnJMLWo2ZXd8fGVufDB8fHx8fA%3D%3D',
            },
            ar: 0.7,
        },
        {
            image: {
                uri: 'https://images.unsplash.com/photo-1680813977591-5518e78445a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
            ar: 0.67,
        },
        {
            image: {
                uri: 'https://images.unsplash.com/photo-1679508056887-5c76269dad54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
            ar: 0.8,
        },
    ];
    const [data,SetData] = useState(carouselItems)
    

    return (
        <View>
            <Text>a</Text>
            <Carousel
                loop
                width={width}
                height={width / 2}
                enabled
                autoPlay={true}
                data={data}
                scrollAnimationDuration={1000}
                onSnapToItem={(index) => console.log('current index:', index)}
                renderItem={({ item }) => (
                    <View style={{ flex: 1, borderWidth: 1, justifyContent: 'center' }}>
                        <Image source={item.image} style={{ width: '100%', height: '100%' }} />
                    </View>
                )}
            />
        </View>
    );
}
export default Palace;