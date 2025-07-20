import { useState, useEffect, useMemo, useRef } from 'react';

/**
 * A custom React hook that simulates a typewriter effect for a given text,
 * with an option to highlight buzzwords and accelerate the typing speed.
 *
 * @param {string} text The full string to be typed out.
 * @param {string[]} [buzzwords=[]] An array of words to be highlighted.
 * @param {number} [speed=50] The initial typing speed (delay) in milliseconds per character.
 * @param {number} [increase=0] The percentage to increase speed per character (e.g., 1 for 1%).
 * @returns {JSX.Element} The JSX element containing the typed text.
 */
const useTypewriter = (text, buzzwords = [], speed = 50, increase = 0) => {
  const [displayedContent, setDisplayedContent] = useState(<></>);
  const timeoutId = useRef(null);         // <-- Moved here
  const currentSpeed = useRef(speed);     // <-- Moved here

  const segments = useMemo(() => {
    if (!buzzwords || buzzwords.length === 0) {
      return [{ text, isBuzzword: false }];
    }
    const regex = new RegExp(`(${buzzwords.join('|')})`, 'gi');
    const parts = text.split(regex);
    return parts.filter(Boolean).map(part => ({
      text: part,
      isBuzzword: buzzwords.some(b => b.toLowerCase() === part.toLowerCase()),
    }));
  }, [text, buzzwords]);

  useEffect(() => {
    let typedSegmentsText = segments.map(() => '');
    let segmentIndex = 0;
    let charIndex = 0;

    const typeCharacter = () => {
      if (segmentIndex >= segments.length) {
        return; // Typing finished
      }

      const currentSegment = segments[segmentIndex];
      typedSegmentsText[segmentIndex] += currentSegment.text[charIndex];

      setDisplayedContent(
        <>
          {segments.map((segment, index) => {
            const textToRender = typedSegmentsText[index];
            if (!textToRender) return null;
            return segment.isBuzzword ? (
              <span key={index} className="buzzword">
                {textToRender}
              </span>
            ) : (
              <span key={index}>{textToRender}</span>
            );
          })}
        </>
      );

      charIndex++;
      if (charIndex >= currentSegment.text.length) {
        charIndex = 0;
        segmentIndex++;
      }

      if (segmentIndex < segments.length) {
        if (increase > 0) {
          const newSpeed = currentSpeed.current * (1 - increase / 100);
          currentSpeed.current = Math.max(1, newSpeed);
        }
        timeoutId.current = setTimeout(typeCharacter, currentSpeed.current);
      }
    };

    currentSpeed.current = speed; // Reset speed on rerun
    timeoutId.current = setTimeout(typeCharacter, currentSpeed.current);

    return () => {
      if (timeoutId.current) {
        clearTimeout(timeoutId.current);
      }
    };
  }, [segments, speed, increase]);

  return displayedContent;
};

/**
 * A component that displays text with a typewriter effect.
 *
 * @param {object} props
 * @param {string} props.text The text to display.
 * @param {number} [props.speed=50] The initial typing speed in milliseconds.
 * @param {number} [props.increase=0] The percentage to increase speed per character.
 * @param {string[]} [props.buzzwords=[]] A list of words to highlight with the 'buzzword' class.
 */
const Typewriter = ({ text, speed, increase, buzzwords }) => {
  const displayedContent = useTypewriter(text, buzzwords, speed, increase);
  return <>{displayedContent}</>;
};

export default Typewriter;
