import { auth } from '@/auth';
import StartupFrom from '@/components/StartupFrom'
import { redirect } from 'next/navigation';
import React from 'react'

const page  = async () => {
    const session =await auth();
    if(!session) redirect("/")
  return (
  <>
  <section className='pink_container !min-h-[230px]'>
    <h1 className='heading'>Submit Your Startup</h1>
  </section>
<StartupFrom/>
  </>
  )
}

export default page