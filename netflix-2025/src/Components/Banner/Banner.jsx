
import { useState, useEffect } from "react";
import axios from "../../utils/axios";
import requests from "../../utils/requests";
import { IoIosPlay } from "react-icons/io";
import { IoIosInformationCircleOutline } from "react-icons/io";


import "./Banner.css";

function Banner() {
  const [movie, setMovie] = useState({});
// console.log(movie)
  useEffect(() => {
    async function fetchData() {
      try {
        const request = await axios.get(requests.fetchNetflixOriginals);
        console.log(request);
        setMovie(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length)
          ]
        );
      } catch (error) {
        console.log("error", error.message);
      }
    }
    fetchData(); //Calls the fetchData function to execute the API request
  }, []);

  // Truncate function
  const truncate = (str, n) =>
    str?.length > n ? str.substr(0, n - 1) + "..." : str;

  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "black",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button play"> <IoIosPlay /> Play</button>
          <button className="banner_button"> <IoIosInformationCircleOutline /> More Info</button>
        </div>
        <h1 className="banner_description">{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className="banner_fadebottom" />
    </div>
  );
}

export default Banner;






































































































// import { useState, useEffect } from "react";
// import axios from "../../utils/axios";
// import requests from "../../utils/requests";
// import { IoIosPlay } from "react-icons/io";
// import { IoIosInformationCircleOutline } from "react-icons/io";

// import "./Banner.css";

// function Banner() {
//   const [movie, setMovie] = useState({});

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const request = await axios.get(requests.fetchNetflixOriginals);
//         setMovie(
//           request.data.results[
//             Math.floor(Math.random() * request.data.results.length)
//           ]
//         );
//       } catch (error) {
//         console.log("error", error);
//       }
//     }
//     fetchData();
//   }, []);

//   const truncate = (str, n) =>
//     str?.length > n ? str.substr(0, n - 1) + "..." : str;

//   return (
//     <div
//       className="banner text-white d-flex align-items-end"
//       style={{
//         backgroundSize: "cover",
//         backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//       }}
//     >
//       <div className="container py-5 banner_contents">
//         <h1 className="banner_title fw-bold">
//           {movie?.title || movie?.name || movie?.original_name}
//         </h1>
//         <div className="banner_buttons my-3">
//           <button className="btn btn-light me-2">
//             <IoIosPlay className="me-1" /> Play
//           </button>
//           <button className="btn btn-secondary">
//             <IoIosInformationCircleOutline className="me-1" /> More Info
//           </button>
//         </div>
//         <p className="banner_description lead">
//           {truncate(movie?.overview, 150)}
//         </p>
//       </div>
//       <div className="banner_fadebottom" />
//     </div>
//   );
// }

// export default Banner;
