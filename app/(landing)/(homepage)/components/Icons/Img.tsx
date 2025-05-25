import React from 'react'

export default function Img(props: { src: string | undefined; alt: string | undefined; className: string | undefined }) {
  return (

        // eslint-disable-next-line @next/next/no-img-element
        <img src={props.src} alt={props.alt} className={props.className} />
  )
}
