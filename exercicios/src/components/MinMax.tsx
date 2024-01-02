import { Text } from "react-native";
import Estilo from './estilo'

export default function MinMax(props:any) {
    return  (
        <Text style={ Estilo.fontG }>
            O valor {props.max} é maior que o valor {props.min}
        </Text>
    )
}