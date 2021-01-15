import React from 'react'
import { SafeAreaView } from 'react-native'
import WebView from 'react-native-webview'

function mapScreen() {
    return (
        <SafeAreaView style={{flex: 1,backgroundColor:"#23b574"}}>
            <WebView
   source={{html: '<iframe src="https://www.google.com/maps/d/u/0/embed?mid=1fRTjlc22xSlziJTi4ooGSnV6Tyav5xH6" width="100%" height="100%"></iframe>'}}
   style={{marginTop: 20}}
/>
            </SafeAreaView>

    )
}

export default mapScreen
