type TypingDisplayProps = {
  targetText: string;
  inputText: string;
  currentIndex: number;
};

const TypingDisplay: React.FC<TypingDisplayProps> = ({ targetText, inputText, currentIndex }) => {
  return (
    <>
      <div className="text-4xl p-6">
        {targetText.split("").map((char, index) => (
          <span
            key={index}
            className={index === currentIndex ? "text-red-500" : ""}
          >
            {char}
          </span>
        ))}
      </div>
      <div className="flex justify-center text-4xl p-6">{inputText}</div>
      {inputText === targetText && (
        <div className="flex justify-center text-4xl text-green-500 mt-4">
          Congratulations!!
        </div>
      )}
    </>
  );
};

export default TypingDisplay;
