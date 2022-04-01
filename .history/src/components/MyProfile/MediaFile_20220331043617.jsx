import React from "react";

export default function MediaFile() {
  return (
    <div className="p-5">
      <div className="flex  justify-between">
        <p className="text-sm text-gray-400 font-semibold ">MEDIA</p>
        <p className="text-green-500 text-sm cursor-pointer">Show all</p>
      </div>
      <div className="grid grid-rows-3 grid-flow-col gap-3">
        <img
          className="w-20 h-20 rounded-xl"
          src="https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?t=st=1648679396~exp=1648679996~hmac=abb785dde5ef006cae92425fe8b83ca3b0a65ee44dc525b969d719b89d77ab7b&w=996"
          alt=""
        />
        <img
          className="w-20 h-20 rounded-xl"
          src="https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?t=st=1648679396~exp=1648679996~hmac=abb785dde5ef006cae92425fe8b83ca3b0a65ee44dc525b969d719b89d77ab7b&w=996"
          alt=""
        />
        <img
          className="w-20 h-20 rounded-xl"
          src="https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?t=st=1648679396~exp=1648679996~hmac=abb785dde5ef006cae92425fe8b83ca3b0a65ee44dc525b969d719b89d77ab7b&w=996"
          alt=""
        />
      </div>
    </div>
  );
}
