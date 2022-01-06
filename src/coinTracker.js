import { useState } from 'react';
import { useEffect } from 'react';

function App(){
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);
    const [money, setMoney] = useState([]);
    useEffect(() => {
        fetch("https://api.coinpaprika.com/v1/tickers")
        .then((response) => response.json())
        .then((json) => {
            setCoins(json)
            setLoading(false);
        });
    }, []);
    const onChange = (event) => setMoney(event.target.value);
    return (<div>
        <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
        <input
            onChange={onChange}
            value = {money}
            type="number"
            placeholder='Write USD you have...'></input>        
        <hr/>
        {loading ? <strong>Loading...</strong> : (
        <select>
            {coins.map((coin) => 
            <option>{coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD 
            => {money / coin.quotes.USD.price} {coin.symbol}</option>)}
        </select>)}

        
    </div>);
}

export default App;