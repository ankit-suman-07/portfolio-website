import React from "react";
import { useNavigate } from "react-router-dom";

function ProjectItem({ image, name, id, url }) {
  const navigate = useNavigate();
  
  const handleItemClick = () => {
    navigate("/projectdemo/", { state: { url } });
  };
  
  return (
    <div
      className="projectItem"
      onClick={handleItemClick}
    >
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      <h1>{name}</h1>  
    </div>
  );
}

export default ProjectItem;
