import { useEffect, useState } from "react";
import { getData } from "services/api";
import { IData } from "interfaces/types";

export const useData: {} = () => {
  const [data, setData] = useState<IData>([] as never);

  useEffect(() => {
    getData().then((res) =>
      setTimeout(() => {
        setData(res.data);
      }, 500)
    );
  }, []);

  return {
    data,
  };
};
