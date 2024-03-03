import "./App.css";
import { useState } from "react";
import Input from "./component/Input";
import Result from "./component/Result";
import Loading from "./component/Loading";
import Error from "./component/Error";

function App() {
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [isloading, setIsLoading] = useState(false);

  const handleFetchData = async (pincode) => {
    setIsLoading(true);
    setError(null);
    setResult(null);

    const response = await fetch(
      `https://api.postalpincode.in/pincode/${pincode}`
    );

    const data = await response.json();

    setIsLoading(false);

    if (data[0].Status === "Error" || data[0].Status == 404) {
      setError(data[0].Message);
      return;
    } else {
      setResult(data);
    }
  };

  return (
    <div className="App">
      {!result ? <Input onSubmit={handleFetchData} /> : ""}
      {isloading && <Loading />}
      {error && <Error error={error}></Error>}
      {result && <Result data={result} getNextPin={setResult}></Result>}
    </div>
  );
}

export default App;
