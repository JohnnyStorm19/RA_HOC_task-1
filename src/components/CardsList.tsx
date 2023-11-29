import { ICardsListProps } from "../models";
import { CardItem } from "./CardItem";

export function CardsList({data}: ICardsListProps) {
    return (
        <div className="cards-container">
            {
                data.map((item, id) => {
                    return <CardItem key={id} data={item}/>
                })
            }
        </div>
    )
}