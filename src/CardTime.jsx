export function CardTime( { task, time } ) {

    const TimeCurrent = () => {
      switch(time) {

        case "daily":   return task.timeframes.daily.current
        case "weekly":   return task.timeframes.weekly.current;
        case "monthly": return task.timeframes.monthly.current;

        default:      return task.timeframes.daily.current
      }
    }

    const TimePrevious = () => {
      switch(time) {

        case "daily":   return task.timeframes.daily.previous
        case "weekly":   return task.timeframes.weekly.previous;
        case "monthly": return task.timeframes.monthly.previous;

        default:      return task.timeframes.daily.previous
      }
    }
    
  return (
      <div className={ task.color +" w-full max-h-48 rounded-lg flex flex-col" }>
        <img className="h-14 w-14 self-end mr-2" src={task.image} />
        <div className="self-end z-10 w-full h-5/6 -mt-4 p-4 bg-card rounded-lg text-white" >
          <p className="capitalize">{task.title}</p>
          <p className="text-5xl font-light mt-2">{

            TimeCurrent()
            }hrs</p>
          <p className="text-xs text-pale-blue font-light mt-2">Last Day - {TimePrevious()}hrs</p>
        </div>
      </div>
  );
}
