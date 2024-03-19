import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import first from '../assets/1.jpg'
import second from '../assets/2.jpg'
import third from '../assets/3.jpg'


export default function Carousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])

  return (
    <div className="embla border-y-[2px] border-prm" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">
            <Image src={first} alt='1' width="1920" height="545"/>
        </div>
        <div className="embla__slide">
            <Image src={second} alt='2' width="1920" height="545"/>
        </div>
        <div className="embla__slide">
            <Image src={third} alt='3' width="1920" height="545"/>
        </div>
      </div>
    </div>
  )
}
