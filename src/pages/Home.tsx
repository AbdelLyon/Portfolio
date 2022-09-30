import { MouseEvent, useCallback, useContext, useEffect, useState } from "react";
import AnimationCircle from "../components/AnimationCircle";
import AnimationPanel from "../components/AnimationPanel";
import Description from "../components/Description";
import { Icons } from "../components/Icons";
import Navbar from "../components/Navbar";
import { initialState, StateContext } from "../context/State.context";
import { datas } from "../data/datas";
import { State } from "../interfaces/interfaces";

const Home = (): JSX.Element => {

  const { state, setState } = useContext(StateContext);
  const [changeAnimation, setChangeAnimation] = useState(false);

  useEffect(() => {
    state.category === 'front-end'
      ? setState({ ...initialState(datas.front) })
      : setState({ ...initialState(datas.back) })
  }, [setState, state.category])

  useEffect(() => {
    if (!state.isVisible) setState((state: State) => ({ ...state, isVisible: true }));
  }, [state.isVisible, setState])

  const handleClick = useCallback((data: State) => {
    setChangeAnimation(false);
    setState((state: State) => ({ ...state, isVisible: false }));

    const timer = setTimeout(() =>
      setState((state: State) => ({
        ...state,
        title: data.title,
        color: data.color,
        icon: data.icon,
        content: data.content
      })
      ), 700);

    return () => clearTimeout(timer)
  }, [setState])

  const onChangeCategory = useCallback(((e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setChangeAnimation(true);
    const category = e.currentTarget.id;
    setState(((state: State) => ({ ...state, category, isVisible: false })));
  }), [setState])

  return (
    <div className="container-header flex flex-row-center">
      <AnimationPanel changeAnimation={changeAnimation} />
      <header className="container">
        <Navbar onChangeCategory={(e: MouseEvent<HTMLAnchorElement>) => onChangeCategory(e)} />
        <div className="header-skill flex flex-row-between">
          <ul className="list" >
            {state && state.category === 'front-end'
              ? <Icons datas={datas.front} onHandleClick={handleClick} />
              : <Icons datas={datas.back} onHandleClick={handleClick} />}
          </ul>
          <AnimationCircle changeAnimation={changeAnimation} />
          <Description />
        </div>
      </header>
    </div>

  )
}
export default Home;