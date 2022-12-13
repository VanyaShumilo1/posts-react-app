import React from 'react';

const MySelect = ({options, defaultValue}) => {
    return (
        <div>
            <select>
                <option disabled value={""}>{defaultValue}</option>

                {
                    options.map(option =>
                        <option key={option.value} value={option.value}>{option.name}</option>
                    )
                }

            </select>
        </div>
    );
};

export default MySelect;