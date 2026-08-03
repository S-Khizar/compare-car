import Image from 'next/image'
import React from 'react'

interface RouteLinkProp {
    iamgeAlt?: string,
    image?: string,
    routeName?: string,
    variant?: string,
}

const RouteLink = ({ iamgeAlt = "home", image, routeName, variant = 'childRoute' }: RouteLinkProp) => {
    return (
        <div className='flex gap-2.5'>
            {
                image ? (<Image src={`/compareCar/${image}`} alt={iamgeAlt} width={12} height={12} />) : (<p className={`font-open-sans text-sm ${variant === 'parentRoute' ? 'text-dark-blue' : 'text-black'}`}>{routeName}</p>)
            }
            <Image src='/compareCar/chevronright.svg' alt='chevronRight' width={12} height={12} />
        </div>
    )
}

export default RouteLink