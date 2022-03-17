import React, { useEffect } from 'react'
import {Text,
        View,
        StyleSheet,
        Image,
        TouchableOpacity,
} from 'react-native'
import { lightMode } from '../constants/global'
import ImageViewer from 'react-native-image-zoom-viewer';

import Theme from '../styles/Comum' 

export default ImageLayout = ({ route }) => {
    let { list, currentImg } = route.params;
    
    return(
        <View style={{ height: '100%', width: '100%', backgroundColor: lightMode ? Theme.branco : Theme.backDark }}>
            <TouchableOpacity onPress={() => console.log("go back") }><Text>Fechar</Text></TouchableOpacity>
                <View style={ { height: '100%', width: '100%', backgroundColor: lightMode ? Theme.branco : Theme.backDark } }>
                    <ImageViewer
                        imageUrls={list} 
                        index={currentImg}
                        saveToLocalByLongPress={false}
                        backgroundColor={ lightMode ? Theme.branco : Theme.backDark}
                        flipThreshold={40}
                        maxOverflow={800}
                        pageAnimateTime={200}
                   />
                </View>
        </View>
    )
    
}
