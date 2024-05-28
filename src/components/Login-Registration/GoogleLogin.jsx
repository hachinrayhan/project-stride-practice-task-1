import useAuth from "../../hooks/useAuth";

const GoogleLogin = () => {
  const { googleLogin } = useAuth();
  const handleGoogleLogin = () => {
    googleLogin();
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
