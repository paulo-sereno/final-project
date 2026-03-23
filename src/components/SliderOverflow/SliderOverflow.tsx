import type { ReactNode } from "react";

interface ISliderOverflow {
  children: ReactNode;
}

function SliderOverflow({ children }: ISliderOverflow) {
  return (
    <>
      <section className="sliderOverflow">{children}</section>
    </>
  );
}

export default SliderOverflow;
