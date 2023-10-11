//import hooks
import { useEffect, useState} from 'react'; //added
import { useParams } from 'react-router-dom'; //added

function Detail(){
    const { id } = useParams();
    const [data,setData] = useState();

    useEffect(() => {
        const token = 'pat1ShQoUT7Kinm8O.dfa6cc12ac6a940373c3586f5625ed778fac961d716be953c863932fc8947676'
        const url = `https://api.airtable.com/v0/appFMUE36vJvoAUrE/Restaurants/${id}`
        fetch(url, { 
            headers: { Authorization: `Bearer ${token}`} 
        })
        .then((response) => response.json())
        .then((data) => setData(data))
    }, [id]);


    return (
    <main className="container">
        {/* <h1>Detail</h1> */}
          {/* data &&= */}
         {/*fields = */}
        <h1>{data?.fields.Name}</h1>
    </main>
    );
}

export default Detail;