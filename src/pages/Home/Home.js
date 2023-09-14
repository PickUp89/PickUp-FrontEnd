import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Home = () => {
  const { userId } = useParams();
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const apiHost = process.env.REACT_APP_BACKEND_URL;
        const url = `${apiHost}/users/get?id=${userId}`;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Error fetching user data: ${response.statusText}`);
        }
        const data = await response.json();
        setUserData(data);
        // setStatus(pageStatus.SUCCESS);
      } catch (e) {
        console.error(e);
        // setStatus(pageStatus.ERROR);
      }
    };

    fetchUserData();
    console.log(userData);
  });
  return <div>Home</div>;
};

export default Home;
