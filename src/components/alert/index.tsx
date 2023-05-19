import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { handleAlert } from "@/redux/feature/alertSlice";
export default function Alert() {
  const state = useSelector((state: any) => state.alert);
  const dispatch = useDispatch();
  const { show, type, message } = state;
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        dispatch(handleAlert({ ...state, show: false }));
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [show]);

  return (
    <>
      {show ? (
        <div
          className={`alert alert-${type} alert-dismissible fade show`}
          role="alert"
          style={{ zIndex: 101, top: "2px" }}
        >
          {message}
          <button
            type="button"
            className="close"
            data-dismiss="alert"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
