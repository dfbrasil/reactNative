import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet } from 'react-native';
import UsuarioLogado from '../../components/UsuarioLogado';
import ListaDeProdutos from '../../components/produtos/ListaProdutos';
import ListaDeProdutosV2 from '../../components/produtos/ListaProdutosV2';
import DigiteSeuNome from '../../components/DigiteSeuNome';
import Quadradro from '../../components/layout/Quadradro';
import FlexBoxV1 from '../../components/layout/FlexBoxV1';
import FlexBoxV2 from '../../components/layout/FlexBoxV2';
import FlexBoxV3 from '../../components/layout/FlexBoxV3';
import FlexBoxV4 from '../../components/layout/FlexBoxV4';
import Mega from '../../components/mega/Mega';
// import Primeiro from '../../components/Primeiro';
// import Comp, { Comp2, Comp3 } from '../../components/Multi';
// import MinMax from '../../components/MinMax';
// import MaxMinAleatorio from '../../components/MaxMinAleatorio';
// import Titulo from '../../components/Titulo';
// import Botao from '../../components/Botao';
// import Contador from '../../components/Contador';
// import Pai from '../../components/indireta/Pai';
// import ContadorV2 from '../../components/contador2/contadorV2';
// import ParImpar from '../../components/ParImpar';
// import Pai from '../../components/relacao/Pai';
// import Filho from '../../components/relacao/Filho';

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      {/* <Text>TESTE2</Text>
      <Primeiro />
      <Comp />
      <Comp2 />
      <Comp3 /> */}
      {/* <MinMax min={3} max={30}/> */}
      {/* Props do componente MinMax */}
      {/* <MaxMinAleatorio min={0} max={100} /> */}
      {/* <Titulo principal={ 'Título Principal' } secundario={ 'Título Secundário' }/> */}
      {/* <Botao /> */}
      {/* <Contador inical={ 100 } passo={2} />
      <Contador /> */}
      {/* <Pai /> */}
      {/* <ContadorV2 /> */}
      {/* <ParImpar num={2}/> */}
      {/* <Pai>
        <Filho nome="Isaac" sobrenome='Brasil' />
        <Filho nome='Ísis' sobrenome='Guimarães' />
      </Pai>
      <Pai>
        <Filho nome="Daniel" sobrenome='Brasil' />
        <Filho nome='Rafael' sobrenome='Freitas' />
        <Filho nome='Nubia' sobrenome='Freitas' />
      </Pai> */}
      {/* <UsuarioLogado usuario={{nome:'Daniel', email:'daniel@g.com'}}/> */}
      {/* <ListaDeProdutos /> */}
      {/* <ListaDeProdutosV2 /> */}
      {/* <DigiteSeuNome /> */}
      {/* <Quadradro /> */}
      {/* <FlexBoxV4 /> */}
      <Mega numerosMega={6} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
});
