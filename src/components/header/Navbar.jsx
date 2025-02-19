import { Link } from "react-router-dom"
function Navbar() {
  return (
    <div className="hidden md:flex justify-center items-center">
      <ul className="flex gap-20 font-semibold text-xl">
        <Link to={'/'}><li className="hover:underline ">Home</li></Link>
        <Link to={'/products'}><li className="hover:underline ">Products</li></Link>
        <Link to={'/products'}><li className="hover:underline ">Bestsellers</li></Link>
      </ul>
    </div>
  )
}

export default Navbar