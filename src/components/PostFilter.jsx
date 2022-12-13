import React from 'react';
import MyInput from "./UI/inputs/MyInput";
import MySelect from "./UI/select/MySelect";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <MyInput
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
                placeholder={"Search..."}
            />

            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                defaultValue={"Sort by"}
                options={[
                    {value: 'title', name: 'Title'},
                    {value: 'body', name: 'Description'},
                ]}

            />
        </div>
    );
};

export default PostFilter;