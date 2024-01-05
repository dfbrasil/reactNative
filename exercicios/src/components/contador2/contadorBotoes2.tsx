import { Button, View } from "react-native";

export default function ContadorBotoes2(props:any){
    return(        
        <View>
            <Button 
                title="MAIS"
                onPress={props.incrementar}
                />
            <Button
                title="MENOS"
                onPress={props.decrementar}
            /> 
        </View>
    )
}