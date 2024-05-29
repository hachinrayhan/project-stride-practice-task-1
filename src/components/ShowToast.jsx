/* eslint-disable react/prop-types */
import { useEffect } from "react";

const ShowToast = ({ showToast, setShowToast, msg }) => {
  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false); // Hide toast after 3 seconds
      }, 3000);

      return () => clearTimeout(timer); // Clean up the timer on component unmount
    }
  }, [showToast, setShowToast]);

  return (
    showToast && (
      <div className="toast toast-top toast-center">
        <div className="alert alert-success">
          <span>{msg}</span>
        </div>
      </div>
    )
  );
};

export default ShowToast;
