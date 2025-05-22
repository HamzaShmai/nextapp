"use client";
import React, { useState } from "react";

const Page = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [toti, setToti] = useState<{ title: string; desc: string }[]>([]);

  const SubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title.trim() || !desc.trim()) return;
    setToti([...toti, { title, desc }]);
    setTitle("");
    setDesc("");
  };

  let render: React.ReactNode = <h2 className="text-center">No Task Available</h2>;

  if (toti.length > 0) {
    render = toti.map((t, i) => (
      <div key={i} className="bg-white shadow p-4 mb-2 rounded">
        <h5 className="font-bold">{t.title}</h5>
        <p>{t.desc}</p>
      </div>
    ));
  }

  return (
    <div className="max-w-xl mx-auto mt-10 p-4">
      <h2 className="bg-black text-white text-4xl text-center p-4 mb-6 rounded">
        To Do List
      </h2>
      <form onSubmit={SubmitForm} className="space-y-4 mb-6">
        <input
          type="text"
          className="w-full border border-black p-2 rounded"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          className="w-full border border-black p-2 rounded"
          placeholder="Description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <button
          type="submit"
          className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
        >
          Submit
        </button>
      </form>
      <hr className="mb-4" />
      <div className="bg-slate-200 p-4 rounded">
        {render}
      </div>
    </div>
  );
};

export default Page;
