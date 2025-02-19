import { Link } from "react-router-dom"

function Home() {
  return (
    <>
       <div className="flex w-full mt-16">
        <div className="p-7">
          <p className="text-8xl font font-extrabold text-fuchsia-950 max-w-2xl">Explore <span>THE BEST </span>Products </p>
          <p className="text-3xl mt-5">Shop the best products at the best prices.</p>
          <div className="mt-5">
            <Link className="text-white text-xl font-semibold rounded-xl bg-red-500 px-5 py-3">Shop Now</Link>
          </div>
        </div>
        <div>
          <img src="https://cdn.dribbble.com/users/790118/screenshots/6971331/media/d1e6cf91d6df3a0ba4dcdffd0b4a05f2.gif" alt="" />
        </div>
      </div>
    </>
  )
}

export default Home