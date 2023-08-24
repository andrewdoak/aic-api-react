/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import ArtCard from "../components/ArtCard"
export default function ArtCards ({ ArtCard }) {
    return (
    <ul className='art-cards'>
        {ArtCard.map((artwork, i) => {
        return <ArtCard key={i} {...artwork}/>
        })}
    </ul>
    );
}
