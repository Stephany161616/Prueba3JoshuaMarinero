import { StyleSheet, Text, View } from 'react-native';
import PrimaryButton from './PrimaryButton';
import { colors, spacing } from '../constants/theme';

export default function ErrorMessage({ message, onRetry }) {
  return (
    <View style={styles.container}>
      <Text style={styles.icon}>⚠️</Text>
      <Text style={styles.title}>No se pudieron cargar las series</Text>
      <Text style={styles.message}>{message}. Revisa tu conexión a internet e inténtalo de nuevo.</Text>
      {onRetry && <PrimaryButton title="Reintentar" onPress={onRetry} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing.xl,
    gap: spacing.md,
    backgroundColor: colors.background,
  },
  icon: {
    fontSize: 40,
  },
  title: {
    color: colors.text,
    fontSize: 18,
    fontWeight: '800',
    textAlign: 'center',
  },
  message: {
    color: colors.error,
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 20,
  },
});
