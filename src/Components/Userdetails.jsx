import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

export const Userdetails = () => {
  const { userid } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch(`https://regres.in/api/users/${userid}`)
      .then((d) => d.json())
      .then((d) => {
        setUser(d.data);
      });
  }, [userid]);

  return (
    <div>
      <img src={user.avatar} alt="test" />
      {user.first_name}
      {user.last_name}
      Contact:{user.email}
    </div>
  );
};
