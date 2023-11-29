import { ICardItemProps } from "../models";
import { DateTime } from "./DateTime ";
import { HOC } from "./HOC";
import YouTubeVideo from "./YoutubeVideo";

export function CardItem({ data }: ICardItemProps) {
  const DateTimePretty = HOC(DateTime, data.date);

  return (
    <div className="card-item">
      <YouTubeVideo id={data.videoUrl} />
      <DateTimePretty />
    </div>
  );
}
