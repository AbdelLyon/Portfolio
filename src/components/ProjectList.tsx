import { FC, useContext } from "react";
import { StateContext } from "../context/State.context";
import { Props } from "../interfaces/interfaces";
import { useInView } from 'react-intersection-observer';

const ProjectList: FC<Partial<Props>> = (): JSX.Element => {
  const { state } = useContext(StateContext);

  const { ref: ref1, inView: ref1Element } = useInView({ triggerOnce: true });
  const { ref: ref2, inView: ref2Element } = useInView({ triggerOnce: true });
  const { ref: ref3, inView: ref3Element } = useInView({ triggerOnce: true });
  const { ref: ref4, inView: ref4Element } = useInView({ triggerOnce: true });
  const { ref: ref5, inView: ref5Element } = useInView({ triggerOnce: true });
  const { ref: ref6, inView: ref6Element } = useInView({ triggerOnce: true });


  return (
    <>
      <div className="project-content flex flex-row-between" id="test">
        <div ref={ref1} className={`project  ${ref1Element ? "translateUp1-animation" : ""} `}>
          <img src="https://cdn.pixabay.com/photo/2015/07/27/19/11/beach-863139_960_720.jpg" alt="" />
        </div>
        <div ref={ref2} className={`project ${ref2Element ? "translateUp2-animation" : ""} `}>
          <h3> {state?.title} </h3>
          <p>Lorem aceatfugiat quasi maxime sunt facilis, pariatur deserunt nobis beatae vitae ullam magni,animi obcaecati tempora illo! Magni molestiae commodi nihil sint molestias saepeincidunt? Quis repellat odit in perspiciatis dignissimos fuga eligendi.</p>

        </div>
      </div>
      <div className="project-content flex flex-row-between">
        <div ref={ref3} className={`project ${ref3Element ? "translateUp1-animation" : ""} `}>
          <h3> {state?.title} </h3>
          <p>Lorem aceatfugiat quasi maxime sunt facilis, pariatur deserunt nobis beatae vitae ullam magni,animi obcaecati tempora illo! Magni molestiae commodi nihil sint molestias saepeincidunt? Quis repellat odit in perspiciatis dignissimos fuga eligendi.</p>
        </div>
        <div ref={ref4} className={`project  ${ref4Element ? "translateUp2-animation" : ""} `}>
          <img src="https://cdn.pixabay.com/photo/2018/01/26/08/15/dining-room-3108037_960_720.jpg" alt="" />
        </div>
      </div>
      <div className="project-content flex flex-row-between" id="test">
        <div ref={ref5} className={`project  ${ref5Element ? "translateUp1-animation" : ""} `}>
          <img src="https://cdn.pixabay.com/photo/2015/07/27/19/11/beach-863139_960_720.jpg" alt="" />
        </div>
        <div ref={ref6} className={`project ${ref6Element ? "translateUp2-animation" : ""} `}>
          <h3> {state?.title} </h3>
          <p>Lorem aceatfugiat quasi maxime sunt facilis, pariatur deserunt nobis beatae vitae ullam magni,animi obcaecati tempora illo! Magni molestiae commodi nihil sint molestias saepeincidunt? Quis repellat odit in perspiciatis dignissimos fuga eligendi.</p>

        </div>
      </div>
    </>

  )
}
export default ProjectList;