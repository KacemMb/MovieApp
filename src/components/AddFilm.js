import React,  {useState}from 'react'
import '../style/AddFilm.css'
import { Button, Form, Modal } from 'react-bootstrap';
import language from '../data/Language.json';
import movieGenres from'../data/Genres.json';
function AddFilm({idNewFilm,onNewMovie}) {

  // all states i needed in this component ! 
  const [show, setShow] = useState(false);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [selectedTitle, setselectedTitle] = useState('');
  const [selectedYear,setSelectedYear] = useState(0);
  const [selectedRating,setSelectedRating] = useState(0);
  const [importedFile, setimportedFile] = useState('');
  const [SelectedDescription, setSelectedDescription] = useState('');
  const [NewMovie, setNewMovie] = useState({
    id : 0,
    title: '',
    year : 0,
    rating : 0,
    genre : [],
    language : '',
    description: ''
  });// end 


  
  // func to add all data of new film in the newFilm state 

  // functions of handel..Change
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
    setSelectedLanguage(event.target.value);
  };

  const handleTitleChange = (event) => {
    setselectedTitle(event.target.value);
  };
  const handelYearChange = (e) =>{
    setSelectedYear(Number(e.target.value));
  }
  const handelRatingChange = (e) =>{
    setSelectedRating(Number(e.target.value));
  }
  const handleFileChange = (event) => {
    setimportedFile(event.target.value.split('\\').pop());
    // const fileName = event.target.value.split('\\').pop(); // Extracts the file name
    
  };
  const handleDescriptioinChange = (e) =>{
    setSelectedDescription(e.target.value)
  }


  // two functions for the submit and the close buttons in this modal component
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const handleSubmit = () => {
    // Use selectedGenres and selectedLanguage as needed
    console.log('Selected Genres:', selectedGenres);
    console.log('Selected Language:', selectedLanguage);
    console.log('selected titel:', selectedTitle);
    console.log('selected year', selectedYear);
    console.log('selected rating',selectedRating);
    console.log('Selected file:', importedFile);
    console.log('selected description', SelectedDescription);
    console.log('id new film', idNewFilm);
    var newMovieData = {
      id: idNewFilm,
      title: selectedTitle,
      year: selectedYear,
      rating: selectedRating,
      genre: selectedGenres,
      language: selectedLanguage,
      description: SelectedDescription,
    };
    
    setSelectedGenres([]);
    setSelectedLanguage('');
    setselectedTitle('');
    setSelectedYear(0);
    setSelectedRating(0);
    setimportedFile('');
    setSelectedDescription('');
    setNewMovie(newMovieData)
    onNewMovie(newMovieData);
    // Close the modal
    handleClose();
  };






  return (
    <div>
      
    <button className='addBtn' variant="primary" onClick={handleShow}><img src="./images/plus.svg" alt="" /></button>
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add filme</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* title forme */}
        <Form.Label htmlFor="inputPassword5">Title</Form.Label>
        <Form.Control type="text" placeholder="Ex : Hitman" onChange={handleTitleChange}/>
          {/* year  form*/}
        <Form.Label htmlFor="inputPassword5">Year</Form.Label>
        <Form.Control type="number" placeholder="Ex : 2024" onChange={handelYearChange} />
          {/* rating  form*/}
        <Form.Label htmlFor="inputPassword5">Rating</Form.Label>
        <Form.Control type="number" placeholder="Ex : 8.9" onChange={handelRatingChange}/>
          {/* genre form*/}
          <Form className='myForm'>
            {movieGenres.map((it) => (
              <div key={it.id} className="mb-3">
                <Form.Check
                  type={it.type}
                  id={it.id}
                  label={it.name}
                  value={it.value}
                  checked={selectedGenres.includes(it.id)}
                  onChange={() => handleGenreChange(it.id)}
                />
              </div>
            ))}
          </Form>
          {/* language form*/}
          <Form.Select aria-label="Default select example" onChange={handleLanguageChange} value={selectedLanguage}>
            <option value="" disabled>Select Language</option>
            {language.map((item) => (
              <option key={item.id} value={item.value}>
                {item.label}
              </option>
            ))}
          </Form.Select >
          {/* image form*/}
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Import your image</Form.Label>
            <Form.Control type="file" onChange={handleFileChange}/>
          </Form.Group>
          {/* description forme*/}
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" style={{width : "90%", margin: "auto"}}>
            <Form.Label>description</Form.Label>
            <Form.Control as="textarea" rows={3} onChange={handleDescriptioinChange}/>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>Understood</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddFilm
