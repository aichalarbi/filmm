import React, { useState } from 'react';
import Modal from 'react-modal';
import ReactStars from 'react-stars';

const MovieAddModal = ({ isOpen, closeModal, addMovie }) => {
  const [newMovie, setNewMovie] = useState({
    name: '',
    description: '',
    rating: 0, 
    cover: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMovie({ ...newMovie, [name]: value });
  };

  const handleRatingChange = (rating) => {
    setNewMovie({ ...newMovie, rating });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addMovie({ ...newMovie, id: Date.now() });
    setNewMovie({ name: '', description: '', rating: 0, cover: '' });
    closeModal();
  };

  

  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal}>
      <h2>Add New Movie</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={newMovie.name}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Description:
          <textarea
            name="description"
            value={newMovie.description}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Rating:
          <ReactStars
            count={5}
            onChange={handleRatingChange}
            size={24}
            color2={'#ffd700'}
            value={newMovie.rating}
          />
          </label>
        <br />
        <label>
          Date
          <input
            type="number"
            name="Date"
            value={newMovie.date}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Seasons
          <input
            type="number"
            name="seasons"
            value={newMovie.seasons}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Cover Image URL:
          <input
            type="text"
            name="cover"
            value={newMovie.cover}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit">Add Movie</button>
        <button type="button" onClick={closeModal}>
          Cancel
        </button>
      </form>
    </Modal>
  );
};

export default MovieAddModal;
