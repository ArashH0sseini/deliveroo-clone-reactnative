import React, { useLayoutEffect } from 'react';
import { Text, SafeAreaView, View, Image, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { AdjustmentsVerticalIcon, ChevronDownIcon, UserIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline";
import GlobalStyles from '../utils/GlobalStyles';

const HomeScreen = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])

    return (
        <SafeAreaView style={GlobalStyles.androidSafeArea}>
            <View className="flex-row pb-3 items-center mx-4 space-x-2 px-4">
                <Image className="w-7 h-7 p-4 bg-gray-300 rounded-full" source={{ uri: "https://links.papareact.com/wru" }} />
                <View className="flex-1">
                    <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
                    <Text className="text-xl font-bold">
                        Current Location
                        <ChevronDownIcon size={20} color="#00CCBB" />
                    </Text>
                </View>

                <UserIcon size={35} color="#00CCBB" />
            </View>

            <View className="flex-row items-center space-x-2 pb-2 mx-4 px-4">
                <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
                    <MagnifyingGlassIcon color="gray" size={20} />
                    <TextInput placeholder='Resturant and cuisines' keyboardAppearance='default' />
                </View>

                <AdjustmentsVerticalIcon color="#00CCBB" />
            </View>
        </SafeAreaView>
    );
}

export default HomeScreen;
