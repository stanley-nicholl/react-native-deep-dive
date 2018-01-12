import React from 'react'
import { View, Text, Image, Dimensions, Linking } from 'react-native'
import Card from './Card'
import CardSection from './CardSection'
import Button from './Button'

const { width } = Dimensions.get('window');

const AlbumDetail = ({ album }) => {
    const { title, artist, thumbnail_image, image, url } = album
    const { headerContentStyle, headerTextStyle, thumbnailStyle, thumbnailContainerStyle, imageStyle } = styles

    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image source={{ uri: thumbnail_image }} style={thumbnailStyle} />
                </View>
                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}>{ title }</Text>
                    <Text>{ artist }</Text>
                </View>
            </CardSection>
            <CardSection>
                <View>
                    <Image source={{ uri: image }} style={imageStyle} resizeMethod="scale" />
                </View>
            </CardSection>
            <CardSection>
                <Button onPress={() => Linking.openURL(url)} >
                    <Text>Buy Now</Text>
                </Button>
            </CardSection>
        </Card>
    )
}

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailStyle: {
        width: 50,
        height: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,

    },
    imageStyle: {
        width: width * 0.94,
        height: 300
   }
}

export default AlbumDetail
