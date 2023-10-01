import cafe from "../imgs/cafe.svg";

const Header = () => {
  const customFontStyle = {
    fontFamily: 'Indie Flower, cursive',
    fontSize: '3rem',
    fontWeight: 'bolder'
  };
  return (
    <div className="w-full">
      <h1 style={customFontStyle} className="mb-3">El aroma mágico</h1>
      <hr className="my-1" />
      <img src={cafe} alt="cafe" className="h-[250px] w-full object-cover mt-3 mb-3" />
      <hr className="my-1" />
    </div>
  );
};

export default Header;
