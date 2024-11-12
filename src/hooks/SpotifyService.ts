// SpotifyService.ts
export const getSpotifyToken = async (): Promise<string> => {
  const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;
  console.log('Spotify Client ID:', process.env.REACT_APP_SPOTIFY_CLIENT_ID);
  console.log('Spotify Client Secret:', process.env.REACT_APP_SPOTIFY_CLIENT_SECRET);
  
  if (!clientId || !clientSecret) {
    throw new Error("Client ID o Client Secret no están definidos en las variables de entorno.");
  }

  console.log("Client ID:", clientId);  // Verifica que las variables están cargadas correctamente
  console.log("Client Secret:", clientSecret);

  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: "Basic " + btoa(clientId + ":" + clientSecret),
    },
    body: "grant_type=client_credentials",
  });

  if (!response.ok) {
    throw new Error("Error al obtener el token de acceso de Spotify");
  }

  const data = await response.json();
  console.log('Token:', data.access_token);
  return data.access_token;
};
