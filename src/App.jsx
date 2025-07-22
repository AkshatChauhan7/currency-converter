import { useState } from "react";
import { getcurrency } from "./api/postapi";
import './App.css';

const App = () => {
  const [amount, setAmount] = useState(1);  // amount of currency to be converted
  const [fromCurrency, setFromCurrency] = useState("USD");  // base currency
  const [toCurrency, setToCurrency] = useState("INR"); // desired currency
  const [convertAmount, setConvertAmount] = useState(0); // converted
  const [loading, setLoading] = useState(false); // loading state
  const [error, setError] = useState(null); // error state
  

  const handleConvert = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await getcurrency(fromCurrency, toCurrency, amount);
      const data = response.data;
      setLoading(false);
      setConvertAmount(data.conversion_result);
      console.log(data);
    } catch (error) {
      setError("Got an error: " + error.message);
      console.log(error);
    }
  };

  return (
    <section className="container">
      <div className="currency-div">
        <h1>Convert your currency</h1>

        <div>
          <label htmlFor="amount of currency">
            Amount of currency:
            <input
              type="number"
              id="amount of currency"
              value={amount}
              onChange={(e) => {
  setAmount(e.target.value);
  setConvertAmount(0); // clear old result
}}
            />
          </label>
        </div>

        <div className="currency-selector">
          <div>
            <label>
              From:
              <select
  value={fromCurrency}
  onChange={(e) => {
    setFromCurrency(e.target.value); 
    setConvertAmount(0);
  }}
>
                <option value="USD">USD - US Dollar 🇺🇸</option>
                <option value="EUR">EUR - Euro 🇪🇺</option>
                <option value="GBP">GBP - British Pound 🇬🇧</option>
                <option value="INR">INR - Indian Rupee 🇮🇳</option>
                <option value="JPY">JPY - Japanese Yen 🇯🇵</option>
                <option value="AUD">AUD - Australian Dollar 🇦🇺</option>
                <option value="CAD">CAD - Canadian Dollar 🇨🇦</option>
                <option value="CHF">CHF - Swiss Franc 🇨🇭</option>
                <option value="CNY">CNY - Chinese Yuan 🇨🇳</option>
                <option value="SGD">SGD - Singapore Dollar 🇸🇬</option>
                <option value="NZD">NZD - New Zealand Dollar 🇳🇿</option>
                <option value="AED">AED - UAE Dirham 🇦🇪</option>
                <option value="HKD">HKD - Hong Kong Dollar 🇭🇰</option>
                <option value="SEK">SEK - Swedish Krona 🇸🇪</option>
                <option value="ZAR">ZAR - South African Rand 🇿🇦</option>
                <option value="BRL">BRL - Brazilian Real 🇧🇷</option>
                <option value="MXN">MXN - Mexican Peso 🇲🇽</option>
                <option value="RUB">RUB - Russian Ruble 🇷🇺</option>
              </select>
            </label>
          </div>

          <div>
            <label>
              To:
              <select
  value={toCurrency}
  onChange={(e) => {
    setToCurrency(e.target.value); 
    setConvertAmount(0);
  }}
>
              
                <option value="USD">USD - US Dollar 🇺🇸</option>
                <option value="EUR">EUR - Euro 🇪🇺</option>
                <option value="GBP">GBP - British Pound 🇬🇧</option>
                <option value="INR">INR - Indian Rupee 🇮🇳</option>
                <option value="JPY">JPY - Japanese Yen 🇯🇵</option>
                <option value="AUD">AUD - Australian Dollar 🇦🇺</option>
                <option value="CAD">CAD - Canadian Dollar 🇨🇦</option>
                <option value="CHF">CHF - Swiss Franc 🇨🇭</option>
                <option value="CNY">CNY - Chinese Yuan 🇨🇳</option>
                <option value="SGD">SGD - Singapore Dollar 🇸🇬</option>
                <option value="NZD">NZD - New Zealand Dollar 🇳🇿</option>
                <option value="AED">AED - UAE Dirham 🇦🇪</option>
                <option value="HKD">HKD - Hong Kong Dollar 🇭🇰</option>
                <option value="SEK">SEK - Swedish Krona 🇸🇪</option>
                <option value="ZAR">ZAR - South African Rand 🇿🇦</option>
                <option value="BRL">BRL - Brazilian Real 🇧🇷</option>
                <option value="MXN">MXN - Mexican Peso 🇲🇽</option>
                <option value="RUB">RUB - Russian Ruble 🇷🇺</option>
              </select>
            </label>
          </div>
        </div>

        <button disabled={loading || amount <= 0} onClick={handleConvert}>
          {loading ? "Converting..." : "Convert"}
        </button>

        {/* RESULT – Now correctly inside the card */}
        {convertAmount > 0 && (
          <div className="conversion-result">
            <p>1 {fromCurrency} = {(convertAmount / amount).toFixed(2)} {toCurrency}</p>
            <h2>
              {amount} {fromCurrency} = {convertAmount.toFixed(2)} {toCurrency}
            </h2>
          </div>
        )}

        {/* Optional: Error Display */}
        {error && (
          <div className="conversion-result" style={{ background: "#ff4d4f" }}>
            <p>{error}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default App;
