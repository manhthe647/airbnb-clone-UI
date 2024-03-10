import { useState } from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { Card, Button, Icon } from '@rneui/themed';
import AntDesign from 'react-native-vector-icons/AntDesign';

import { favoriteListFakeData } from "../../../assets/data/favoriteListData";

const Favorite = () => {
    const [favoriteList, setFavoriteList] = useState(favoriteListFakeData);
    console.log(favoriteList);
    return (
        <SafeAreaView style={styles.container}>
            {favoriteList.map((item, index) => {
                return (
                    <Card key={index}
                        containerStyle={{
                            width: '100%',
                            borderRadius: 12,
                            padding: 0,
                            margin: 0,
                            marginBottom: 16
                        }}
                    >
                        <View style={{ position: 'relative' }}>
                            <Card.Image style={{ padding: 0, borderTopLeftRadius: 12, borderTopRightRadius: 12 }} source={item.imagePath} />
                            <View style={{ position: 'absolute', top: 12, right: 12 }}>
                                <AntDesign name="heart" color="red" size={24} />
                            </View>
                        </View>
                        <View style={{
                            padding: 8
                        }}>
                            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ fontWeight: 500 }}>
                                    {item.title}  aaaaaaaaaaaaaaa
                                </Text>
                                <Text >
                                    <AntDesign name="star" color="#3d3d3d" /> {item.rating} ({item.ratingCount})
                                </Text>
                            </View>
                            <Text style={{ marginBottom: 4 }}>
                                {item.desc}
                            </Text>
                            <Text>
                               <View style={{ fontWeight: 500 }}> {item.price}$ </View>/ đêm
                            </Text>
                        </View>
                    </Card>
                )
            })}
        </SafeAreaView>
    );
}

export default Favorite;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 16
    }
})