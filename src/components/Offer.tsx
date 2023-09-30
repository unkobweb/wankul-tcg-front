type OfferProps = {
  id: number
}

const Offer = ({id}: OfferProps) => {

  const imgPath = `/images/Wankul_${id.toString().padStart(3, '0')}.jpg`

  return (
    <div>
      <img src={imgPath} />
      <h1>Offer {id}</h1>
    </div>
  )
}

export default Offer