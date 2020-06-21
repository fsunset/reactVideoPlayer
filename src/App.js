import React, { useState } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import HoverVideoPlayer from 'react-hover-video-player';
import ModalComponent from './components/ModalComponent';

import './sass/main.scss';


function App() {
  // Hooks
  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalDescription, setModalDescription] = useState("");
  const [modalvidSRC, setModalVidSRC] = useState("");

  // Videos' Data
  const infoArray = [
    {
      "key": "drive",
      "leyend": "Some nice road trip trought desert at night",
      "vidURL": "https://github.com/fsunset/reactVideoPlayer/blob/master/src/videos/drive.mp4?raw=true",
      "imgURL": "https://raw.githubusercontent.com/fsunset/reactVideoPlayer/master/src/images/drive.jpg",
    },
    {
      "key": "iceland",
      "leyend": "Snow paradaise in Iceland",
      "vidURL": "https://github.com/fsunset/reactVideoPlayer/blob/master/src/videos/iceland.mp4?raw=true",
      "imgURL": "https://raw.githubusercontent.com/fsunset/reactVideoPlayer/master/src/images/iceland.jpg",
    },
    {
      "key": "paris",
      "leyend": "Fireworks at night in Paris",
      "vidURL": "https://github.com/fsunset/reactVideoPlayer/blob/master/src/videos/paris.mp4?raw=true",
      "imgURL": "https://raw.githubusercontent.com/fsunset/reactVideoPlayer/master/src/images/paris.jpg",
    },
    {
      "key": "rio",
      "leyend": "Brazil coulture in Rio de Janeiro",
      "vidURL": "https://github.com/fsunset/reactVideoPlayer/blob/master/src/videos/rio.mp4?raw=true",
      "imgURL": "https://raw.githubusercontent.com/fsunset/reactVideoPlayer/master/src/images/rio.jpg",
    },
    {
      "key": "vietnam",
      "leyend": "Most beautiful scenes in South East Asia",
      "vidURL": "https://github.com/fsunset/reactVideoPlayer/blob/master/src/videos/vietnam.mp4?raw=true",
      "imgURL": "https://raw.githubusercontent.com/fsunset/reactVideoPlayer/master/src/images/vietnam.jpg",
    },
  ];

  const LoaderComponent = () => {
    return (
      <Col xs={12} className="loader-container text-center">
        <span className="d-block">Cargando...</span>
      </Col>
    )
  }

  const handleClickVid = (key, leyend, vidURL) => {
    setModalVidSRC(vidURL);
    setModalTitle(key);
    setModalDescription(leyend);
    setShowModal(true);
  }

  const CustomVidComponent = () => {
    return (
      infoArray.map((vid, i) => {
        return (
          <Col
            key={i}
            xs={12}
            md={4}
            className="vid-container my-3"
            onClick={() => handleClickVid(vid.key, vid.leyend, vid.vidURL)}
          >
            <HoverVideoPlayer
              videoSrc={vid.vidURL}
              pausedOverlay={
                <img src={vid.imgURL} alt={vid.key} />
              }
              loadingOverlay={
                <LoaderComponent />
              }
            />
          </Col>
        )
      })
    )
  }

  return (
    <Container className="main-container">
      <ModalComponent
        showModal={showModal}
        handleClose={() => setShowModal(false)}
        modalTitle={modalTitle}
        modalDescription={modalDescription}
        modalvidSRC={modalvidSRC}
      />

      <Row>
        <Col xs={12} className="my-5 text-center">
          <h1>
            Videos Landing
          </h1>
        </Col>
      </Row>

      <Row>
        <CustomVidComponent />
      </Row>

      <footer className="text-center">
        <hr />
        <p>&copy; Copyrights 2020</p>
      </footer>
    </Container>
  );
}

export default App;
