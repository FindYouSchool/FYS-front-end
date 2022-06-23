import React, { forwardRef } from "react";
import Popover from "react-bootstrap/Popover";
import { useAuth } from "../../contexts/AuthContext";
import ListGroup from "react-bootstrap/ListGroup";
import { useNavigate } from "react-router-dom";
import { useLogout } from "../../queries/auth/auth.query";

const AvatarPopover = forwardRef((props, ref) => {
  const { userInfo, disconnect } = useAuth();
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
          <ListGroup.Item
            action
            onClick={() => {
              logout().then(() => disconnect());
              navigate();
            }}
          >
            <div className="text-primary fw-bold d-flex align-items-center w-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-box-arrow-left"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"
                />
                <path
                  fill-rule="evenodd"
                  d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"
                />
              </svg>
              <span className="mx-1">Se deconnecter</span>
            </div>
          </ListGroup.Item>
        </ListGroup>
      </Popover.Body>
    </Popover>
  );
});

export default AvatarPopover;
