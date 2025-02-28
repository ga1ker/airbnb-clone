interface CustomButtonProps {
    label: string;
    onClick: () => void;
    className?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
    label,
    className,
    onClick
}) => {
    return (
        <div onClick={onClick} className={`text-white bg-airbnb hover:bg-airbnb-dark w-full py-4 rounded-xl transition cursor-pointer text-center ${className}`}>
            {label}
        </div>
    )
}

export default CustomButton;