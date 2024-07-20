import { cn } from '@/lib/utils'
import React, { ReactNode } from 'react'

function MaxWContainer({
    children,
    classes
}:{
    children: ReactNode,
    classes?: string, //optional for classes
}) {
  return (
    <div className={cn('container max-w-2xl sm:max-w-4xl', classes)}>
        {children}
    </div>
  )
}

export default MaxWContainer