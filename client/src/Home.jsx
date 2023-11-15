import { useEffect, useState} from 'react'; //added
import { Helmet } from 'react-helmet-async';
import { useStaticContext } from './StaticContext';

import Item from './Item'; //added


function Home() {
  const[data,setData] = useState(); //added
  useEffect( () => {
    fetch('/api/restaurant')
      .then((response) => response.json())
      .then((data) => setData(data))
  }, []);

  
 console.log(data); //debugging

  const staticContext = useStaticContext();
  return (
    <>
      <Helmet>
        <title>Home - {staticContext?.env?.VITE_SITE_TITLE ?? ''}</title>
      </Helmet>
      <main className="container">
        <h1 className="HomePageTitle">Bay Area Restaurant Reviews</h1>
        <div className="container-items">
        {data?.map((record) => (
            <Item
              key={record.id}
              id={record.id}
              title={record.Name}
              rating={record.Rating} // Pass the rating to the Item component
              address={record.Address}
              description={record.Description}
              // image={record.fields.Image}
            />
          )
          )}
        </div>
        <p className="endingRemark">Thanks for stopping by!</p>
      
      </main>
    </>
  );
}

export default Home;
