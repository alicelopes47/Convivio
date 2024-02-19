//@ts-nocheck
import { useEffect, useRef } from "react";
import "./Banner.scss";


interface Props {
  id: string;
}

export const Banner = ({ id }: Props) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible' && elementRef.current) {
        // Salve o nome da animação atual
        const animationName = window.getComputedStyle(elementRef.current).animationName;

        // Temporariamente remova a animação
        elementRef.current.style.animationName = 'none';

        // Force um reflow, fazendo o navegador perceber que a animação foi removida
        void elementRef.current.offsetWidth;

        // Reaplique a animação
        elementRef.current.style.animationName = animationName;
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);
  return (
    <>
      <div className="banner-container" ref={elementRef} id={id}>
        <div className="banner-content">
          <div className="banner-title-container">
            <h1>
              Seja bem vindo,{" "}
              <span className="diferent-color-title">Convivente</span>!
            </h1>
          </div>
          <div className="subtitle-container">
            <p>Relaxa! Você está em casa agora.</p>
          </div>
        </div>
      </div>
    </>
  );
};
