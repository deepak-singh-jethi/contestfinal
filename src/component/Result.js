import React, { useState, getNextPin } from "react";

function Result({ data, getNextPin }) {
  const [filterInput, setFilterInput] = useState("");

  const postOfficeData = data[0].PostOffice;

  const filteredData = postOfficeData.filter((postOffice) => {
    return postOffice.Name.toLowerCase().includes(filterInput.toLowerCase());
  });
  console.log(filteredData);
  const handleNext = () => {
    getNextPin(null);
  };

  return (
    <div>
      <header>
        <div id="head-box">
          <h1> pinCode : {data[0].PostOffice[0].Pincode}</h1>
          <p>
            <button onClick={handleNext}> Get next Pincode</button>
          </p>
        </div>

        <h2 style={{ display: "inline" }}>Message :</h2>
        <span>{data[0].Message}</span>
      </header>
      <input
        style={{
          marginBlock: "20px",
        }}
        type="text"
        placeholder="Filter result"
        value={filterInput}
        onChange={(e) => setFilterInput(e.target.value)}
      />
      <div id="postoffice-conatiner">
        {filteredData.map((postOffice) => {
          return (
            <div key={postOffice.Name} id="postOfficeCard">
              <p>Name: {postOffice.Name}</p>
              <p>Branch Type: {postOffice.BranchType}</p>
              <p>Delivery Type: {postOffice.DeliveryStatus}</p>
              <p>District: {postOffice.District}</p>
              <p>State: {postOffice.State}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Result;
