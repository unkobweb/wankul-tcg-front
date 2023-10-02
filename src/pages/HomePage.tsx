import { useMemo } from "react"
import Header from "../components/header"
import Offer from "../components/offer"
import useSWR from "swr"
import { fetcher } from "../utils"
import OfferSkeleton from "../components/offer-skeleton"

const HomePage = () => {
  const { data, error, isLoading } = useSWR('http://localhost:8080/offer', fetcher)

  if (error) {
    return (
      <>
        <Header />
        <div className="flex flex-row flex-wrap justify-center gap-2 p-6">
          <p>Une erreur est survenue</p>
        </div>
      </>
    )
  }

  if (isLoading) {
    const arr = Array(20).fill(0)
    return (
      <>
        <Header />
        <div className="flex flex-row flex-wrap justify-center gap-2 p-6">
          {arr.map((_, i) => (
            <OfferSkeleton key={i} />
          ))}
        </div>
      </>
    )
  }

  return (
    <>
      <Header />
      <div className="flex flex-row flex-wrap justify-center gap-2 p-6">
        {data.map((offer: any) => (
          <Offer key={offer.uuid} id={offer.card.cardId} />
        ))}
      </div>
    </>
  )
}

export default HomePage