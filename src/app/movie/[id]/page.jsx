import React from "react";
import Image from "next/image";

const getMovie = async (id) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=ENTER HERE YOUR API KEY`
  );
  return await res.json();
};

const Page = async ({ params }) => {
  const id = params.id;
  const movieDetail = await getMovie(id);

  console.log(movieDetail, "movieDetail");

  return (
    <div className=" relative p-7 min-h-screen">
      <Image
        style={{ objectFit: "cover" }}
        fill
        src={`https://image.tmdb.org/t/p/original/${
          movieDetail?.backdrop_path || movieDetail?.poster_path
        }`}
      />
      <div className=" absolute">
        <div className="text-4xl font-bold my-3">{movieDetail?.title}</div>
        <div className="text-2xl font-semibold my-3">
          {movieDetail?.tagline}
        </div>
        <div className="w-1/2 opacity-70 text-xl">{movieDetail?.overview}</div>
        <div className="font-bold my-3 ">{movieDetail?.release_date}</div>
        <div className="border w-32 p-2 rounded-md text-center text-lg cursor-pointer my-2 hover:bg-white hover:text-black">
          Trail
        </div>
      </div>
    </div>
  );
};

export default Page;
