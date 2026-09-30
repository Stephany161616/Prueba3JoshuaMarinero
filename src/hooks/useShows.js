import { useMemo } from 'react';
import useFetchData from './useFetchData';

const API_URL = 'https://api.tvmaze.com/shows';

const cleanSummary = (html) => {
  if (!html) return 'Sin descripción disponible.';
  return html
    .replace(/<[^>]*>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .trim();
};

export default function useShows() {
  const { data, loading, refreshing, error, retry, refresh } = useFetchData(API_URL);

  const shows = useMemo(
    () =>
      data.map((show) => ({
        id: String(show.id),
        title: show.name,
        image: show.image?.medium ?? null,
        description: cleanSummary(show.summary),
        genres: show.genres ?? [],
        rating: show.rating?.average ? show.rating.average.toFixed(1) : 'N/A',
        year: show.premiered ? show.premiered.slice(0, 4) : '—',
      })),
    [data]
  );

  return { shows, total: shows.length, loading, refreshing, error, retry, refresh };
}
