// src/types/contact.ts
export interface QuoteProps {
    text: string;
    className?: string;
}

export interface LineProps {
    position: 'left' | 'right';
}

export interface MarqueeProps {
    text: string;
    emailLink: string;
}

export interface EmailButtonProps {
    email: string;
}