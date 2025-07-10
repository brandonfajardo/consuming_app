import { useState } from 'react'

import { Button, buttonSizeProps, buttonVariantProps } from '@brandonfajardo/button'

function App() {
  const toggle = () => {
    document.body.classList.toggle('dark');
    if (document.body.style.backgroundColor === 'black') {
      document.body.style.backgroundColor = 'white'
    } else {
      document.body.style.backgroundColor = 'black'
    }
  }

  return (
    <>
    <Button className='mb-[50px]' onClick={toggle}>Toggle light/dark</Button>
    <div className='flex flex-col gap-5'>
          <div className='flex flex-row gap-5'>
      <Button size={buttonSizeProps.XXSMALL} variant={buttonVariantProps.DESTRUCTIVE}>Destructive</Button>
      <Button size={buttonSizeProps.XXSMALL} variant={buttonVariantProps.GHOST}>Ghost</Button>
      <Button size={buttonSizeProps.XXSMALL} variant={buttonVariantProps.OUTLINE}>Outline</Button>
      <Button size={buttonSizeProps.XXSMALL} variant={buttonVariantProps.SECONDARY}>Secondary</Button>
          </div>
          
                    <div className='flex flex-row gap-5'>
            <Button size={buttonSizeProps.XSMALL} variant={buttonVariantProps.DEFAULT}>Default</Button>
      <Button size={buttonSizeProps.XSMALL} variant={buttonVariantProps.DESTRUCTIVE}>Destructive</Button>
      <Button size={buttonSizeProps.XSMALL} variant={buttonVariantProps.GHOST}>Ghost</Button>
      <Button size={buttonSizeProps.XSMALL} variant={buttonVariantProps.OUTLINE}>Outline</Button>
      <Button size={buttonSizeProps.XSMALL} variant={buttonVariantProps.SECONDARY}>Secondary</Button>
      </div>

             <div className='flex flex-row gap-5'>
            <Button size={buttonSizeProps.SMALL} variant={buttonVariantProps.DEFAULT}>Default</Button>
      <Button size={buttonSizeProps.SMALL} variant={buttonVariantProps.DESTRUCTIVE}>Destructive</Button>
      <Button size={buttonSizeProps.SMALL} variant={buttonVariantProps.GHOST}>Ghost</Button>
      <Button size={buttonSizeProps.SMALL} variant={buttonVariantProps.OUTLINE}>Outline</Button>
      <Button size={buttonSizeProps.SMALL} variant={buttonVariantProps.SECONDARY}>Secondary</Button>
      </div>

             <div className='flex flex-row gap-5'>
      <Button size={buttonSizeProps.LARGE} variant={buttonVariantProps.DEFAULT}>Default</Button>
      <Button size={buttonSizeProps.LARGE} variant={buttonVariantProps.DESTRUCTIVE}>Destructive</Button>
      <Button size={buttonSizeProps.LARGE} variant={buttonVariantProps.GHOST}>Ghost</Button>
      <Button size={buttonSizeProps.LARGE} variant={buttonVariantProps.OUTLINE}>Outline</Button>
      <Button size={buttonSizeProps.LARGE} variant={buttonVariantProps.SECONDARY}>Secondary</Button>
      </div>
    </div>
    </>
  )
}

export default App
