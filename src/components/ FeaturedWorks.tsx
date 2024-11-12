// src/components/FeaturedWorks.tsx
import Avatar from '@mui/material/Avatar';
import React from 'react';
import { AiTwotoneHeart } from "react-icons/ai";
import { FaHandshake, FaShoppingCart } from "react-icons/fa";
import { usePlaylist } from '../hooks/usePlaylist';
import './styles/FeaturedWorks.css';

interface WorkItem {
  id: string;
  title: string;
  author: string;
  imageUrl: string;
}

const FeaturedWorks: React.FC = () => {
  const playlistId = '0cGkT8Ck3aYL4vyIe8pduG'; // Reemplaza con el ID de tu playlist
  const { data, error, isLoading, refetch } = usePlaylist(playlistId);

  // Agregar más información de depuración
  console.log('Datos:', data);
  console.log('Error:', error);
  console.log('Cargando:', isLoading);

  if (isLoading) return <div className="loader">Loading...</div>;
  if (error) return (
    <div className="error">
      <p>Error loading playlist</p>
      <button onClick={() => refetch()}>Reload</button>
    </div>
  );

  const works: WorkItem[] = data!.tracks.items.map((item) => ({
    id: item.track.id,
    title: item.track.name,
    author: item.track.artists.map((artist) => artist.name).join(', '),
    imageUrl: item.track.album.images[0].url,
  }));

  return (
    <>
      <div className="featured-works-header">
        <h2 className='title_fetured'>Obras destacadas</h2>
        <div className='line'>
          <p className='text_header'>Music</p>
          <p className='text_header'>Collectibles</p>
          <p className='text_header'>Utility</p>
        </div>
      </div>
      <div className="featured-works">
        {works.map((work) => (
          <div key={work.id} className="work-item">
            <img src={work.imageUrl} alt={work.title} className="work-image" />
            <div className="work-info">
              <h3>{work.title}</h3>
              <div className='body_item'>
                <Avatar alt="User Avatar" src={work.imageUrl} className="avatar_item" />
                <p className='work_author'>@{work.author}</p>
              </div>
            </div>
            <div className="work-icons">
              <FaHandshake color={'white'} size={20} />
              <FaShoppingCart color={'white'} size={15} />
              <AiTwotoneHeart color={'white'} size={20} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default FeaturedWorks;