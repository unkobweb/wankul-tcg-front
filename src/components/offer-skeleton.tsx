import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Skeleton } from "./ui/skeleton";

const OfferSkeleton = () => {
  return (
    <Card className="w-[300px]">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>
          <Skeleton className="w-[200px] h-[20px] mt-[7px]" />
        </CardTitle>
        <CardDescription>
          <Skeleton className="w-[30px] h-[20px]" />
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Skeleton className="w-[250px] h-[350px]" />
      </CardContent>
      <CardFooter>
        <div className="flex flex-row items-center">
          <Skeleton className="w-[45px] h-[45px] rounded-full mr-3" />
          <div className="flex flex-col">
            <Skeleton className="w-[100px] h-[20px] mb-1" />
            <Skeleton className="w-[80px] h-[20px]" />
          </div>
        </div>
      </CardFooter>
    </Card>
  )
};

export default OfferSkeleton;