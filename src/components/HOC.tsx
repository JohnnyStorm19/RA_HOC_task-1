import React from "react";
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

export function HOC(Component: React.ComponentType<{date:string}>, date: string) {
    dayjs.locale('ru');
    dayjs.extend(relativeTime);
    const dateDiff = dayjs(date).fromNow();
    return class extends React.Component {
        render() {
            return <Component date={dateDiff} />
        }
    }
}