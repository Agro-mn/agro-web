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
const CatSelector = ({ datasource, value, setValue }) => (
  <Select
    style={{ minWidth: '30%' }}
    size='large'
    mode="multiple"
    tagRender={tagRender}
    value={value}
    placeholder="Бүгд"
    options={datasource}
    onChange={setValue}
  />
);
export default CatSelector;