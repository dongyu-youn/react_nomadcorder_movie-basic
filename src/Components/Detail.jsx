import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const getMovie = async () => {
    const json = await await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    );
    console.log(json);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return <h1> Detail </h1>;
}
export default Detail;

// 오케이 여러분 한번 내 스스로 로딩중인 영화웹사이트를 만들어보자

// 집중이 안되므로 나가서 운동좀 하고 올게요.. 여기까지만 하고
