import { useEffect, useState } from "react";
import Movie from "../Components/Movie";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  // 여기서 fetch함수를 통해서 데이터를 파싱해야해
  // 나중에 실행하는이유땜에 async를 사용한다 왜냐면 로딩을 사용해야하니깐

  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    // 아 여기 배열에다가
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      <h1>Loading</h1>
      <div>
        {loading ? (
          <h1>Loading ...</h1>
        ) : (
          <div>
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                coverImg={movie.medium_cover_image}
                title={movie.title}
                summary={movie.summary}
                genres={movie.genres}
              />
              // 지금 이 무비라는 컴포넌트를 만들어줘야하는데 어떻게 할거냐
              // 우선 무비를 사진하나 글하나 이렇게 띄울거기 때문에 여기다가 모양을 만들어줄거야
              // 이제 오류를 살펴보자
              // 잘 나오지??
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
export default Home;
