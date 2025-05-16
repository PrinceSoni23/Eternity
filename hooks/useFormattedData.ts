import { useSelector } from "react-redux";
import { useMemo } from "react";
import { formatLabel } from "@/utilities/formatLabel";

export function useFormattedData(rawData: any[], dataKey: string) {
  const filter = useSelector((state: any) => state.filter);

  const formatted = useMemo(() => {
    return rawData?.map(item => ({
      label: formatLabel(item?.dateTime, filter),
      data: item?.[dataKey],
    }));
  }, [rawData, filter]);

  return formatted;
}
