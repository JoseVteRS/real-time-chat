import React, { ButtonHTMLAttributes } from 'react'
import { VariantProps, cva } from "class-variance-authority";
import { Loader2 } from "lucide-react"
import { cn } from '@/lib/utils';




export const buttonVariants = cva(
  'active:scale-95 inline-flex items-center justify-center rounded-md text-sm font-medium transition-color focus:ouline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        default: 'bg-slate-900 text-white hover:bg-slate-800',
        ghost: 'bg-transparent hover:text-slate-900 hover:bg-slate-200',
        outline: 'bg-transparent border border-slate-900 hover:bg-slate-200',
        link: 'bg-transparent hover:text-slate-900 hover:bg-slate-200',
        danger: 'bg-red-600 hover:bg-red-500 text-white',
      },
      size: {
        default: 'h-10 py-3 px-4',
        sm: 'h-9 px-2',
        lg: 'h-11 px-8'
      },
    },

    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
)



export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  isLoading?: boolean
}


export const Button = ({ className, children, variant, isLoading, size, ...props }: ButtonProps) => {
  return (
    <button className={cn(buttonVariants({variant, size, className}))} {...props} >

      {isLoading ? <Loader2 className='mr-2 h-4 w-4 animate-spin' /> : null}
      {children}

    </button >
  )
}