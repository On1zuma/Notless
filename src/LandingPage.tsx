import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export function LandingPage() {
  return (
    <>
    <div className=" text-secondary px-4 py-5 text-center">
      <div className="py-5">
        <h1 className="display-5 fw-bold text-dark">📝NotLess</h1>
        <div className="col-lg-6 mx-auto">
          <p className="fs-5 mb-4">
            Simplify your note-taking and unlock your full potential with
            NotLess, the ultimate app for effortless capturing of ideas, to-do
            lists, and thoughts in a clutter-free environment.
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

            <Link to="/about">
              <Button
                type="button"
                variant="outline-secondary btn-lg px-4 me-sm-3 fw-bold"
              >
                About
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
