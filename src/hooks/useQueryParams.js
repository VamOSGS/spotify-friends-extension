import { useLocation } from 'react-router-dom';

const useQueryParams = () => {
  const param = `?${useLocation().search.split('?')[1]}`;
  return new URLSearchParams(param);
};

export default useQueryParams;
