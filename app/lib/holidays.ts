// Holiday Theme Configuration
export interface HolidayConfig {
  name: string;
  startDate: { month: number; day: number };
  endDate: { month: number; day: number };
  effect?: 'snow' | 'hearts' | 'fireworks' | 'confetti';
  accentColor?: string;
  logoVariant?: string;
  greeting: {
    title: string;
    message: string;
    emoji: string;
  };
}

export const holidays: HolidayConfig[] = [
  {
    name: 'christmas',
    startDate: { month: 12, day: 1 },
    endDate: { month: 12, day: 31 },
    effect: 'snow',
    accentColor: '#c41e3a',
    logoVariant: 'christmas',
    greeting: {
      title: 'Merry Christmas!',
      message: 'Wishing you and your loved ones a joyful holiday season filled with peace and happiness.',
      emoji: '🎄',
    },
  },
  {
    name: 'valentines',
    startDate: { month: 2, day: 10 },
    endDate: { month: 2, day: 14 },
    effect: 'hearts',
    accentColor: '#e91e63',
    greeting: {
      title: "Happy Valentine's Day!",
      message: 'Spreading love and warmth to you and yours on this special day.',
      emoji: '💕',
    },
  },
  {
    name: 'independence',
    startDate: { month: 7, day: 1 },
    endDate: { month: 7, day: 4 },
    effect: 'fireworks',
    greeting: {
      title: 'Happy Independence Day!',
      message: 'Celebrating freedom and the spirit of America. Have a safe and happy 4th of July!',
      emoji: '🎆',
    },
  },
  {
    name: 'newYear',
    startDate: { month: 1, day: 1 },
    endDate: { month: 1, day: 3 },
    effect: 'confetti',
    greeting: {
      title: 'Happy New Year!',
      message: 'Wishing you a wonderful year ahead filled with success, health, and happiness.',
      emoji: '🎉',
    },
  },
];

export function getCurrentHoliday(): HolidayConfig | null {
  // Allow override via environment variable for testing (e.g., VITE_TEST_HOLIDAY=christmas)
  const testHoliday = import.meta.env.VITE_TEST_HOLIDAY;
  if (testHoliday) {
    const found = holidays.find((h) => h.name === testHoliday);
    if (found) return found;
  }

  const now = new Date();
  const currentMonth = now.getMonth() + 1;
  const currentDay = now.getDate();

  for (const holiday of holidays) {
    const { startDate, endDate } = holiday;
    
    // Handle year wrap (e.g., Christmas to New Year)
    if (startDate.month > endDate.month) {
      if (
        (currentMonth === startDate.month && currentDay >= startDate.day) ||
        (currentMonth > startDate.month) ||
        (currentMonth < endDate.month) ||
        (currentMonth === endDate.month && currentDay <= endDate.day)
      ) {
        return holiday;
      }
    } else {
      if (
        (currentMonth > startDate.month || (currentMonth === startDate.month && currentDay >= startDate.day)) &&
        (currentMonth < endDate.month || (currentMonth === endDate.month && currentDay <= endDate.day))
      ) {
        return holiday;
      }
    }
  }
  
  return null;
}

export function isHolidaySeason(holidayName: string): boolean {
  const current = getCurrentHoliday();
  return current?.name === holidayName;
}
