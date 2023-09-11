'use client'
import { Toaster } from "react-hot-toast";

type Props = {
  children: React.ReactNode
}

export const Providers = ({ children }: Props) => {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      {children}
    </>
  )
}
