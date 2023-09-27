import { Helmet } from 'react-helmet-async';
import { useStaticContext } from './StaticContext';


import Item from './Item'; //added


function Home() {
  const staticContext = useStaticContext();
  return (
    <>
      <Helmet>
        <title>Home - {staticContext?.env?.VITE_SITE_TITLE ?? ''}</title>
      </Helmet>
      <main className="container">
        <h1>Home</h1>
        <p>this is a test!!</p>
        <Item title = "title1"></Item>
        <Item title = "title2"></Item>
        <Item title = "title3"></Item>
      </main>
    </>
  );
}

export default Home;
