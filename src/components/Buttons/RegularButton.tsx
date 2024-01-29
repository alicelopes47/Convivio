import './RegularButton.scss';

interface Props {
    label: string;
    onClick?: () => void;
}

export const RegularButton = ({ label, onClick }: Props) => {
    return (
        <button className="regular-button-container" onClick={onClick}>
            {label}
        </button>
    );
}