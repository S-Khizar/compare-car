import Image from 'next/image'

interface IconInfoProp {
    image: string,
    imageName: string,
    info: string
}

const IconInfo = ({ image, imageName, info }: IconInfoProp) => {
    return (
        <div className='flex items-center gap-x-3 lg:gap-x-4 '>
            <Image src={`/compareCar/${image}`} alt={imageName} width={50} height={50} className='hidden lg:block' />
            <Image src={`/compareCar/${image}`} alt={imageName} width={30} height={30} className='block lg:hidden' />
            <p className='text-sm lg:text-lg font-semibold text-[#6B6B6B] font-open-sans'>{info}</p>
        </div>
    )
}

export default IconInfo