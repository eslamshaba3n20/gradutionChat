

type MessageProps = {
    text: string;
    isSender: boolean;
};

const Message = ({ text, isSender }: MessageProps) => {
    return (
        <div className={`d-flex ${isSender ? "justify-content-end" : "justify-content-start"} mb-2`}>
            <div className={`p-2 rounded ${isSender ? "mainBgColor" : "bg-white text-dark"}`}
                style={{ maxWidth: "60%", borderRadius: "10px", borderTopRightRadius: isSender ? "0" : "10px", borderTopLeftRadius: isSender ? "10px" : "0" }}>
                <p className="small m-0">{text}</p>
            </div>
        </div>
    );
};

export default Message;
