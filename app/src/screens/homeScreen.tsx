import { StyleSheet, ScrollView } from "react-native";
import TopicCard from "../components/topicCard";


const HomeScreen = () => {
  // Posteriormente o TopicCard será substituído por um FOR dos resultados da API
  return (
    <ScrollView style={styles.container}>
      <TopicCard title="Qual é a diferença entre armazenamento em nuvem e armazenamento local?" description="Por Username" imageUrl="https://reactjs.org/logo-og.png" />
      <TopicCard title="Existe uma maneira fácil de migrar meus dados de um dispositivo para outro?" description="Por Username" imageUrl="https://reactjs.org/logo-og.png" />
      <TopicCard title="Como posso configurar uma rede Wi-Fi em casa para obter a melhor cobertura?" description="Por Username" imageUrl="https://reactjs.org/logo-og.png" />
      <TopicCard title="Quais são os sinais de que meu computador pode estar infectado?" description="Por Username" imageUrl="https://reactjs.org/logo-og.png" />
      <TopicCard title="Como faço para configurar uma rede doméstica segura?" description="Por Username" imageUrl="https://reactjs.org/logo-og.png" />
      <TopicCard title="Estou considerando atualizar meu hardware. O que devo priorizar?" description="Por Username" imageUrl="https://reactjs.org/logo-og.png" />
      <TopicCard title="Como posso recuperar arquivos perdidos no meu computador?" description="Por Username" imageUrl="https://reactjs.org/logo-og.png" />
      <TopicCard title="Qual é a melhor maneira de proteger meu computador contra vírus?" description="Por Username" imageUrl="https://reactjs.org/logo-og.png" />
      <TopicCard title="Estou tendo problemas com atualização do Windows" description="Por Username" imageUrl="https://reactjs.org/logo-og.png" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#121212',
  }
})

export default HomeScreen