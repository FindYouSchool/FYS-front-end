import React, { forwardRef } from "react";
import Popover from "react-bootstrap/Popover";
import { useAuth } from "../../contexts/AuthContext";
import Form from "react-bootstrap/Form";
import ListGroup from "react-bootstrap/ListGroup";
import { useNavigate } from "react-router-dom";
import { useLogout } from "../../queries/auth/auth.query";

const AvatarPopover = forwardRef((props, ref) => {
  const { userInfo, isAuthenticated, disconnect } = useAuth();
  const { refetch: logout } = useLogout();
  const navigate = useNavigate();
  return (
    <Popover {...props} ref={ref} id="popover-basic">
      <Popover.Header as="h3" className="text-center">
        {userInfo.username ? userInfo.username.toUpperCase() : "username"}
      </Popover.Header>
      <Popover.Body>
        <ListGroup variant="flush">
          <ListGroup.Item action onClick={() => navigate("/profile")}>
            Mon profil
          </ListGroup.Item>
          <ListGroup.Item action onClick={() => navigate("/settings")}>
            Paramètres
          </ListGroup.Item>
          <ListGroup.Item>
            <Form>
              <Form.Check
                checked={isAuthenticated}
                onChange={() => {
                  logout().then(() => disconnect());
                }}
                type="switch"
                id="custom-switch"
                label="Se deconnecter"
              />
            </Form>
          </ListGroup.Item>
        </ListGroup>
      </Popover.Body>
    </Popover>
  );
});

export default AvatarPopover;
