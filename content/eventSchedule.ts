export type EventScheduleItem = {
  time: string;
  title: string;
  type: "session" | "break" | "networking" | "closing";
};

export const eventSchedule: EventScheduleItem[] = [
  {
    time: "12:00 PM",
    title: "Introductory Remarks",
    type: "session",
  },
  {
    time: "12:20 PM",
    title: "Entrepreneurship: A Day in the Life",
    type: "session",
  },
  {
    time: "01:00 PM",
    title: "Goal Setting",
    type: "session",
  },
  {
    time: "02:00 PM",
    title: "Leading with Purpose",
    type: "session",
  },
  {
    time: "03:00 PM",
    title: "Building High Performing Teams",
    type: "session",
  },
  {
    time: "12:00 PM",
    title: "Lunch Break",
    type: "break",
  },
  {
    time: "12:20 PM",
    title: "Why Failing is Important",
    type: "session",
  },
  {
    time: "01:00 PM",
    title: "AI Transformation",
    type: "session",
  },
  {
    time: "02:00 PM",
    title: "Decision Making / Building Culture",
    type: "session",
  },
  {
    time: "03:00 PM",
    title: "Why Your Team Doesn’t Speak Up",
    type: "session",
  },
  {
    time: "12:00 PM",
    title: "Breakout Session with Audiences",
    type: "session",
  },
  {
    time: "12:20 PM",
    title: "Closing Remarks",
    type: "closing",
  },
  {
    time: "01:00 PM",
    title: "Networking and Cocktail Dinner",
    type: "networking",
  },
];