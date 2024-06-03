import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { user } = useAuth();
  const [userInfo, setUserInfo] = useState();

  console.log(userInfo);

  useEffect(() => {
    fetch(`http://localhost:5000/users/email/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setUserInfo(data));
  }, [user?.email]);

  return (
    <div className="p-10">
      <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-bold">Profile:</h1>
        <Link
          to={`/dashboard/profile/edit/${userInfo?._id}`}
          className="btn btn-sm btn-info"
        >
          Update Profile
        </Link>
      </div>
      {userInfo?.name && <h1 className="text-xl">Name: {userInfo.name}</h1>}
      {userInfo?.email && <h1 className="text-xl">Email: {userInfo.email}</h1>}
      {userInfo?.dob && (
        <h1 className="text-xl">Date of Birth: {userInfo.dob}</h1>
      )}
      {userInfo?.address && (
        <h1 className="text-xl">Address: {userInfo.address}</h1>
      )}
      {userInfo?.mobile && (
        <h1 className="text-xl">Mobile Number: {userInfo.mobile}</h1>
      )}
    </div>
  );
};

export default Dashboard;
