import { useState } from 'react'

import logoImage from '@/assets/images/logo.png'

type Props = {
  className?: string
  height?: number
}

export default function Logo({ className = '', height = 32 }: Props) {
  const [imgFailed, setImgFailed] = useState(false)

  if (imgFailed) {
    return (
      <span className={`font-semibold text-lg text-primary ${className}`}>
        KDI
      </span>
    )
  }

  return (
    <img
      src={logoImage}
      alt="PT Kaizen Dharma Indonesia"
      height={height}
      className={`h-auto object-contain ${className}`}
      style={{ maxHeight: height }}
      onError={() => setImgFailed(true)}
    />
  )
}
