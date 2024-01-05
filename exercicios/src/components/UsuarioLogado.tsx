import { Text, View } from "react-native";
import If from "./If";

interface Usuario {
  nome: string;
  email: string;
}

interface UsuarioLogadoProps {
  usuario: Usuario | null;
}

export default function UsuarioLogado(props: UsuarioLogadoProps) {
  const usuario = props.usuario;

  return (
    <View>
      <If teste={!!(usuario && usuario.nome && usuario.email)}>
        <Text>
          {usuario ? `${usuario.nome} - ${usuario.email}` : 'Usuário não logado'}
        </Text>
      </If>
    </View>
  );
}
