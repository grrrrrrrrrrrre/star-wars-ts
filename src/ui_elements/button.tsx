interface Props {
    text: string,
    func?: () => void;
    style: string;
}

function Button({text, func, style}: Props) {
    return (
        <div onClick={func} className={style+' cursor-pointer'}>{text}</div>
    );
}

export default Button;