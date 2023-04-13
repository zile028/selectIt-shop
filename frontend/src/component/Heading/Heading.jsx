

const Heading = ({title, bgImage}) => {
  return (
    <div className="heading__container">
        <div className="heading__image" style={{backgroundImage: "url(" + bgImage + ")"}}></div>
        <h1 className="heading__title">{title}</h1>
    </div>
  )
}

export default Heading