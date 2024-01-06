import { Text, View, StyleSheet } from "react-native"
import Quadradro from "./Quadradro"

export default () => {
    return (
        <View style={style.FlexV3}>
            <Quadradro cor={'#ff801a'} lado={20}/>
            <Quadradro cor={'#50d1f6'} lado={30} />
            <Quadradro cor={'#dd22c1'} lado={40} />
            <Quadradro cor={'#8312ed'} lado={50} />
            <Quadradro cor={'#36c9a7'} lado={60} />
        </View>
    )
}

const style = StyleSheet.create({

    FlexV3: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        height: 350,
        width: '100%',
        backgroundColor: '#000',
    }
})