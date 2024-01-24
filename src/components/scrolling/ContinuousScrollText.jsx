import './scrolling.css'; // Ensure you import the stylesheet where you added the above CSS

const ContinuousScrollText = () => {
  const text = "Java Python GoLang JavaScript CSS HTML SQL ProgressABL ";
  const repeatedText = text.repeat(20); // Repeat the text

  return (
    <div className="marquee p-4">
      <span className="marquee-text text-[4em] font-bold text-gray-800">
        {repeatedText}
      </span>
    </div>
  );
};

export default ContinuousScrollText;
