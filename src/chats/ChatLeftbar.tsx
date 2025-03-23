import Offcanvas from "react-bootstrap/Offcanvas";
import { BsSearch } from "react-icons/bs";

import "./chatStyle.css";

type CounterProps = {
    showLeftBar: boolean;
    handleClose: () => void;


};
const messeges = [
    { name: "Kailey", message: "Say My Name", time: "9:36", unread: 0, img: "imgs/profile.jpg" },
    { name: "Maryjane", message: "Check On It", time: "12:02", unread: 2, img: "imgs/profile.jpg" },
    { name: "Niko", message: "You Send Me", time: "10:35", unread: 3, img: "imgs/profile.jpg" },
    { name: "Agustin", message: "The Tide is High", time: "04:00", unread: 0, img: "imgs/profile.jpg" },
    { name: "Manuel", message: "I Will Always Love You", time: "08:42", unread: 0, img: "imgs/profile.jpg" },
];


function ChatLeftbar({ showLeftBar, handleClose }: CounterProps) {
    return (
        <>
            <Offcanvas
                backdrop={false}
                show={showLeftBar}
                onHide={handleClose}
                responsive="lg"
                style={{
                    position: "fixed",
                    height: "100vh",
                    left: "0",
                    top: "0",
                    width: "inherit",
                    minWidth: "270x"
                }}
            >
                <Offcanvas.Header
                    className="mainColor chatBackGround justify-content-between align-items-center"
                    closeButton
                >
                    <h4 className="fw-bold"> Chats</h4>
                </Offcanvas.Header>

                <Offcanvas.Body className="chatBackGround flex-column p-lg-3 h-100 w-100">
                    <div className="d-none d-lg-flex align-items-center justify-content-between mb-3">
                        <h4 className="mainColor fw-bold flex-grow-1"> Chats</h4>
                        <i className="bi bi-chevron-down fs-6"></i>
                    </div>

                    <div className="input-group bg-white p-1 rounded mb-3">
                        <span className="py-1 input-group-text bg-transparent border-0">
                            <BsSearch className="text-muted" />
                        </span>
                        <input
                            type="text"
                            className="py-1 form-control border-0 shadow-none"
                            placeholder="Search..."
                        />
                    </div>



                    <div className="fw-bold text-muted mb-2">All Chats</div>
                    {messeges.map((messege, index) => (
                        <div key={index} className="d-flex align-items-center p-2 rounded mb-2 bg-white shadow-sm">
                            <img src={messege.img} alt={messege.name} className="rounded-circle me-2" width="35" height="35" />
                            <div className="flex-grow-1">
                                <div className="d-flex justify-content-between">
                                    <div className="d-flex justify-content-between flex-column">
                                        <span className="fw-bold">{messege.name}</span>
                                        <small className="text-muted">{messege.message}</small>
                                    </div>
                                    <div className="d-flex justify-content-between flex-column">
                                        <small className="text-muted">{messege.time}</small>
                                        {messege.unread > 0 && (
                                            <small className="badge mainBgColor rounded-pill   mx-2">{messege.unread}</small>
                                        )}
                                    </div>
                                </div>
                            </div>

                        </div>
                    ))}


                </Offcanvas.Body>
            </Offcanvas >
        </>
    );
}

export default ChatLeftbar;
