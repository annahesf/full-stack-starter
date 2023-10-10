import { useEffect, useState} from 'react'; //added
import { Helmet } from 'react-helmet-async';
import { useStaticContext } from './StaticContext';



import Item from './Item'; //added


function Home() {
  const[data,setData] = useState(); //added
  useEffect( () => {
    const token = 'pat1ShQoUT7Kinm8O.dfa6cc12ac6a940373c3586f5625ed778fac961d716be953c863932fc8947676'
    const url = 'https://api.airtable.com/v0/appFMUE36vJvoAUrE/Restaurants?view=Grid%20view'
    fetch(url, { 
      headers: { Authorization: `Bearer ${token}`} 
    })
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
        <h1 className=''>Bay Area Restaurant Reviews</h1>
        {data?.records.map((record) => <Item key={record.id} id={record.id} title={record.fields.Name} />)} 
        <p class="endingRemark">Thanks for stopping by!</p>
      
      </main>
    </>
  );
}

export default Home;
