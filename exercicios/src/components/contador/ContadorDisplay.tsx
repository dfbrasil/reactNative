import { Text ,View, StyleSheet } from "react-native";
import estilo from "../estilo";

interface ContadorDisplayProps {
    num: number;
}

export default function ContadorDisplay(props:ContadorDisplayProps){
    return(
        <View style={style.Display}>
            <Text style={[estilo.fontM, style.DisplayText]}>
                {props.num}
            </Text>
        </View>
    )
}

const style = StyleSheet.create({

    Display: {
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        width: 300,
    },

    DisplayText: {
        color: '#FFF'
    }
})
