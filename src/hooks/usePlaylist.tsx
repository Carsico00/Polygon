// src/hooks/usePlaylist.ts
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { getSpotifyToken } from './SpotifyService';

interface PlaylistData {
  tracks: {
    items: {
      track: {
        id: string;
        name: string;
        artists: { name: string }[];
        album: { images: { url: string }[] };
      };
    }[];
  };
}
const fetchPlaylist = async (playlistId: string): Promise<PlaylistData> => {
  // Obtener el token de Spotify
  const token = await getSpotifyToken();
  console.log("Token de acceso en la solicitud:", token); // Verificar el token que se está enviando

  // Realizar la solicitud a la API de Spotify
  const { data } = await axios.get(`https://api.spotify.com/v1/playlists/${playlistId}`, {
    headers: {
      Authorization: `Bearer ${token}`, // Asegúrate de que el token esté correctamente formateado
    },
  });
  return data;
};

export const usePlaylist = (playlistId: string) => {
  return useQuery<PlaylistData, Error>({
    queryKey: ['playlist', playlistId],
    queryFn: () => fetchPlaylist(playlistId),
  });
};
