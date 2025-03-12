import { Button } from "@/components/ui/button"
import { Calendar, MessageCircle, MapPin, Clock } from "lucide-react"
import Link from "next/link"

export function MobileReservationButton() {
  return (
    <div className="fixed bottom-0 left-0 right-0 p-2 bg-white shadow-lg md:hidden z-50">
      <div className="grid grid-cols-4 gap-1">
        <Button className="bg-primary hover:bg-owl-dark text-white text-xs py-2 px-1 h-auto">
          <div className="flex flex-col items-center">
            <Calendar className="w-5 h-5 mb-1" />
            <span>web予約</span>
          </div>
        </Button>

        <Button className="bg-green-600 hover:bg-green-700 text-white text-xs py-2 px-1 h-auto">
          <div className="flex flex-col items-center">
            <MessageCircle className="w-5 h-5 mb-1" />
            <span>LINE予約</span>
          </div>
        </Button>

        <Button
          asChild
          variant="outline"
          className="border-[#a4c9c8] text-[#a4c9c8] hover:bg-[#a4c9c8] hover:text-white text-xs py-2 px-1 h-auto"
        >
          <Link href="/access">
            <div className="flex flex-col items-center">
              <MapPin className="w-5 h-5 mb-1" />
              <span>アクセス</span>
            </div>
          </Link>
        </Button>

        <Button
          asChild
          variant="outline"
          className="border-[#a4c9c8] text-[#a4c9c8] hover:bg-[#a4c9c8] hover:text-white text-xs py-2 px-1 h-auto"
        >
          <Link href="/hours">
            <div className="flex flex-col items-center">
              <Clock className="w-5 h-5 mb-1" />
              <span>診療時間</span>
            </div>
          </Link>
        </Button>
      </div>
    </div>
  )
}

