import { useEffect, useState } from "react";
import { getAmenity } from "../../apis/apiAmenity";
import { View, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Text, Card } from '@rneui/themed';
import { _url } from "../../config/url";

const ChoiceAmenity = () => {

    const BASE_URI = _url.server + _url.iconFolder;
    const [amenityList, setAmenityList] = useState([]);
    const [amenityValues, setAmenityValues] = useState([]);

    const handleAmenityPress = (value) => {
        if (amenityValues.includes(value)) {
            const updatedValues = amenityValues.filter((item) => item !== value);
            setAmenityValues(updatedValues);
          } else {
            setAmenityValues([...amenityValues, value]);
          }
       console.log(amenityValues)
    };

    useEffect(() => {
        getAmenity()
            .then((data) => {
                console.log("Data fetched successfully", data);
                setAmenityList(data);
            })
            .catch((error) => {
                console.error("Fetching amenity data failed:", error);
            });
    }, []);

    return (
        <View style={styles.customContainer}>
            {amenityList.map((a, i) => {
                return (
                    <TouchableOpacity  activeOpacity={1}  key={i} onPress={() => handleAmenityPress(a.id)}>
                        <View style={styles.child}>
                        <Card 
                            containerStyle={{
                                borderColor:  amenityValues.find((item)=> item === a.id) ? '#2196F3' : '#e5e5e5',
                                borderWidth: 1.5,
                                borderRadius: 12,
                                width: '80%',
                                padding: 12,
                                margin: 12
                            }}
                        >
                            <Image style={styles.image} source={{ uri: BASE_URI + a.icon }} />
                            <Text style={styles.text}>{a.amenityName}</Text>
                        </Card>
                        </View>
                    </TouchableOpacity>
                );
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    customContainer:{
        width: '100%',
        height: '84%',
    }, 
    child: {
        display: 'flex',
        alignItems:'center',
    },
    image: {
        width: 24,
        height: 24,
        marginBottom: 4
    },
    text: {
        fontWeight: 500,
    }
});

export default ChoiceAmenity;