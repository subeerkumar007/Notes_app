import React from "react";

const App = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-start justify-center py-12">
      <div className="w-full max-w-5xl bg-transparent">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
          <div className="w-full md:w-1/2">
            <form className="w-full">
              <div className="flex flex-col gap-6">
                <input
                  type="text"
                  placeholder="Enter Notes Heading"
                  className="w-full border-2 border-white rounded-lg bg-transparent placeholder-gray-300 px-5 py-3 text-white focus:outline-none"
                />

                <textarea
                  placeholder="Write Details"
                  className="w-full h-40 resize-none border-2 border-white rounded-lg bg-transparent placeholder-gray-300 px-5 py-4 text-white focus:outline-none"
                />

                <button
                  type="submit"
                  className="w-full bg-white text-black rounded-md py-4 text-lg font-medium"
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
      </div>
    </div>
  );
};

export default App;
