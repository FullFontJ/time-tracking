import { CardTime } from "./CardTime";
import avatar from "./assets/image-jeremy.png";
import { useEffect, useState } from "react";

export function Contain() {
  const [datatime, setDatatime] = useState([]);

  const [times, setTimes] = useState("daily");

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("data.json");
      const data = await response.json();
      setDatatime(data);
    }

    fetchData();
  }, [times]);

  return (
    <div className="container w-3/4 h-96 flex gap-4 ml-60 mt-24 tr">
      <div className="w-1/6 h-full bg-card  rounded-lg">
        <div className="w-full h-4/6 bg-blue rounded-lg p-5 flex flex-col text-pale-blue">
          <img
            className="h-14 w-14 rounded-full border-2 border-cyan-50"
            src={avatar}
          />
          <p className="font-light text-xs mt-6">Report for</p>
          <h2 className="font-light text-white text-2xl mt-1">
            Jeremy Rabson{" "}
          </h2>
        </div>
        <div className="flex flex-col text-desaturated-blue text-sm font-normal gap-2 items-start mt-2 p-4 cursor-pointer">
          <button
            className={times == "daily" ? "font-medium text-white" : ""}
            onClick={() => setTimes("daily")}
          >
            Daily
          </button>
          <button
            className={times == "weekly" ? "font-medium text-white" : ""}
            onClick={() => setTimes("weekly")}
          >
            Weekly
          </button>
          <button
            className={times == "monthly" ? "font-medium text-white" : ""}
            onClick={() => setTimes("monthly")}
          >
            Monthly
          </button>
        </div>
      </div>

      <div className="grid w-4/6 h-full grid-cols-3 gap-4">
        {datatime.map((tasks) => (
          <CardTime key={tasks.id} task={tasks} time={times} />
        ))}
      </div>
    </div>
  );
}
