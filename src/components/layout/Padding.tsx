import './Padding.scss';


interface Props {
    children: React.ReactNode;
} 


export const Padding = ({children}: Props) => { 
    return (
        <div className="padding-container">
            {children}
        </div>
    )
}