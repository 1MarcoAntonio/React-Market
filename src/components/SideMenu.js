import "./SideMenu.css";
const SideMenu = (props) => {
  return <div className="side-menu">
    <img className="thumb" src={props.thumb.src} alt={props.thumb.alt}></img>
  </div>;
};

export default SideMenu;
