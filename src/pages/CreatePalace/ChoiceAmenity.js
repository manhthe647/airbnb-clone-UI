import { useEffect, useState } from "react";
import { getAmenity } from "../../apis/apiAmenity";
import { View, ScrollView, StyleSheet, Image } from 'react-native';
import { Text, Card, Button } from '@rneui/themed';
import { Icon } from "@iconify/react";

const ChoiceAmenity = () => {

    const [amenityList, setAmenityList] = useState([]);

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
        <View>
            {amenityList.map((a, i) => {
                return (
                    <View key={i}>
                        <Card>
                            <Text><Icon icon={a.icon} /></Text>
                            <Text>{a.amentityName}</Text>
                        </Card>
                    </View>
                );
            })}

        </View>
    )
}

export default ChoiceAmenity;