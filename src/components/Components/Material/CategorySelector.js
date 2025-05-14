import React from 'react';
import { Select, Tag } from 'antd';

const tagRender = props => {
  const { label, value, closable, onClose } = props;
  const onPreventMouseDown = event => {
    event.preventDefault();
    event.stopPropagation();
  };
  return (
    <Tag
      color={value}
      onMouseDown={onPreventMouseDown}
      closable={closable}
      onClose={onClose}
      style={{ marginInlineEnd: 4 }}
    >
      {label}
    </Tag>
  );
};
const CategorySelector = ({datasource}) => (
  <Select
    mode="multiple"
    tagRender={tagRender}
    defaultValue={[datasource[0].value]}
    placeholder="Бүгд"
    style={{ width: '100%' }}
    options={datasource}
  />
);
export default CategorySelector;