import "./SideMenu.css";
const SideMenu = (props) => {
  return (
    <div className="side-menu">
      {props.bought && (
        <img
          className="thumb"
          src={props.bought.thumbnail}
          alt={props.thumb.alt}
        ></img>
      )}
    </div>
  );
};

export default SideMenu;
