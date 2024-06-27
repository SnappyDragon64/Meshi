const Spinner = ({type = "normal"}) => {
  const kaomoji = type === "mini" ? "♨" : "( ˘▽˘)っ♨";

  return (
    <div className="grow items-center justify-center flex m-auto">
      <p className="h-fit text-theme-text-color animate-spin">{kaomoji}</p>
    </div>
  );
}

export default Spinner;