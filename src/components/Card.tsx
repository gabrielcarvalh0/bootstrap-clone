export function Card() {
  return (
    <div className="col-4">
        <div className="card  bg-dark text-white">
        <img
        src="https://res.cloudinary.com/dydwaeqqy/image/upload/v1663809944/cld-sample-3.jpg"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
        </div>
   
    </div>
  );
}
