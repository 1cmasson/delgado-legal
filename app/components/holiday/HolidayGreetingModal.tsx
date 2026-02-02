'use client';

import { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from '~/components/ui/dialog';
import { Button } from '~/components/ui/button';
import type { HolidayConfig } from '~/lib/holidays';

const STORAGE_KEY = 'holiday-greeting-dismissed';

interface HolidayGreetingModalProps {
  holiday: HolidayConfig | null;
}

export function HolidayGreetingModal({ holiday }: HolidayGreetingModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!holiday) return;

    const dismissedHoliday = localStorage.getItem(STORAGE_KEY);
    if (dismissedHoliday !== holiday.name) {
      setIsOpen(true);
    }
  }, [holiday]);

  const handleDismiss = () => {
    if (holiday) {
      localStorage.setItem(STORAGE_KEY, holiday.name);
    }
    setIsOpen(false);
  };

  if (!holiday) return null;

  const { greeting, accentColor } = holiday;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && handleDismiss()}>
      <DialogContent 
        showCloseButton={false}
        className="text-center"
      >
        <DialogHeader className="items-center">
          <div className="text-6xl mb-2">{greeting.emoji}</div>
          <DialogTitle 
            className="text-2xl"
            style={accentColor ? { color: accentColor } : undefined}
          >
            {greeting.title}
          </DialogTitle>
          <DialogDescription className="text-base mt-2">
            {greeting.message}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-center mt-4">
          <Button
            onClick={handleDismiss}
            style={accentColor ? { backgroundColor: accentColor } : undefined}
            className="min-w-[120px]"
          >
            OK
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
