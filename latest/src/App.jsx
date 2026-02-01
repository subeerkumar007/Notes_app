import React, { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [task, setTask] = useState([]);
  const submitHandler = e => {
    e.preventDefault();

    const copytask = [...task];
    copytask.push({ title, details });
    console.log(copytask);

    setTask(copytask);
    setTitle("");
    setDetails("");
  };
  return (
    <div className="min-h-screen bg-black text-white flex items-start justify-center py-12">
      <div className="w-full max-w-5xl bg-transparent">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
          <div className="w-full md:w-1/2">
            <form className="w-full" onSubmit={e => submitHandler(e)}>
              <div className="flex flex-col gap-6">
                {/* Title Input */}
                <input
                  type="text"
                  placeholder="Enter Notes Heading"
                  className="w-full border-2 border-white rounded-lg bg-transparent placeholder-gray-300 px-5 py-3 text-white focus:outline-none"
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                />
                {/* Details Textarea */}

                <textarea
                  placeholder="Write Details"
                  className="w-full h-40 resize-none border-2 border-white rounded-lg bg-transparent placeholder-gray-300 px-5 py-4 text-white focus:outline-none"
                  value={details}
                  onChange={e => setDetails(e.target.value)}
                />

                <button
                  type="submit"
                  className="w-full bg-white text-black rounded-md py-4 text-lg font-medium active:scale-95 transition-transform"
                >
                  Add Note
                </button>
              </div>
            </form>
          </div>

          <div className="w-full md:w-1/2 flex items-center justify-center">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/049/578/155/small/a-black-and-white-drawing-of-a-man-writing-png.png"
              alt="writing illustration"
              className="w-80 h-auto"
            />
          </div>
        </div>

        <div className="lg:w-1/2 bg-gray-900 p-10">
          <h1 className="text-xl font-bold">Your Notes</h1>
          <div className="flex flex-wrap gap-5 mt-5">
            {task.map((elem, idx) => (
              <div
                key={idx}
                className="h-52 w-40 rounded-xl text-black p-4 bg-white"
              >
                <h3 className="leading-tight text-xl font-bold">
                  {elem.title}
                </h3>
                <p className="text-sm mt-2">{elem.details}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
