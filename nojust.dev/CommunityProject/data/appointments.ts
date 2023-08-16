import { getDate } from "./timeLineEvents"

export const appointments = [
    {
      id: '1',
      event : {
        start: `${getDate(-1)} 09:20:00`,
        end: `${getDate(-1)} 12:00:00`,
        title: 'Merge Request to React Native Calendars',
        summary: 'Merge Timeline Calendar to React Native Calendars',
      },
      doctor: {
            "id": "001",
            "name": "Dr. Maria Rodriguez",
            "image_url": "https://picsum.photos/seed/001/200/200",
            "specialty": "Cardiology"
      }
    }
]