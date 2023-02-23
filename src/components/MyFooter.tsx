import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function MyFooter() {
  return (
    <>
      <Navbar
        className="position-relative  w-100 myfooter"
        bg="dark"
        variant="dark"
      >
        <Container className="d-flex justify-content-center align-items-center">
          <div>
            <p className="text-white">Copyrigth 2023</p>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default MyFooter;
