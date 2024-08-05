const StyledImage = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="card example-3 transition-transform duration-300 ease-in-out transform hover:scale-105">
        <div className="inner">
          <img
            src="./images/appImage.png"
            alt="App"
            className="w-64 h-auto object-cover rounded-lg "
          />
        </div>
      </div>
    </div>
  );
};

export default StyledImage;
