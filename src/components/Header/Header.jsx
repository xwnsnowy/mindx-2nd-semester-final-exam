import { useState } from "react";
import PropTypes from "prop-types";

const Header = ({ onFilterChange }) => {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const handleFilterChange = (filter) => {
    onFilterChange(filter);
    setSelectedFilter(filter);
  };

  return (
    <div className="grid grid-cols-3 place-items-center font-medium">
      <div>
        <p
          className={`cursor-pointer w-16 flex items-center justify-center ${
            selectedFilter === "all" && "border-b-[2px] pb-2 border-purple-600"
          } pb-1`}
          onClick={() => handleFilterChange("all")}
        >
          All
        </p>
      </div>
      <div>
        <p
          className={`cursor-pointer w-16 flex items-center justify-center ${
            selectedFilter === "active" &&
            "border-b-[2px] pb-2 border-purple-600"
          } pb-1`}
          onClick={() => handleFilterChange("active")}
        >
          Active
        </p>
      </div>
      <div>
        <p
          className={`cursor-pointer w-16 flex items-center justify-center ${
            selectedFilter === "completed" &&
            "border-b-[2px] pb-2 border-purple-600"
          } pb-1`}
          onClick={() => handleFilterChange("completed")}
        >
          Completed
        </p>
      </div>
    </div>
  );
};

Header.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
};

export default Header;
