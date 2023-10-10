import { Link } from 'react-router-dom';

function Item({ id, title }) {
  return  (
  <div className="card mb-3">
  {title} <Link to={`/detail/${id}`}>Link</Link>
  </div>
  );
}

export default Item;