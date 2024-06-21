const Spinner = ({type = "normal"}) => {
  const kaomoji = type === "mini" ? "♨" : "( ˘▽˘)っ♨";

  return (
    <p className="text-theme-text-color animate-spin">{kaomoji}</p>
  );
}

export default Spinner;