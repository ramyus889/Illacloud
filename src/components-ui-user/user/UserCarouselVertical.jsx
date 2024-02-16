import { Card, CardContent } from "@/components-ui/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components-ui/ui/carousel";

export default function CarouselOrientation() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      orientation="vertical"
      className="w-full max-w-xs"
    >
      <CarouselContent className="-mt-1 h-[200px]">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="pt-1 md:basis-1/2">
            <div className="p-1">
              <Card>
                <CardContent className="flex items-center justify-center p-6">
                  <img src="/public/img/Untitled2.png" alt="" />
                </CardContent>
                <CardContent className="flex items-center justify-center p-6">
                  <img src="/public/img/Untitled2.png" alt="" />
                </CardContent>
                <CardContent className="flex items-center justify-center p-6">
                  <img src="/public/img/Untitled2.png" alt="" />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
