import useFetch from 'react-fetch-hook';

const useFetchMessage = <T>(url: string, content: T, depends: boolean[]) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(content),
  };

  return useFetch(url, { ...options, depends });
};

export default useFetchMessage;
