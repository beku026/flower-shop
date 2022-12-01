import React from 'react';
import { ICategoriesV2 } from '../../../redux/types/product';
type Props = {
  data?: ICategoriesV2;
};
const Sidebar: React.FC<Props> = ({ data }) => {
  return <>{data?.title && data.title}</>;
};

export default Sidebar;
