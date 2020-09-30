// eslint-disable-next-line no-use-before-define
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import DrumPad from './DrumPad';
import drumPadsArray from './drumPadsArray';
import 'bootstrap/dist/css/bootstrap.min.css';

const App: React.FC = () => {
  const [displayValue, setdisplayValue] = useState(
    'Click the button or press the key.'
  );

  const handleClick = (char: string) => {
    const audio = document.getElementById(char) as HTMLAudioElement;

    audio.currentTime = 0;
    audio.play();
    setdisplayValue(char);
  };

  const drumPads = drumPadsArray.map((item) => {
    return (
      <DrumPad
        key={`${item.char}-button`}
        char={item.char}
        keyString={item.keyString}
        src={item.src}
        onClick={handleClick}
      />
    );
  });

  return (
    <Container fluid id="drum-machine" className="text-center">
      <Row>
        <Col>
          <h1>Drum Machine</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <div id="display">{displayValue}</div>
        </Col>
      </Row>
      <Row>
        <Col>{drumPads}</Col>
      </Row>
    </Container>
  );
};

export default App;
