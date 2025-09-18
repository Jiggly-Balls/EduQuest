type CardProps = {
  image: string;
  title: string;
  text: string;
  buttonText?: string;
  buttonLink?: string;
};

function GenerateCard({
  image,
  title,
  text,
  buttonText,
  buttonLink,
}: CardProps) {
  return (
    <div className="card">
      <img className="card-img-top" src={image}></img>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        {buttonText && buttonLink && (
          <a href={buttonLink} className="btn btn-primary">
            {buttonText}
          </a>
        )}
      </div>
    </div>
  );
}

export default GenerateCard;
