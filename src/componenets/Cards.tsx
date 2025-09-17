function GenerateCard(title: String, text: String) {
  return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{ title }</h5>
          <p className="card-text">{ text }</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
  );
}

export default GenerateCard;