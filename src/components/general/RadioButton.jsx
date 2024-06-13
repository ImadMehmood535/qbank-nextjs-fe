import React from "react";

const RadioButton = ({
  radioOptions,
  register,
  name,
  result,
  mode,
  selectedOptions,
  setValue,
}) => {
  const getIcon = (optionId) => {
    if (result && mode === "explanationBased") {
      const correctOption = result.options.find((opt) => opt.isCorrect);
      const userOption = result.userSubmittedOption;
      if (optionId === correctOption.id) {
        return "✔";
      }
      if (optionId === userOption && optionId !== correctOption.id) {
        return "✖";
      }
    }
    return null;
  };

  const handleRadioChange = (optionId) => {
    setValue(name, optionId);
  };

  const getOptionLetter = (index) => {
    return String.fromCharCode(97 + index);
  };

  return (
    <div className="flex flex-col pb-8 gap-3">
      <div className="flex flex-col items-center gap-3">
        {radioOptions?.map((option, index) => (
          <div
            key={option?.id}
            className="flex justify-start gap-4 items-center w-full"
            onClick={() => handleRadioChange(option.id)}
            style={{ cursor: "pointer" }}
          >
            <span className="text-themeButton-0 font-bold">
              {getOptionLetter(index)}{" "}
            </span>
            <div className="max-w-[15px] w-full flex justify-center">
              <div
                className={`transition-all  ${
                  selectedOptions[result?.examQuestionsId] === option.id
                    ? " rounded-md bg-themeButton-0 py-1 px-2"
                    : "w-4 h-4 rounded-full border-black border-1 "
                }`}
              >
                {selectedOptions[result?.examQuestionsId] === option.id && (
                  <div className="relative text-black w-full h-full rounded-full bg-white p-2 customClass"></div>
                )}
              </div>
            </div>
            <label htmlFor={option?.id} className="flex items-center gap-2 cursor-pointer">
              {option?.name}
              {result && <span>{getIcon(option?.id)}</span>}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RadioButton;
