import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import HoverVideoPlayer from 'react-hover-video-player';

import icelandImg from './images/iceland.jpg';
import vietnamImg from './images/vietnam.jpg';
import parisImg from './images/paris.jpg';
import driveImg from './images/drive.jpg';
import rioImg from './images/rio.jpg';
import icelandVid from './videos/iceland.mp4';
import vietnamVid from './videos/vietnam.mp4';
import parisVid from './videos/paris.mp4';
import driveVid from './videos/drive.mp4';
import rioVid from './videos/rio.mp4';

import './sass/main.scss';


function App() {
  const LoaderComponent = () => {
    return (
      <Col xs={12} className="loader-container text-center">
        <span class="d-block">Cargando...</span>
      </Col>
    )
  }

  return (
    <Container className="main-container">
      <Row>
        <Col xs={12} className="my-5 text-center">
          <h1>
            Videos Landing
          </h1>
        </Col>
      </Row>

      <Row>
        <Col xs={12} md={4} className="vid-container my-3">
          <HoverVideoPlayer
            videoSrc={icelandVid}
            pausedOverlay={
              <img src={icelandImg} alt="Iceland" />
            }
            loadingOverlay={
              <LoaderComponent />
            }
          />
        </Col>

        <Col xs={12} md={4} className="vid-container my-3">
          <HoverVideoPlayer
            videoSrc={parisVid}
            pausedOverlay={
              <img src={parisImg} alt="Paris" />
            }
            loadingOverlay={
              <LoaderComponent />
            }
          />
        </Col>

        <Col xs={12} md={4} className="vid-container my-3">
          <HoverVideoPlayer
            videoSrc={vietnamVid}
            pausedOverlay={
              <img src={vietnamImg} alt="Vietnam" />
            }
            loadingOverlay={
              <LoaderComponent />
            }
          />
        </Col>

        <Col xs={12} md={4} className="vid-container my-3">
          <HoverVideoPlayer
            videoSrc={driveVid}
            pausedOverlay={
              <img src={driveImg} alt="Drive" />
            }
            loadingOverlay={
              <LoaderComponent />
            }
          />
        </Col>
        
        <Col xs={12} md={4} className="vid-container my-3">
          <HoverVideoPlayer
            videoSrc={rioVid}
            pausedOverlay={
              <img src={rioImg} alt="Rio" />
            }
            loadingOverlay={
              <LoaderComponent />
            }
          />
        </Col>
      </Row>

      <footer className="text-center">
        <hr />
        <p>&copy; Copyrights 2020</p>
      </footer>
    </Container>
  );
}

export default App;
