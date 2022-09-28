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

  return (
    <>
      <div className="test-content flex flex-row-between" id="test">
        <div ref={ref1} className={`skill  ${ref1Element ? "translateUp1-animation" : ""} `}>
          <img src="https://cdn.pixabay.com/photo/2015/07/27/19/11/beach-863139_960_720.jpg" alt="" />
        </div>
        <div ref={ref2} className={`skill ${ref2Element ? "translateUp2-animation" : ""} `}>
          <h3> {state?.title} </h3>
          <p>Lorem ipsum dolor sit consectetur adipisicing? Sobis deleniti possimusplaceat eum alias est saepe facere natus nesciunt aperiam repellat earum odiotempora quod, omnis fugit! Architecto quis asperiores consequatur id. Placeatfugiat quasi maxime sunt facilis. Ipsa dolores, quos porro, unde odio doloribusaut quaerat saepe facere iure harum pariatur deserunt nobis beatae vitae ullam magni,animi obcaecati tempora illo! Magni molestiae commodi nihil sint molestias saepeincidunt? Quis repellat odit in perspiciatis dignissimos fuga eligendi.</p>

        </div>
      </div>
      <div className="test-content flex flex-row-between">
        <div ref={ref3} className={`skill ${ref3Element ? "translateUp1-animation" : ""} `}>
          <h3> {state?.title} </h3>
          <p>Lorem ipsum dolor sit consectetur adipisicing? Sobis deleniti possimusplaceat eum alias est saepe facere natus nesciunt aperiam repellat earum odiotempora quod, omnis fugit! Architecto quis asperiores consequatur id. Placeatfugiat quasi maxime sunt facilis. Ipsa dolores, quos porro, unde odio doloribusaut quaerat saepe facere iure harum pariatur deserunt nobis beatae vitae ullam magni,animi obcaecati tempora illo! Magni molestiae commodi nihil sint molestias saepeincidunt? Quis repellat odit in perspiciatis dignissimos fuga eligendi.</p>
        </div>
        <div ref={ref4} className={`skill  ${ref4Element ? "translateUp2-animation" : ""} `}>
          <img src="https://cdn.pixabay.com/photo/2018/01/26/08/15/dining-room-3108037_960_720.jpg" alt="" />
        </div>
      </div>
    </ >

  )
}
export default ProjectList;