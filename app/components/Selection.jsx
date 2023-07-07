import { useState } from "react";

const options = [
  { id: 1, name: "Option 1" },
  { id: 2, name: "Option 2" },
  { id: 3, name: "Option 3" },
  // Add more options as needed
];

const Selection = () => {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleChange = (event) => {
    const optionId = parseInt(event.target.value);
    const option = options.find((opt) => opt.id === optionId);
    setSelectedOption(option);
  };

  return (
    <div className="w-64">
      <label className="block text-sm font-medium text-gray-700">
        Select an option:
      </label>
      <select
        value={selectedOption.id}
        onChange={handleChange}
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
      >
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Selection;
