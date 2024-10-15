import css from "./style.module.css";
import cn from "classnames";

const Types = ({
  activeType,
  setActiveType,
  activeSubType,
  setActiveSubType,
}) => {
  const clothingTypes = [
    { type: "T-shirts", subFields: ["Male", "Female", "Unisex"] },
    { type: "Shorts", subFields: ["Male", "Female", "Unisex"] },
    { type: "Shirts", subFields: ["Male", "Female", "Unisex"] },
    { type: "Hoodie", subFields: ["Male", "Female", "Unisex"] },
    { type: "Jeans", subFields: ["Male", "Female", "Unisex"] },
  ];

  const handleClickType = (type) => {
    if (activeType === type) {
      setActiveType("");
    } else {
      setActiveType(type);
    }
  };

  const handleClickSubType = (subType) => {
    
  };

  return (
    <div className={css.filters__types}>
      <ul className={css.types__list}>
        {clothingTypes.map(({ type, subFields }) => (
          <li key={type}>
            <div
              className={cn(css.types__item, {
                [css.active]: activeType === type,
              })}
              onClick={() => handleClickType(type)}
            >
              {type}
            </div>
            {activeType === type && (
              <ul className={css.subFields__list}>
                {subFields.map((subType) => (
                  <li
                    key={subType}
                    className={cn(css.subField__item, {
                      [css.active]: activeSubType === subType,
                    })}
                    onClick={() => handleClickSubType(subType)}
                  >
                    {subType}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Types;
