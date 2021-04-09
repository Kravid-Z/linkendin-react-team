import React from "react";
import { Button, Modal, Form } from "react-bootstrap";

class ModalEditProfile extends React.Component {
  state = {
    modalShow: false,
    selectedFile: null,
  };

  setModalShowTrue = () => {
    this.setState({
      modalShow: true,
    });
  };

  setModalShowFalse = () => {
    this.setState({
      modalShow: false,
    });
  };

  fileSelectedHandler = (e) => {
    this.setState({
      selectedFile: e.target.files[0],
    });
  };

  postImage = async () => {
    const fd = new FormData();
    fd.append("profile", this.state.selectedFile);
    const andisToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDZjMGM5YzZmZDIyODAwMTUzZmRiYWMiLCJpYXQiOjE2MTc2OTM4NTIsImV4cCI6MTYxODkwMzQ1Mn0.b_4i8l9HxOmAylxIxWyK1cX9Brjnydu_my16UsNd4PE";

    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${this.props.userId}/picture`,
        {
          method: "POST",
          body: fd,
          headers: {
            authorization: "Bearer " + andisToken,
          },
        }
      );
      if (response.ok) {
        console.log("files uploaded");
      } else {
        console.log("there is something wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };

  fileUploadHandler = async (e) => {
    e.preventDefault();

    //console.log(this.state.selectedFile);
    await this.postImage();
  };

  //const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  render() {
    return (
      <>
        <Button className="mx-2 rounded-pill" variant="outline-secondary" onClick={this.setModalShowTrue}>
          Launch demo modal
        </Button>

        <Modal show={this.state.modalShow} onHide={this.setModalShowFalse}>
          <Form onSubmit={this.fileUploadHandler}>
            {" "}
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form.Group>
                <Form.File
                  accept="image/*"
                  onChange={this.fileSelectedHandler}
                  label="Choose an image file"
                />
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.setModalShowFalse}>
                Close
              </Button>
              <Button variant="primary" type="submit">
                Save Changes
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>
      </>
    );
  }
}

export default ModalEditProfile;
