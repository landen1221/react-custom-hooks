import React, { useState } from 'react'
import axios from 'axios'
import uuid from "uuid";

const useAxios = (url) => {
    const [cards, setCards] = useState([])

    const addCard = async (extension) => {
        if (extension) {
            url = `${url}${extension}`
        } 
        const response = await axios.get(url);
          setCards(cards => [...cards, { ...response.data, id: uuid() }]);
    }

    return [cards, addCard]
}

export default useAxios;