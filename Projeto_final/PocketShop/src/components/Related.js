import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar'
import { 
	FlatList
} from 'react-native';

import Theme from '../styles/Comum' 

import { lightMode } from '../constants/global'
import { api_url } from '../constants/host';
import EachProd from './EachProd';
import NoProd from './NoProd';

export default props => {
	const [produtos, setData] = useState([]);

	useEffect(() => {
		//console.warn(id)
        //console.warn(props.filter)
        fetch( api_url+'products/filter/'+props.filter)
            .then(response => response.json())
            .then(data => {
                //console.log(data.object);
                //console.warn(data)
                setData(data.list);
            })
        
	},[props.filter])

	const _renderItem = ({item}) => {
        return (
            <EachProd onClick={ () => props.navigation.push('ProductDetails', { 
                id: item.idProducts,
                name: item.name,
                img: item.img,
                price: item.price,
                id_comp: item.id_comp,
                company: item.company,
                desc: item.details,
                date: item.stock,
                subcategory: item.subcatg,
                views: item.views,
                stock: item.stock,
                active: item.active
            })
        } item={item} name={item.name} image={item.img} date={item.pubdate} company={item.company} un={item.idProducts} price={item.price}/>
        );
    }

    const _keyExtractor = (item) => {
        return item.idProducts.toString()
    }
	
	return(
		<FlatList 
            maxToRenderPerBatch={10}	
            initialNumToRender={20}
            ListEmptyComponent={<NoProd />}
            style={{ marginBottom: 5, marginTop: 20, height: 300 }}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            data={produtos}
            horizontal
            renderItem={_renderItem}
            keyExtractor={_keyExtractor}
        />
	)
			
		
}