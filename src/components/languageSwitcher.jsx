"use client"
import React, { useEffect, useState } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { i18n } from "@/middleware";

const LanguageSwitcher = () => {

  const pathName = usePathname()

  const redirectedPathName = (locale) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = locale
    return segments.join('/')
  }
  

  return (
    
    <ul className='flex gap-x-3'>
    {i18n.locales.map(locale => {
      return (
        <li key={locale}>
          <Link
            href={redirectedPathName(locale)}
            className='rounded-md  bg-zinc-700 hover:bg-zinc-800 transform duration-200 px-3 py-2 text-white'
          >
            {locale.toUpperCase()}
          </Link>
        </li>
      )
    })}
  </ul>
    
  );
};

export default LanguageSwitcher;
