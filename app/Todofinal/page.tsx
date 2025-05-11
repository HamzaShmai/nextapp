"use client"
import React, { useState } from 'react'

const Page = () => {
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [toti, setToti] = useState<{ title: string; desc: string }[]>([]);

  const SubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setToti([...toti, { title, desc }]);
    setTitle("");
    setDesc("");
  };
  

  let render = <h2>No Task Available</h2>
  if (toti.length > 0) {
    render = toti.map((t, i) => (
      <div>
        <h5>{t.title}</h5>
        <h5>{t.desc}</h5>
      </div>
    ))
  }

  return (
    <div>
      <h2 className='bg-black text-white text-4xl'>To Do List</h2>
      <form onSubmit={SubmitForm}>
        <input
          type="text"
          className='border border-black'
          placeholder='Title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          className='border border-black'
          placeholder='Description'
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <button className='bg-black text-white p-2'>Submit</button>
      </form>
      <hr />
      <div className='bg-slate-400 p-2'>
        <ul>{render}</ul>
      </div>
    </div>
  )
}

export default Page
