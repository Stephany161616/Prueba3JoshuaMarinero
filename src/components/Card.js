import { Image, StyleSheet, Text, View } from 'react-native';
import { colors, radius, spacing } from '../constants/theme';

export default function Card({ title, image, description, genres = [], rating, year }) {
  return (
    <View style={styles.card}>
      {image ? (
        <Image source={{ uri: image }} style={styles.image} resizeMode="cover" />
      ) : (
        <View style={[styles.image, styles.placeholder]}>
          <Text style={styles.placeholderText}>📺</Text>
        </View>
      )}

      <View style={styles.body}>
        <Text style={styles.title} numberOfLines={2}>
          {title}
        </Text>

        <View style={styles.metaRow}>
          <Text style={styles.rating}>★ {rating}</Text>
          <Text style={styles.year}>{year}</Text>
        </View>

        {genres.length > 0 && (
          <View style={styles.genres}>
            {genres.slice(0, 3).map((genre) => (
              <View key={genre} style={styles.chip}>
                <Text style={styles.chipText}>{genre}</Text>
              </View>
            ))}
          </View>
        )}

        <Text style={styles.description} numberOfLines={4}>
          {description}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    overflow: 'hidden',
    marginBottom: spacing.md,
  },
  image: {
    width: 110,
    minHeight: 160,
    backgroundColor: colors.surfaceAlt,
  },
  placeholder: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  placeholderText: {
    fontSize: 32,
  },
  body: {
    flex: 1,
    padding: spacing.md,
    gap: spacing.sm,
  },
  title: {
    color: colors.text,
    fontSize: 17,
    fontWeight: '800',
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
  },
  rating: {
    color: colors.accent,
    fontSize: 14,
    fontWeight: '700',
  },
  year: {
    color: colors.muted,
    fontSize: 13,
  },
  genres: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.xs,
  },
  chip: {
    backgroundColor: colors.surfaceAlt,
    borderRadius: radius.pill,
    paddingHorizontal: spacing.sm,
    paddingVertical: 2,
  },
  chipText: {
    color: colors.muted,
    fontSize: 11,
    fontWeight: '600',
  },
  description: {
    color: colors.muted,
    fontSize: 13,
    lineHeight: 19,
  },
});
