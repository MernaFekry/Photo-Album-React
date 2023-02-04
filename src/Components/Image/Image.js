import React from 'react';
import axios from 'axios';
import { useState , useEffect} from 'react';


export default function Image() {
    
    const [imageList, setImageList] = useState([{}]);


    async function getImageAPI(){
        let response = await axios.get("https://picsum.photos/v2/list");
        setImageList( 
            ...[response]
        )
        // console.log(response.data[0]);
        // console.log(imageList);
    }

    useEffect(() => {
        getImageAPI();
        console.log(imageList.data);
        // console.log(response);
        
    }, []);

  
    return <>

    
        <h2>  </h2>
        <img src={imageList.data[0].download_url} width="300px"></img>
        
    </>
}


