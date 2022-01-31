import React from "react";
import Checkbox from "../../UI/Checkbox";
import FilterCard from "../../UI/FilterCard";
import classes from "./FilterByTimeZone.module.css"

const TIMEZONES = ["UTC-12:00", "UTC-11:00", "UTC-10:00", "UTC-09:30", "UTC-09:00", "UTC-08:00", "UTC-07:00",
                    "UTC-06:00", "UTC-05:00", "UTC-04:00", "UTC-3:30", "UTC-03:00", "UTC-02:00", "UTC-01:00", "UTC+00:00", 
                    "UTC+01:00", "UTC+02:00", "UTC+03:00", "UTC+3:30", "UTC+04:00", "UTC+4:30", "UTC+05:00", "UTC+5:30", "UTC+5:45",
                    "UTC+06:00", "UTC+07:00", "UTC+08:00", "UTC+8:45", "UTC+09:00", "UTC+9:30", "UTC+10:00", "UTC+10:30",
                     "UTC+11:00", "UTC+12:00", "UTC+13:00", "UTC+13:45", "UTC+14:00"]

const FilterByTimeZone = (props) => {
    return <FilterCard className={classes.timezone}>
      <div className={classes.timezonediv}>
      <div> <h2>Filter by Time Zone</h2> </div>
        <div className={classes.timezones}>
            {TIMEZONES.map((timeZone) => (
                
                <Checkbox 
                className={classes.checkboxitem}
                label={timeZone}
                onChange={props.onChangeTimeZone}/>
                
            ))}
        </div>
      </div>
        
    </FilterCard>
};

export default FilterByTimeZone;