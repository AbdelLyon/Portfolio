import { IconName } from "@fortawesome/fontawesome-svg-core";
import { Dispatch, MouseEvent, PropsWithChildren, SetStateAction } from "react";
// import { To } from "react-router-dom";

export interface State {
  title: string;
  category: string
  color: string,
  icon: IconName,
  content: string;
  isVisible?: boolean,
}

export type Props = PropsWithChildren<{
  id: string;
  to: any;
  className: string;
  visible: boolean;
  color: string;
  icon: IconName;
  state: State;
  type: string;
  datas: State[];
  changeAnimation: boolean;
  onChangeCategory?: (e: MouseEvent<HTMLAnchorElement>) => void;
  onHandleClick?: (data: State) => () => void;
  onOpen?: () => void
}>

export interface Datas {
  front: State[]
  back: State[]
}

export type UpdateType<T> = Dispatch<SetStateAction<T>>;


