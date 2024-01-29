import './Section.scss';
import { RegularButton } from '../Buttons/RegularButton';
import { ReactElement } from 'react';

interface Props {
  image: string;
  title: string;
  imageFirst?: boolean;
  buttonLabel?: string;
  children: ReactElement<HTMLParagraphElement>[];
}

export const Section = ({ image, title, imageFirst, buttonLabel, children }: Props) => {
  return (
    <div className="section-container layout">
        <div className={`section-content ${imageFirst ? 'image-first': ''}`}>
          <div className="text-content">
            <h1>{title}</h1>
            {children}
            {buttonLabel && <RegularButton label={buttonLabel} />}
          </div>
          <div className="image-content">
            <img src={image} alt="section" width={585} />
          </div>
        </div>
    </div>
  );
};
