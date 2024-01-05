import { Text, View, StyleSheet } from "react-native";


interface ContadorDisplayProps {
    numero:number;
}

export default function ContadorDisplay2(props:ContadorDisplayProps){
    return(
        <View>
            <Text style={style.Layout}>
                {props.numero}
            </Text>
        </View>
    )
}

const style = StyleSheet.create({
    Layout:{
        fontSize: 20,
        alignSelf: 'center',
        backgroundColor: '#f3f4',
        color: '#000FFF'
    }
})