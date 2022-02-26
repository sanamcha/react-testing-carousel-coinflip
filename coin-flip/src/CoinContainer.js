import React, {useState} from 'react';
import Coin from './Coin';

const option = (arr) => {
    const ranIdx = Math.floor(Math.random() * arr.length);
    return arr[ranIdx];
}

const CoinCointainer = (props) => {
    const [coin, setCoin] = useState(null);
    const [headCount, setHeadCount] = useState(0);
    const [tailCount, setTailCount] = useState(0);
    const handleClick = () => {
        const newCoin = option(props.coins);
        setCoin(newCoin);
        if(newCoin.side === "head") {
            setHeadCount(oldCount => oldCount + 1);
        } else {
            setTailCount(oldCount => oldCount + 1);
        }
    };

    const currentCoin = coin ? (
        <Coin side={coin.side} img={coin.img} />
    ) : null ;

    return (
        <div className="CoinContainer">
            <h2>Let's flip a coin!</h2>
            {currentCoin}
            <button onClick={handleClick}>Flip me!!</button>
            <p>
                Out of {headCount + tailCount} flips, there have been {headCount} heads and {tailCount} tails.
            </p>
        </div>
    );

}

CoinCointainer.defaultProps = {
    coins: [
        {
            side:"head",
            img:"https://i.ebayimg.com/images/g/xtcAAOSwLwBaZigS/s-l400.jpg"
        },
        {
            side:"tail",
            img:"https://www.picclickimg.com/d/l400/pict/253816518010_/Coin-Magic-Trick-Double-Sided-Quarter.jpg"
        }
    ]
};


export default CoinCointainer;