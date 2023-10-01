import Header from "../components/header"
import Offer from "../components/offer"

const HomePage = () => {

  const arr = new Array(180).fill(0)

  console.log(arr)

  return (
    <>
      <Header />
      <div className="flex flex-row flex-wrap justify-center gap-2">
        {arr.map((_, index) => (
          <Offer key={index} id={index+1} />
        ))}
      </div>
    </>
  )
}

export default HomePage