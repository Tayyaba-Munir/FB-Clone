import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-100 h-screen flex items-center justify-center">
      <div className="text-2xl w-1/2 px-4">
        <Image src={'/pics/fb.svg'} alt="fb logo" width={300} height={100}/>
        <p className="ml-7 -mt-3">Fcaebook helps you connect and share with people in your life</p>
      </div>
      <div className="flex flex-col bg-white w-1/3 p-5 rounded-xl">
        <input className="border border-1 border-gray-200 rounded-md focus:outline-1 outline-blue-600 my-2 p-3" type="text" placeholder="Email address or phone number"/>
        <input className="border border-1 border-gray-200 rounded-md focus:outline-1 outline-blue-600 my-2 p-3" type="password" placeholder="Password"/>
        <button className="bg-blue-600 rounded-md my-2 p-3 hover:bg-blue-500 text-white text-lg font-bold">Log In</button>
        <p className="text-center text-md text-blue-500 cursor-pointer">Forgotten password?</p>
        <span className="my-2"><hr/></span>
        <button className="bg-green-600 rounded-md my-2 p-2 hover:bg-green-500 text-white text-lg font-bold w-fit mx-auto">Create new account</button>
      </div>
    </div>
  );
}
