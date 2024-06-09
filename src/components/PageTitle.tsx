import { cn } from '@/lib/utils';
import React from 'react'

type Props = {
    title:string;
    className?:string;
}

const PageTitle = ({title,className}: Props) => {
  return (
    <div className={cn('text-2xl font-semibold text-gray-500',className)}>
        {title}
    </div>
  )
}

export default PageTitle;