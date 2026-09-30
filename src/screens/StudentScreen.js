import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import InfoRow from '../components/InfoRow';
import PrimaryButton from '../components/PrimaryButton';
import useStudentInfo from '../hooks/useStudentInfo';
import { colors, radius, spacing } from '../constants/theme';

export default function StudentScreen({ navigation }) {
  const { student, initials, fields } = useStudentInfo();

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>{initials}</Text>
          </View>
          <Text style={styles.name}>{student.nombre}</Text>
          <Text style={styles.subtitle}>Instituto Técnico Ricaldone, Desarrollo de Software</Text>
        </View>

        <View style={styles.fields}>
          {fields.map((field) => (
            <InfoRow key={field.id} icon={field.icon} label={field.label} value={field.value} />
          ))}
        </View>

        <PrimaryButton title="Ver series de TV" onPress={() => navigation.navigate('Shows')} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    flex: 1,
    padding: spacing.lg,
    justifyContent: 'space-between',
  },
  header: {
    alignItems: 'center',
    marginTop: spacing.xl,
    gap: spacing.sm,
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: radius.pill,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.sm,
    borderWidth: 4,
    borderColor: colors.surfaceAlt,
  },
  avatarText: {
    color: colors.onPrimary,
    fontSize: 40,
    fontWeight: '900',
  },
  name: {
    color: colors.text,
    fontSize: 28,
    fontWeight: '900',
    textAlign: 'center',
  },
  subtitle: {
    color: colors.muted,
    fontSize: 14,
    textAlign: 'center',
  },
  fields: {
    gap: spacing.md,
  },
});
