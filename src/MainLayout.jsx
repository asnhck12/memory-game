import { useState } from "react";
import Card from "./Card"
import { useEffect } from "react";

function MainLayout() {
    const [numbersArray, setNumbersArray] = useState([]);
    const [images, setImages] = useState([]);
    const [points, setPoints] = useState(0);
    const [selected, setSelected] = useState([]);
    const [highScore,setHighScore] = useState(0);

    const shuffle = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    const selectedArray = (number) => {
        setSelected(prevSelected => {
            if (selected.includes(number)) {
                if (points > highScore) {
                    setHighScore(points)
                }
                setPoints(0);
                setSelected([]);
            } {
            return [...prevSelected, number];
}})}

const handleClick = (number, event) => {
    event.preventDefault();
    const shuffled = shuffle(numbersArray);
    setNumbersArray([...shuffled]);
    setPoints(prevCount => prevCount + 1);
    selectedArray(number);

}

useEffect(() => {
    const fetchImages = async () => {
    let randomNumbers = [];
    while (randomNumbers.length < 12) {
    const randomNumber = Math.floor(Math.random() *1001);
    if (!randomNumbers.includes(randomNumber)) {
        randomNumbers.push(randomNumber);
    }
}
    setNumbersArray(randomNumbers);
}
fetchImages();
}, []);

useEffect(() => {
const fetchImage = async (pokemon) => {
    try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + pokemon, {mode: 'cors'});
    const responseData = await response.json();
    const responseDataImage = responseData.sprites.other.home.front_default;
    const responseDataName = responseData.species.name;
    setImages(prevData => ({...prevData, [pokemon]: {name: responseDataName, image: responseDataImage}}));
    } catch (error) {
        console.log("Error fetchin image:", error);
    }
};
numbersArray.forEach(pokemon => fetchImage(pokemon));
}, 
[numbersArray]);

    return (
    <>
    <div className="main">
    <div className="cards">
        {numbersArray.map((number, index) => (
            <div key={index} className={number}>
                <Card handleClick={(e) => handleClick(number, e)} image={images[number]?.image} name={images[number]?.name}/>
                
    </div>

        )
)}

    </div>
    <div className="points">
        <p>Points: {points}</p>
        <p>High Score: {highScore}</p>
    </div>
    </div>
    </>
    )
}

export default MainLayout;