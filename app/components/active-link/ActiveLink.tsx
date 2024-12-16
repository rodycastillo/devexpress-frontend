'use client';
import Link from 'next/link';
import React, { PropsWithChildren } from 'react'
import { usePathname } from 'next/navigation';
import { cn } from '@/app/utils/styles';

type ActiveLinkProps = PropsWithChildren & {
    path: string;
    title?: string;
    className?: string;
}

export const ActiveLink = (props: ActiveLinkProps) => {
    const {path, title, className, children} = props;
    const pathName = usePathname();

  return (
    <Link href={path} className={cn(`link ${className}`, pathName === path && 'active-link')}>{title} {children}</Link>
  )
}
 