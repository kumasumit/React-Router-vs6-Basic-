import React from "react";
import { useNavigate, useParams } from "react-router";

const Profile = () => {
  let navigate = useNavigate();
  let { username } = useParams();
  return (
    <div>
      <h1>This is profile page for {username}!</h1>
      <button
        onClick={() => {
          navigate("/about");
        }}
      >
        Change to about page.
      </button>
    </div>
  );
};

export default Profile;
