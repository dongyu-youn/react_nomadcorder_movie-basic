import propTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, coverImg, title, summary, genres }) {
  // 여기서는 이제 props를 받아서 활용을 해봐야지
  return (
    <div>
      <h1>
        <Link to="/movie/${id}">{title}</Link>
      </h1>
      <span>{summary}</span>
      <img src={coverImg}></img>
    </div>
  );
}

// proptypes는 좀 귀찮.ㅎ

export default Movie;

// 오케이 지금부터 아까 하던거 마무리 해봅시다
