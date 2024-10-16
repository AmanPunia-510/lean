const Heading = ({className, textName, blackText, blackTextClass, orangeTextClass, orangeText, blackTextOne}) => {
    return (
        <h2 className={`font-light text-5xl leading-120 text-wrap ${className}`}>{textName}
            <span className={`font-Bahnschrift ${blackTextClass}`}>{blackText}</span>
            <span className={`font-Bahnschrift text-[#CD520F] font-bold ${orangeTextClass}`}>{orangeText}</span>
            <span className={`font-Bahnschrift ${blackTextClass}`}>{blackTextOne}</span>
        </h2>
    );
};
export default Heading;