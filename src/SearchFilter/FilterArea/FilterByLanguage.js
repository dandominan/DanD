import React from "react";
import Checkbox from "../../UI/Checkbox";
import FilterCard from "../../UI/FilterCard";
import './FilterByLanguage.css';

const LANGUAGES = ["English", "French", "Arabic", "Spanish", "Portuguese",
    "German", "Russian", "Swahili", "Italian"]

const FilterByLanguage = (props) => {
    return <FilterCard className="language">
        <div className="languagediv">
            <div> <h2>Filter By Language</h2></div>
            <div className="languages">
                {LANGUAGES.map((language) => (
                    <Checkbox className="checkboxitem"
                        label={language}
                        onChange={props.onChangeLanguage} />
                ))}
            </div>
        </div>

    </FilterCard>
};

export default FilterByLanguage;