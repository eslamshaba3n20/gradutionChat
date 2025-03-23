import { Col, Row } from "react-bootstrap";
import ChatLeftbar from "./ChatLeftbar";
import { useState } from "react";
import ChatMain from "./ChatMain";
import ChatRihtbar from "./ChatRihtbar";
import "./chatStyle.css";

const Chats = () => {
    const [showLeftBar, setShowLeftbar] = useState(false);
    // handleShow to LeftBar  if right close
    const handleShowLefttBar = () => {
        if (showRightBar === false) {
            setShowLeftbar(!showLeftBar);
        }
    };
    // handleShow to rihgtbar if leftbar close
    const [showRightBar, setShowRighttbar] = useState(false);
    const handleShowRightBar = () => {
        if (showLeftBar === false) {
            setShowRighttbar(!showRightBar);
        }
    };

    const handleClose = () => setShowLeftbar(false);
    const handleClose2 = () => setShowRighttbar(false);

    return (
        <>
            <Row style={{ height: "100vh" }} className="m-0 p-0">

                <Col
                    className="chatBackGround  d-none d-lg-block  p-0  border-end "
                    md={3}
                >
                    <ChatLeftbar showLeftBar={showLeftBar} handleClose={handleClose} />
                </Col>


                <Col className="flex-grow-1 p-0" md={9}>
                    <ChatMain
                        handleShowLefttBar={handleShowLefttBar}
                        handleShowRightBar={handleShowRightBar}
                    />
                </Col>
            </Row>

            <ChatRihtbar showRightBar={showRightBar} handleClose={handleClose2} />


        </>
    );
};

export default Chats;
