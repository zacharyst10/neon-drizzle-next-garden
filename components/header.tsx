'use client'

import { SignOutButton, UserButton, useUser } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'

import logo from '@/public/icons/logo.png'

import { Navbar } from './navbar'
import { ModeToggle } from './toggle-mode'
import { Button } from './ui/button'

export default function Header() {
  const { isSignedIn } = useUser()
  return (
    <div className='flex items-center justify-between p-5'>
      <Link href='/'>
        <Image
          src={logo}
          alt='logo'
          width={50}
          height={50}
          placeholder='blur'
        />
      </Link>
      <Navbar />
      <ModeToggle />
      {isSignedIn ? (
        <>
          <Button asChild className='mr-4'>
            <SignOutButton />
          </Button>
          <UserButton />
        </>
      ) : (
        <div className='flex gap-4'>
          <Button asChild>
            <Link href='/sign-in'>Sign In</Link>
          </Button>
          <Button asChild>
            <Link href='/sign-up'>Sign Up</Link>
          </Button>
        </div>
      )}
    </div>
  )
}
