import { useLocation } from 'react-router-dom';

const useUrlHash = () => {
  const { hash } = useLocation();
  if (!hash) {
    return {};
  }
  return Object.fromEntries(
    hash
      .replace('#', '')
      .split('&')
      .map((item) => [item.split('=')[0], item.split('=')[1]])
  );
};

export default useUrlHash;
