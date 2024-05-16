import { parseISO, formatDistanceToNow } from "date-fns";

const TimeAgo = ({ Timestamp})=>{
    let timeAgo =''

    if (Timestamp){
        const date = parseISO(Timestamp)
        const timePeriod = formatDistanceToNow(date)
        timeAgo = `${timePeriod} ago`
    }

    return(

        <span title={Timestamp}>

        &nbsp; <i>{timeAgo}</i>
        </span>
    )
}
export default TimeAgo