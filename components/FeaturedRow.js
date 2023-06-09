import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { ArrowRightIcon } from 'react-native-heroicons/outline';
import ResturantCards from './ResturantCards';

const FeaturedRow = ({ id, title, description }) => {
    return (
        <View>
            <View className="mt-4 flex-row items-center justify-between px-4">
                <Text className="font-bold text-lg">{title}</Text>
                <ArrowRightIcon color="#00CCBB" />
            </View>

            <Text className="text-xs text-gray-500 px-4">{description}</Text>

            <ScrollView horizontal
                contentContainerStyle={{
                    paddingHorizontal: 15
                }}
                showsHorizontalScrollIndicator={false}
                className="pt-4"
            >

                <ResturantCards
                    id={123}
                    imgUrl="https://links.papareact.com/gn7"
                    title="Yo sushi"
                    rating={4.5}
                    genre="japanese"
                    address="123 main st"
                    short_description="test description"
                    dishes={[]}
                    long={20}
                    lat={0}
                />
                <ResturantCards
                    id={123}
                    imgUrl="https://links.papareact.com/gn7"
                    title="Yo sushi"
                    rating={4.5}
                    genre="japanese"
                    address="123 main st"
                    short_description="test description"
                    dishes={[]}
                    long={20}
                    lat={0}
                />
                <ResturantCards
                    id={123}
                    imgUrl="https://links.papareact.com/gn7"
                    title="Yo sushi"
                    rating={4.5}
                    genre="japanese"
                    address="123 main st"
                    short_description="test description"
                    dishes={[]}
                    long={20}
                    lat={0}
                />
                <ResturantCards
                    id={123}
                    imgUrl="https://links.papareact.com/gn7"
                    title="Yo sushi"
                    rating={4.5}
                    genre="japanese"
                    address="123 main st"
                    short_description="test description"
                    dishes={[]}
                    long={20}
                    lat={0}
                />

            </ScrollView>
        </View>
    );
}

export default FeaturedRow;
