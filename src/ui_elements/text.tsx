interface Props {
    text: string;
    style: string;
}

function Text({text, style}: Props) {
    return (
        <p className={style}>{text}</p>
    );
}

export default Text;