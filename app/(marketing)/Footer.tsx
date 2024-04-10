import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

export function Footer() {
  return (
    <footer className='hidden lg:block h-20 border-t-2 border-slate-200 p-2'>
        <div className='max-w-screen-lg mx-auto flex items-center justify-evenly h-full'>
          <Button size="lg" variant="ghost" >
            <Image src="/hr.svg" width={40} height={32} alt="Croatian" className='rounded-md mr-4'/>
            Croatian
          </Button>
          <Button size="lg" variant="ghost" >
            <Image src="/es.svg" width={40} height={32} alt="Spanish" className='rounded-md mr-4'/>
            Spanish
          </Button>
          <Button size="lg" variant="ghost" >
            <Image src="/fr.svg" width={40} height={32} alt="French" className='rounded-md mr-4'/>
            French
          </Button>
          <Button size="lg" variant="ghost" >
            <Image src="/it.svg" width={40} height={32} alt="Italian" className='rounded-md mr-4'/>
           Italian
          </Button>
          <Button size="lg" variant="ghost" >
            <Image src="/jp.svg" width={40} height={32} alt="Japanese" className='rounded-md mr-4'/>
            Japanese
          </Button>
        </div>
    </footer>
  )
}
