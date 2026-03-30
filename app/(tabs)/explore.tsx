import { StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      
        {/* CARD CENTRAL */}
        <ThemedView style={styles.card}>

        {/* TÍTULO */}
        <ThemedText type="title" style={styles.title}>
          Estatísticas
        </ThemedText>

        {/* LINHA PRINCIPAL */}
        <ThemedView style={styles.statsRow}>
          
          <ThemedView style={styles.statItem}>
            <ThemedText type="subtitle">120</ThemedText>
            <ThemedText style={styles.statLabel}>Seguidores</ThemedText>
          </ThemedView>

          <ThemedView style={styles.statItem}>
            <ThemedText type="subtitle">80</ThemedText>
            <ThemedText style={styles.statLabel}>Seguindo</ThemedText>
          </ThemedView>

          <ThemedView style={styles.statItem}>
            <ThemedText type="subtitle">25</ThemedText>
            <ThemedText style={styles.statLabel}>Repos</ThemedText>
          </ThemedView>

        </ThemedView>

        <View style={styles.divider} />

        {/* ESTATÍSTICAS */}
        <ThemedView style={styles.extraStats}>
          <ThemedText style={styles.extraText}>💻 150 commits</ThemedText>
          <ThemedText style={styles.extraText}>🔥 12 projetos ativos</ThemedText>
          <ThemedText style={styles.extraText}>⭐ 340 estrelas</ThemedText>
        </ThemedView>

      </ThemedView>
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
    gap: 16,

    elevation: 8,

    shadowColor: '#000',
    shadowOpacity: 0.4,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 5 },
  },

  title: {
    color: '#00FF88',
  },

  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },

  statItem: {
    alignItems: 'center',
    flex: 1,
  },

  statLabel: {
    fontSize: 12,
    color: '#AAAAAA',
  },

  divider: {
    height: 1,
    backgroundColor: '#333',
    width: '100%',
  },

  extraStats: {
    gap: 8,
    alignItems: 'center',
  },

  extraText: {
    fontSize: 13,
    color: '#CCCCCC',
  },
});