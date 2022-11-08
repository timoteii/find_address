import { useEffect, useState } from "react";
import { AddressSuggestions, DaDataSuggestion } from "react-dadata";
import "react-dadata/dist/react-dadata.css"
import "./SearchAdress.scss";

const SearchAddress = () => {
  const [value, setValue] = useState();
  const url =
    "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
  const token = "698d3b25d9edead846542b64121ebb45acf3e2c5";
  const query = "москва хабар";

  const options: RequestInit = {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Token " + token,
    },
    body: JSON.stringify({ query: query }),
  };
  
  function SendRequest() {
    return fetch(url, options)
      .then((response) => response.text())
      .catch((error) => console.log("error", error));
  }

  return (
    <div className="search">
      <div className="search__container">
        <div className="search__title">Поиск адресов</div>
        <div className="search__subtitle">Введите интересующий вас адрес</div>
        <AddressSuggestions
          token={token}
          value={value}
          count={25}
          onChange={SendRequest}
          minChars={3}
        />
      </div>
    </div>
  );
};

export { SearchAddress };
