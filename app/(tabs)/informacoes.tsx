import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform, Text } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function TabTwoScreen() {
  return (

<ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/image.png')}/>}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Informações Gerais</ThemedText>
      </ThemedView>
      <ThemedText> Esta aplicacação mobile tem como objetivo enviar notificações ao celular do usuário cada vez que sua campainha conectada for tocada.</ThemedText>
      <Collapsible title="Matéria">
      <ThemedText>
        Este é um trabalho da matéria <Text style={{ fontWeight: 'bold' }}>INE5670-04238B (20242)</Text> - Desenvolvimento de Sistemas Móveis e Embarcados
      </ThemedText>

      </Collapsible>

      <Collapsible title="Alunos">
        <ExternalLink href="https://www.linkedin.com/in/olavoancay/">
          <ThemedText type="link">Olavo Ançay</ThemedText>
        </ExternalLink>
        <ExternalLink href=" https://www.linkedin.com/in/jabes-silva-280488244/">
          <ThemedText type="link">Jabes Silva</ThemedText>
        </ExternalLink>
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
