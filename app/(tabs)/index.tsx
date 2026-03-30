import { Image } from 'expo-image';
import { StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      
        {/* CARD CENTRAL */}
        <View style={styles.card}>
        
        {/* FOTO */}
        <Image
        source={require('../../assets/images/JC Fanart.png')}
        style={styles.profileImage}
        contentFit="cover"
        transition={200}/>

        {/* NOME */}
        <ThemedText type="title" style={styles.name}>
          Lucas Barros
        </ThemedText>

        {/* USERNAME */}
        <ThemedText style={styles.username}>
          @lbarros.dev
        </ThemedText>

        {/* BIO */}
        <ThemedText style={styles.bio}>
          Desenvolvedor apaixonado por tecnologia 💻🚀{"\n"}
          Foco em APPS com React Native e Design Interativo
        </ThemedText>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2A2A2A',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  card: {
    width: '100%',
    maxWidth: 350,
    backgroundColor: '#121212',
    borderRadius: 20,
    padding: 24,
    alignItems: 'center',
    gap: 12,

    elevation: 8,

    shadowColor: '#000',
    shadowOpacity: 0.4,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 5 },
  },

  profileImage: {
    width: 110,
    height: 110,
    borderRadius: 55,
    borderWidth: 3,
    borderColor: '#00FF88',
  },

  name: {
    color: '#FFFFFF',
  },

  username: {
    fontSize: 14,
    color: '#00FF88',
  },

  bio: {
    textAlign: 'center',
    marginTop: 6,
    lineHeight: 20,
    color: '#CCCCCC',
  },
});