type CardProps = {
  image: string;
  title: string;
  text: string;
};


function GenerateCard({ image, title, text }: CardProps) {
  return (
      <div className="card">
        <img className="card-img-top" src={ image }></img>
        <div className="card-body">
          <h5 className="card-title">{ title }</h5>
          <p className="card-text">{ text }</p>
        </div>
      </div>
  );
}

export default GenerateCard;