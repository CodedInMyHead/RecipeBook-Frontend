import './PreviewRecipes.css';
import FoodCard from '../FoodCard/FoodCard';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function PreviewRecipes() {
    const [data, setData] = useState([]);
    const maxRecipes = 12;

    useEffect(() => {
    axios.get('http://127.0.0.1:8080/api/v1/recipe')
        .then(response => {
            if (response.status === 200) {
                if (response.data.length > maxRecipes) {
                    setData(response.data.slice(0, maxRecipes));
                } else {
                    setData(response.data);
                }
                
            } else {
                console.log("Received Status Code " + response.status + ".", response)
            }
        })
        .catch(error => {
            console.error(error);
        });
    }, []);


  return (
    <div className='mx-5 my-5 grid'>
        {
        data.map((element) => {
            return <FoodCard key={element.id} recipe={element}/>
        }
        )}
    </div>
  );
}

export default PreviewRecipes;
