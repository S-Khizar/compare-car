import Image from 'next/image'


interface RouteLinkProp {
    imageAlt?: string,
    image?: string,
    routeName?: string,
    variant?: string,
}

const RouteLink = ({ imageAlt = "home", image, routeName, variant = 'parentRoute' }: RouteLinkProp) => {
    return (
        <div className='flex gap-2.5'>
            {
                image ? (<Image src={`/compareCar/${image}`} alt={imageAlt} width={12} height={12} />) : (<p className={`font-open-sans text-sm ${variant === 'parentRoute' ? 'text-[#004C8F]' : 'text-black'}`}>{routeName}</p>)
            }
            {
                variant === 'parentRoute' && (<Image src='/compareCar/chevronright.svg' alt='chevronRight' width={12} height={12} />)
            }
        </div>
    )
}

export default RouteLink