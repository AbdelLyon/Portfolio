import { FC, useContext } from "react";
import { useLocation } from "react-router-dom";
import { StateContext } from "../context/State.context";
import { Props } from "../interfaces/interfaces";

const AnimationPanel: FC<Partial<Props>> = ({ changeAnimation }): JSX.Element => {
  const { state } = useContext(StateContext);
  const location = useLocation();

  return (
    <>
      <div
        className={`panel ${state?.isVisible && "opacity-animation-reverse"}`}
        style={{ backgroundColor: location.pathname === '/' ? state?.color : "#83bdd1" }}>
      </div>
      <div
        className={`panel ${state?.isVisible ? !changeAnimation && location.pathname === '/' ? "translate-left-animation" : "height-animation" : ""}`}
        style={{ backgroundColor: location.pathname === '/' ? state?.color : "#83bdd1" }}>
      </div>
    </>
  )
}

export default AnimationPanel;