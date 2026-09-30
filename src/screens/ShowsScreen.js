import { FlatList, RefreshControl, StyleSheet, Text, View } from 'react-native';
import Card from '../components/Card';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';
import useShows from '../hooks/useShows';
import { colors, spacing } from '../constants/theme';

export default function ShowsScreen() {
  const { shows, total, loading, refreshing, error, retry, refresh } = useShows();

  if (loading) return <Loader message="Cargando series..." />;
  if (error) return <ErrorMessage message={error} onRetry={retry} />;

  return (
    <View style={styles.container}>
      <FlatList
        data={shows}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        ListHeaderComponent={
          <Text style={styles.count}>{total} series disponibles en TVMaze</Text>
        }
        renderItem={({ item }) => (
          <Card
            title={item.title}
            image={item.image}
            description={item.description}
            genres={item.genres}
            rating={item.rating}
            year={item.year}
          />
        )}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={refresh}
            tintColor={colors.primary}
            colors={[colors.primary]}
          />
        }
        initialNumToRender={8}
        windowSize={10}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  list: {
    padding: spacing.md,
  },
  count: {
    color: colors.muted,
    fontSize: 14,
    marginBottom: spacing.md,
  },
});
