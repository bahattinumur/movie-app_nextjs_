import Movies from "@/components/Movies";
import React from "react";

const Page = async ({ params }) => {
  const keyword = params.keyword;
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=573bd5fe2c348bb90cefc57ec1889af6&query=${keyword}&language=en-US&include_adult=false`
  );
  const data = await res.json();
  return (
    <div>
      {!data?.results ? (
        <div>No Movie Found</div>
      ) : (
        <div className="flex items-center flex-wrap gap-3">
          {" "}
          {data?.results?.map((dt, i) => (
            <Movies key={i} dt={dt} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Page;
