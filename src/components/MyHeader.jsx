import logo from "../assets/netflix_logo_2.png";

function MyHeader() {
  return (
    <div id="profilehead" className="bg-dark py-3">
      <img src={logo} alt="" width="110px" className="ms-5 pt-3" />
    </div>
  );
}

export default MyHeader;
