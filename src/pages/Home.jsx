import { Carousel } from "../cmps/Home/Carousel";

export function Home() {
  return (
    <div className=" h-[calc(100vh-5em)] w-screen flex justify-center items-center ">
      <div className="hero grid grid-cols-2  w-[90%] h-[90%] bg-cyan-50 justify-between">
        <div className="text-content col-start-1 col-end-1 flex flex-col m-14">
          <h1 className="text-slate-600 font-extrabold text-7xl ">We Build <br/>Future</h1>
          <div className="flex flex-col gap-1 text-slate-400 mt-10 text-lg">
            <p>In the tumultuous business of cutting-in and</p>
            <p>attending to a whale, there is much running</p>
            <p>backwards and Now hands are wanted here.</p>
          </div>
        </div>
        <Carousel gridClasses={'col-start-2 col-end-2'}/>
      </div>
    </div>
  )
}
