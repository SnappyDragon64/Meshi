const Spinner = ({type}) => {
  const kaomoji = type === "mini" ? "♨" : "( ˘▽˘)っ♨";

  return (
    <p className="text-theme-text-color animate-spin">{kaomoji}</p>
  );
}

Spinner.defaultProps = {
  type: "normal"
};

export default Spinner;