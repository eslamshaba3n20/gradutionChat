import Offcanvas from "react-bootstrap/Offcanvas";
import { BsTelephone, BsCameraVideo } from "react-icons/bs";

// import "../styles/global.css";
import "./chatStyle.css";

type CounterProps = {
    showRightBar: boolean;
    handleClose: () => void;
};
const ChatRihtbar = ({ showRightBar, handleClose }: CounterProps) => {
    return (
        <Offcanvas
            placement="end"
            backdrop={false}
            show={showRightBar}
            onHide={handleClose}
            style={{ width: "300px" }}
        >
            <Offcanvas.Header closeButton className=" justify-content-between bg-light">
                contact info
            </Offcanvas.Header >
            <Offcanvas.Body
                className="p-0 flex-column  ">
                <div className="p-3 bg-white rounded shadow-sm" style={{ height: "100%", maxWidth: "350px" }}>

                    {/*prifile photo and info number */}
                    <div className=" d-flex  align-items-center gap-3 mb-4 mt-2">
                        <img
                            src="imgs\profile.jpg"
                            alt="Profile"
                            className="rounded-circle "
                            style={{ width: "60px", height: "60px" }}

                        />
                        <div>
                            <h5 className="">Jeanette Nicolas</h5>
                            <p className="text-muted m-0">+91 62543 28 739</p>
                        </div>
                    </div>

                    <div className="d-flex justify-content-center align-items-center gap-3 my-2">
                        <button className="btn  d-flex gap-2 flex-column align-items-center">
                            <BsTelephone className="muted fs-5" /> Voice
                        </button>
                        <button className="btn d-flex gap-2 flex-column align-items-center">
                            <BsCameraVideo className="muted fs-5" /> Video
                        </button>
                    </div>

                    <div className="mt-3">
                        <h6 className="text-muted">About</h6>
                        <p className="mb-2">Imagination is the only limit</p>
                    </div>


                </div>
            </Offcanvas.Body>
        </Offcanvas>
    );
}

export default ChatRihtbar;
