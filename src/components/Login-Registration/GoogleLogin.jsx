import useAuth from "../../hooks/useAuth";

const GoogleLogin = () => {
  const { googleLogin } = useAuth();
  const handleGoogleLogin = () => {
    googleLogin().then((result) => {
      const email = result.user.email;
      const name = result.user.displayName;
      const userInfo = { email, name };
      fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(userInfo),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          localStorage.setItem("token", data.token);
        });
    });
  };
  return (
    <div className="form-control">
      <button onClick={handleGoogleLogin} className="btn btn-info">
        Login With Google
      </button>
    </div>
  );
};

export default GoogleLogin;
