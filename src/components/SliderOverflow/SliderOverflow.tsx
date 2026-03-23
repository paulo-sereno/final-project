import type { ReactNode } from "react";

interface ISliderOverflow {
  children: ReactNode;
}

function SliderOverflow({ children }: ISliderOverflow) {
  return <>{children}</>;
}

export default SliderOverflow;
