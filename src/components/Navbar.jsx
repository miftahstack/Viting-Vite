import Button from "./NavbarButton.jsx";


const Navbar = () => {
  return (
    <div className="max-w-[1170px] m-auto">
      <div className="flex justify-between items-center text-[18px] py-5">
        <div className="">
            <h5 className="font-bold cursor-pointer">Logo.svg</h5>
        </div>
        <div className="">
          <ul className="flex gap-10">
            <li>
              <a className="" href="">
                Components
              </a>
            </li>
            <li>
              <a className="" href="">
                Contact
              </a>
            </li>
            <li>
              <a className="" href="">
                Portfolio
              </a>
            </li>
            <li>
              <a className="" href="">
                About Us
              </a>
            </li>
          </ul>
        </div>
        <div className="">
          <Button/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
