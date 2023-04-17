import React from 'react'
import Lineargradient from 'react-native-linear-gradient';


function LinearGradient({ children, colors = [], nativeStart = {}, style }) {
    return (

        <Lineargradient start={{ x: nativeStart?.x ? nativeStart.x : 1.5, y: nativeStart?.y ? nativeStart.y : .5 }} end={{ x: 0, y: 0 }} colors={colors} style={[{ flex: 1 }, style]}>

            {children}
        </Lineargradient>
    )
}

export default LinearGradient