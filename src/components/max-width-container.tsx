import { ReactNode } from "react"

interface MaxWidthContainerProps {
  children: ReactNode
  className?: string
}

export function MaxWidthContainer({ children, className = "" }: MaxWidthContainerProps) {
  return (
    <div className={`mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  )
}

