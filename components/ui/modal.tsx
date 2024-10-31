"use client"
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from '@/components/ui/dialog';

interface ModalContainerProps {
  children: React.ReactNode;
  trigger?: React.ReactNode;
  className?: string;
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  showClose?: boolean; // Добавляем проп в интерфейс
}

export const ModalContainer = ({
  children,
  trigger,
  className = '',
  isOpen,
  onOpenChange,
}: ModalContainerProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
      <DialogContent
        className={`
          top-[30%]
          left-[50%]
          translate-x-[-50%]
          rounded-[5px]
          data-[state=open]:animate-in
          data-[state=closed]:animate-out
          data-[state=closed]:fade-out-0
          data-[state=open]:fade-in-0
          data-[state=closed]:zoom-out-95
          data-[state=open]:zoom-in-95
          data-[state=closed]:slide-out-to-left-1/2
          data-[state=closed]:slide-out-to-top-[48%]
          data-[state=open]:slide-in-from-left-1/2
          data-[state=open]:slide-in-from-top-[48%]
          ${className}
        `}
      >
        {children}
      </DialogContent>
    </Dialog>
  );
};
