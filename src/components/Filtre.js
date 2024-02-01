import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap'; // Assuming you are using react-bootstrap
import '../style/Filter.css';

function Filtre() {
  const [show, setShow] = useState(false);
  
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleGenreChange = (id) => {
    // Toggle the selected genre
    setSelectedGenres((prevSelectedGenres) => {
      if (prevSelectedGenres.includes(id)) {
        return prevSelectedGenres.filter((genreId) => genreId !== id);
      } else {
        return [...prevSelectedGenres, id];
      }
    });
  };

  const handleLanguageChange = (event) => {
    // Update the selected language
    setSelectedLanguage(event.target.value);
  };

  const handleSubmit = () => {
    // Use selectedGenres and selectedLanguage as needed
    console.log('Selected Genres:', selectedGenres);
    console.log('Selected Language:', selectedLanguage);

    // Perform other actions with the selected data
    // ...

    // Close the modal
    handleClose();
  };
  const language = [
    { id: 1, value: 'ar', label: 'arabic' },
    { id: 2, value: 'fr', label: 'franch' },
    { id: 3, value: 'en', label: 'english' },
  ];
  const movieGenres = [
    { id: 1, name: 'Action', type: 'checkbox', value: 'Action' },
    { id: 2, name: 'Comedy', type: 'checkbox', value: 'Comedy' },
    { id: 3, name: 'Drama', type: 'checkbox', value: 'Drama' },
    { id: 4, name: 'Thriller', type: 'checkbox', value: 'Thriller' },
    { id: 5, name: 'Science Fiction', type: 'checkbox', value: 'Science Fiction' },
    { id: 6, name: 'Adventure', type: 'checkbox', value: 'Adventure' },
    { id: 7, name: 'Romance', type: 'checkbox', value: 'Romance' },
    { id: 8, name: 'Horror', type: 'checkbox', value: 'Horror' },
    { id: 9, name: 'Fantasy', type: 'checkbox', value: 'Fantasy' },
    { id: 10, name: 'Mystery', type: 'checkbox', value: 'Mystery' },
  ];

  return (
    <>
      <button className='filterBtn' variant="primary" onClick={handleShow}>
        <img src="./images/filterWhite.png" alt="" />
      </button>

      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Filter</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label htmlFor="" className='myLabel'>Language</label>
          <Form.Select aria-label="Default select example">
            {language.map((item) => (
              <option key={item.id} value={item.value}>
                {item.label}
              </option>
            ))}
          </Form.Select>
          <label htmlFor="" className='myLabel'>Genres</label>
          <Form className='myForm'>
            {movieGenres.map((it) => (
              <div key={`default-${it.type}`} className="mb-3">
                <Form.Check
                  type={it.type}
                  id={it.id}
                  label={it.name}
                  value={it.value}
                />
              </div>
            ))}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Filtre;
