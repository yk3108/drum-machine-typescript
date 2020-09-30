// eslint-disable-next-line no-use-before-define
import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';

type Props = {
  char: string;
  src: string;
  keyString: string;
  onClick: (char: string) => void;
};

const DrumPad: React.FC<Props> = (props: Props) => {
  useEffect(() => {
    const handleKyeDown = (e: KeyboardEvent) => {
      const { keyString } = props;

      if (e.key.toLowerCase() === keyString) {
        const { char, onClick } = props;
        onClick(char);
      }
    };

    window.addEventListener('keydown', handleKyeDown);
    return () => {
      window.removeEventListener('keydown', handleKyeDown);
    };
  }, [props]);

  const { char, src, onClick } = props;

  return (
    <Button
      id={`${char}-button`}
      className="drum-pad"
      onClick={() => onClick(char)}
    >
      {char}
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <audio src={src} className="clip" id={char} />
    </Button>
  );
};

export default DrumPad;
