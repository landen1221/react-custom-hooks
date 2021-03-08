import React, { useState } from 'react'
import axios from 'axios'
import uuid from "uuid";

const useAxios = (url, extension) => {
    const [cards, setCards] = useState([])

    const addCard = async () => {
        const response = await axios.get(url);
          setCards(cards => [...cards, { ...response.data, id: uuid() }]);
    }

    return [cards, addCard]
}

export default useAxios;