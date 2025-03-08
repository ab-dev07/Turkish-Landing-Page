import React from 'react'

export default function TopCornerArrow() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="transition-colors duration-200">
      <circle 
        cx="20.3152" 
        cy="19.9726" 
        r="19.4285" 
        className="fill-red-600 group-hover:fill-white"
      />
      <g clipPath="url(#clip0_42_379)">
        <path 
          d="M14.0898 26.1974L26.5394 13.7478" 
          className="stroke-white group-hover:stroke-red-600" 
          strokeWidth="1.5562" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        <path 
          d="M26.5391 23.8631L26.5391 13.7478L16.4238 13.7478" 
          className="stroke-white group-hover:stroke-red-600" 
          strokeWidth="1.5562" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_42_379">
          <rect width="24.8992" height="24.8992" fill="white" transform="matrix(-4.37114e-08 1 1 4.37114e-08 7.86523 7.52304)"/>
        </clipPath>
      </defs>
    </svg>
  )
}