import Image from 'next/image'

import loadingIcon from '@/public/icons/loadingIcon.png'

type LoaderProps = {
  size?: number
}
export function LoaderPage({ size }: LoaderProps) {
  return (
    <div className='flex items-center justify-center'>
      <div
        className='loader'
        style={
          { '--size': size ? `${size}px` : undefined } as React.CSSProperties
        }
      >
        <Image
          width={size ? size : 50}
          height={size ? size : 50}
          alt='loading...'
          src={loadingIcon}
          className='seed'
        />
      </div>
    </div>
  )
}

export default function Loader({ size }: LoaderProps) {
  return (
    <div>
      <LoaderPage size={size} />
    </div>
  )
}
