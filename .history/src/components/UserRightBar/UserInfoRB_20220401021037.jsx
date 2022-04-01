import React from "react";

export default function UserInfoRB() {
  return (
    <div className="flex flex-col justify-start items-start text-gray-500 ">
      <p className="font-bold uppercase text-sm opacity-70 mb-2">Status :</p>
      <p> If several languages coalesce, the grammar of the resulting</p>
      <p className="font-bold uppercase text-sm opacity-70 my-4">Info :</p>
      <p className="text-gray-400 text-sm">Name</p>
      <p className="text-gray-600 font-semibold mb-5 ">Hendrix Martin</p>
      <p className="text-gray-400 text-sm">Email</p>
      <p className="text-gray-600 font-semibold mb-5 ">adc@123.com</p>

      <p className="text-gray-400 text-sm">Location</p>
      <p className="text-gray-600 font-semibold mb-5 ">California, USA</p>
    </div>
  );
}
