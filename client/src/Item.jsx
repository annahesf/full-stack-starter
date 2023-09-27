import { Link } from 'react-router-dom'


function Item({ title }) {
    return <div className ="card mb-3">
        {title} <Link to="/detail">Link</Link>
        </div>;
    //return <div>Item function return placeholder</div>
}


export default Item;