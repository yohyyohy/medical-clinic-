import { Button } from "@/components/ui/button"
import { Calendar, MessageCircle } from "lucide-react"

export function MobileReservationButton() {
  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-white shadow-lg md:hidden z-50">
      <div className="space-y-2">
        <Button className="w-full bg-primary hover:bg-owl-dark text-white text-lg py-4">
          <Calendar className="w-6 h-6 mr-2" />
          web予約
        </Button>
        <Button className="w-full bg-green-600 hover:bg-green-700 text-white text-lg py-4">
          <MessageCircle className="w-6 h-6 mr-2" />
          LINE予約<span className="text-xs ml-1">（工事中）</span>
        </Button>
      </div>
    </div>
  )
}

