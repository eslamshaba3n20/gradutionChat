import { Form, InputGroup, Stack } from "react-bootstrap";
import { BsPaperclip, BsFillEmojiSmileFill, BsSend } from "react-icons/bs";
import Message from "./Messages";
import "./chatStyle.css";


type CounterProps = {
    handleShowLefttBar: () => void;
    handleShowRightBar: () => void;

};

const messages = [
    { text: "Hi bro,how are u?", isSender: true, },
    { text: "Ya sure, sending you a pic", isSender: false, },
    { text: "Can you send me an abstract image?", isSender: true, },
    { text: "Here you go", isSender: false }
];

const ChatMain = ({ handleShowLefttBar, handleShowRightBar }: CounterProps) => {
    return (

        <Stack className="d-flex flex-column vh-100">

            <nav className=" d-flex align-items-center justify-content-between shadow-lg p-2">

                <div className="d-flex align-items-center gap-3">

                    <button className="mainBgColor  btn  btn-sm border-0   d-lg-none"

                        onClick={handleShowLefttBar}>
                        <i className="bi bi-list fs-6"></i>
                    </button>

                    <a className="d-flex align-items-center gap-3" href="#">
                        <img
                            src="imgs/profile.jpg"
                            // alt="User Avatar"
                            className="rounded-circle img-fluid "
                            style={{ width: "40px", height: "40px" }}

                        />
                    </a>

                    <div className="d-flex flex-column justify-content-start ">
                        <p className="m-0 small">Eslam Shaban</p>
                        <span className="small text-muted">Type</span>
                    </div>
                </div>

                <div className="d-flex align-items-center">
                    <button className="btn  me-1">
                        <i className="bi bi-camera-video"></i>
                    </button>
                    <button className="btn b me-1">
                        <i className="bi bi-search"></i>
                    </button>
                    <button className="btn  me-1">
                        <i className="bi bi-telephone"></i>
                    </button>
                    <div className="vr"></div>
                    <button
                        onClick={handleShowRightBar}
                        className="btn  me-1">
                        <i className="bi bi-chevron-down fs-6"></i>
                    </button>

                </div>


            </nav>

            <main
                className="chatBackGround flex-grow-1 p-4  d-flex flex-column justify-content-between"
            // style={{ backgroundColor: "#EFF2F9" }}

            >

                <div className=" d-flex flex-column " style={{ overflowY: "auto" }}>
                    {messages.map((msg, index) => (
                        <Message key={index} text={msg.text} isSender={msg.isSender} />
                    ))}
                </div>



            </main>

            <footer
                className="py-2 px-3 border-top d-flex align-items-center gap-2">

                <div
                    style={{ backgroundColor: "#EFF2F9" }}
                    className="d-flex align-items-center flex-grow-1 rounded ps-2">
                    <BsPaperclip size={20} className="text-secondary me-1" role="button" />

                    <InputGroup className="flex-grow-1 ">
                        <Form.Control
                            type="text"
                            placeholder="Write a message..."
                            className="border-0 shadow-none bg-transparent"
                        />
                    </InputGroup>

                    <BsFillEmojiSmileFill size={17} className="text-secondary mx-3" role="button" />

                </div>
                <button className="btn btn-sm  d-flex align-items-center justify-content-center mainBgColor shadow-none" style={{ width: "35px", height: "35px" }}>
                    <BsSend size={15} />
                </button>

            </footer>

        </Stack>



    );
}

export default ChatMain;
