import { Text, View, StyleSheet } from "react-native"
import Quadradro from "./Quadradro"

export default () => {
    return (
        <View style={style.FlexV1}>
            <Quadradro cor={'#ff801a'}/>
            <Quadradro cor={'#50d1f6'}/>
            <Quadradro cor={'#dd22c1'}/>
            <Quadradro cor={'#8312ed'}/>
            <Quadradro cor={'#36c9a7'}/>
        </View>
    )
}

const style = StyleSheet.create({
    FlexV1: {
        flex: 1,
        justifyContent: 'space-evenly',
        backgroundColor: '#000',
    }
})