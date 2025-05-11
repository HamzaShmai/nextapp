"use client";
import { exit } from "process";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [item, setItem] = useState("");
  const [data, setData] = useState([]);

  const submit = (e) => {
    e.preventDefault();
    setData([...data, item]);
    setItem(""); 
  };
  const removeItem = async(itemIndex) => {
   console.log(itemIndex) 
   data.map((dataItem , index)=>{
    console.log(dataItem , index);
    if(itemIndex == index){
      console.log("found it at "+index);

      data.pop(index);
      setData(data)
      
    }
   })
   
  };
  return (
    <div>
      <input
        type="text"
        required
        value={item}
        className="border border-black p-4"
        onChange={(e) => setItem(e.target.value)}
      />
      <button onClick={submit} className="border border-black p-4 ml-2">
        check
      </button>

      <div className="mt-4">
        {
        data.map((itemNew, index) => (
          <div key={index} className="flex items-center gap-4">
            <h1>{itemNew}</h1>
            <button onClick={(e)=>removeItem(index)}>X</button>
           
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;




