import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import names from '../assets/cards.json'

type OfferProps = {
  id: number
}

const Offer = ({id}: OfferProps) => {

  const completeId = id.toString().padStart(3, '0')
  const imgPath = `/images/Wankul_${completeId}.jpg`

  return (
    <Card className="w-[300px]">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>{names[id-1]}</CardTitle>
        <CardDescription>#{completeId}</CardDescription>
      </CardHeader>
      <CardContent>
        <img  src={imgPath} />
      </CardContent>
      <CardFooter>
        <div className="flex flex-row items-center">
          <Avatar className="mr-3">
            <AvatarImage></AvatarImage>
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="font-bold">Cyril</span>
            <span>Nantes</span>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}

export default Offer