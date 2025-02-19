
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to={"/home"}>
      <span className="text-black text-2xl fa-square-minus">ShoppyGlobe</span>
    </Link>
  );
};

export default Logo;