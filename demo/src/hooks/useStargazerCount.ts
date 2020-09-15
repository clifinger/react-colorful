import { useEffect, useState } from "react";

export const useStargazerCount = (): number => {
  const [count, setCount] = useState(300);

  useEffect(() => {
    fetch("https://api.github.com/repos/omgovich/react-colorful").then((result) => {
      result.json().then((data) => setCount(data.stargazers_count));
    });
  }, []);

  return count;
};
