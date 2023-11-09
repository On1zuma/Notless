import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";


export function About() {
  return (
    <div className=" text-secondary px-4 py-5 text-center">
      <div className="py-5">
        <h1 className="display-5 fw-bold text-dark">✨About</h1>
        <div className="col-lg-6 mx-auto">
          <p className="fs-5 mb-4">
            NotLess is a minimalist note-taking app that provides users with a
            streamlined and distraction-free writing experience. With its
            user-friendly interface, this app allows you to quickly jot down
            your ideas, create markdown notes, and organize your thoughts
            effortlessly. NotLess prioritizes simplicity and ease-of-use, making
            it the perfect solution for all your basic note-taking needs.
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <Link to="/list">
              <Button
                type="button"
                variant="dark btn-lg px-4 me-sm-3 fw-bold"
              >
                Click to try
              </Button>
            </Link>

            <Link to="/">
              <Button
                type="button"
                variant="outline-secondary btn-lg px-4 me-sm-3 fw-bold"
              >
                Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
