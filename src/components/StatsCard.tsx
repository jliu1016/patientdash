export interface Stats {
    title: string
    number: number
}
export function StatsCard(props: Stats) {
    return (
    <div>
        <p>{props.title}</p>
        <p>{props.number}</p>
    </div>)
}