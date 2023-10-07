import './index.css'

interface Props {
    image: string,
    name: string,
    comment?: string
}

export default function Character({image, name, comment}:Props) {
    return (
        <div className='character'>
            <img src={image} alt={name} />
            <h2 className='name'>{name}</h2>
            <p>{comment}</p>
        </div>
    )
}