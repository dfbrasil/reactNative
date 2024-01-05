import { View, Button, StyleSheet } from "react-native";

export default function ContadorButon(props:any){
    return (

        <View style={style.Botoes}>
           <Button 
            title="+"
            onPress={props.incrementar} 
            /> 
            <Button 
            title="-"
            onPress={props.decrementar} 
            /> 
        </View>
       
    )
}

const style = StyleSheet.create({
    Botoes:{
        flexDirection: 'row',
        justifyContent:'center',
        alignItems: 'center',
        height: 50,
        padding: 5
    }
})