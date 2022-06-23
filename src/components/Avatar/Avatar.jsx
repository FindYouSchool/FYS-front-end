import React, { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import "./Avatar.css";

const Avatar = ({ size, className, containerStyle, onClick }) => {
  const [sizes, setSizes] = useState(30);
  const [style, setStyle] = useState("");
  const { userInfo } = useAuth();
  let url = userInfo.avatar;
  if (!url) {
    url = `https://ui-avatars.com/api/?background=F5F5F5&name=${userInfo.username}`;
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
