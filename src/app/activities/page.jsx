import ActivityLogic from "@/components/activity/ActivityLogic"
import FixedButton from "@/components/eventBtn/eventButton"


export const metadata={
    title:"Activities"
}

const ActivityPage=()=>{


    return(
        <>
    <ActivityLogic/>
    <FixedButton/>
    </>


    )
}

export default ActivityPage