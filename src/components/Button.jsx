const Button = ({ props }) => {
  return (
    <>
      <div className="max-w-[1170px] m-auto my-20 flex justify-between items-center ">
        <button className="bg-red-500  cursor-pointer text-[20px] text-white px-15 py-2.5 rounded-xl hover:bg-red-700 transition duration-300">
          Red
        </button>
        <button className="bg-green-500  cursor-pointer text-[20px] text-white px-15 py-2.5 rounded-xl hover:bg-green-700 transition duration-300">
          Green
        </button>
        <button className="bg-blue-500  cursor-pointer text-[20px] text-white px-15 py-2.5 rounded-xl hover:bg-blue-700 transition duration-300">
          Blue
        </button>
        <button className="bg-yellow-500  cursor-pointer text-[20px] text-white px-15 py-2.5 rounded-xl hover:bg-yellow-600 transition duration-300">
          Yellow
        </button>
        <button className="bg-cyan-500  cursor-pointer text-[20px] text-white px-15 py-2.5 rounded-xl hover:bg-cyan-700 transition duration-300">
          Cyan
        </button>
      </div>
    </>
  );
};

export default Button;
