import React, { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import "./Avatar.css";

const Avatar = ({ size, className, containerStyle, onClick }) => {
  console.log(size, className);
  const [sizes, setSizes] = useState(30);
  const [style, setStyle] = useState("");
  const { currentUser } = useAuth();
  let url = currentUser.avatar;
  if (!url) {
    url = `https://ui-avatars.com/api/?background=F5F5F5&name=${currentUser.username}`;
  }
  useEffect(() => {
    setSizes(size);
    setStyle(className);
  }, [size, className]);
  return (
    <div className={containerStyle} onClick={onClick}>
      <img
        src={url}
        height={sizes}
        width={sizes}
        className={"avatar img-fluid " + style}
        alt="avatar"
      />
    </div>
  );
};

export default Avatar;
