import React from 'react';
import { Text, ScrollView } from 'react-native';
import CategoryCard from './CategoryCard';

const Categories = () => {
    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator
            contentContainerStyle={{
                paddingHorizontal: 15,
                paddingTop: 10
            }}
        >
            <CategoryCard imgUrl="https://links.papareact.com/gn7" title="testing" />
            <CategoryCard imgUrl="https://links.papareact.com/gn7" title="testing" />
            <CategoryCard imgUrl="https://links.papareact.com/gn7" title="testing" />
            <CategoryCard imgUrl="https://links.papareact.com/gn7" title="testing" />
            <CategoryCard imgUrl="https://links.papareact.com/gn7" title="testing" />
            <CategoryCard imgUrl="https://links.papareact.com/gn7" title="testing" />
            <CategoryCard imgUrl="https://links.papareact.com/gn7" title="testing" />
            <CategoryCard imgUrl="https://links.papareact.com/gn7" title="testing" />
            <CategoryCard imgUrl="https://links.papareact.com/gn7" title="testing" />
            <CategoryCard imgUrl="https://links.papareact.com/gn7" title="testing" />
            <CategoryCard imgUrl="https://links.papareact.com/gn7" title="testing" />
        </ScrollView>
    );
}


export default Categories;
