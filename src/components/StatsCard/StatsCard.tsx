import './StatsCard.css';

export interface Stats{
    title: string
     number: number
}
export function StatsCard(props: Stats){
    return (<div className='StatsCard'>
        <p>{props.title}</p>
        <p>{props.number}</p>
    </div>)
}