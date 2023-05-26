const Navbar = () => {
  return (
    <div className="navbar bg-transparent">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">LOGO</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><a>Item 1</a></li>
      <li><a>Item 2</a></li>
      <li><a>Item 3</a></li>
      <button className="btn bg-white text-green-700 border-none ml-4">Sign In</button>
    </ul>
  </div>
</div>
  );
};

export default Navbar;
