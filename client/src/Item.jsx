import { Link } from 'react-router-dom';

function Item({ id, title, rating, address, description , image}) {
    return (
        <div className="card mb-3">
        <h3>{title}</h3> {/* Title is the restaurant name*/}
        <p>Rating: {rating}</p> {/* display rating */}
        <p>Address: {address}</p> {/* display address */}
        <p>Description: {description}</p> {/* display description */}
        <p>{image}</p>
        <Link to={`/detail/${id}`}>Link</Link>
      </div>
    );
  }

export default Item;