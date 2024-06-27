import { VacationColors } from "@/enums";
import { ResponsivePie, PieTooltipProps } from "@nivo/pie";

interface IVacationPieProps {
  activeId: string;
  data: {
    id: string;
    label: string;
    value: number;
    color: VacationColors;
    stringValue: string,

  }[];
}

const VacationPie: React.FC<IVacationPieProps> = (props) => {
  const { activeId, data } = props;

  return (
    <ResponsivePie
      colors={(data) => {
        return data.data.color;
      }}
      data={data}
      margin={{ top: 10, bottom: 10 }}
      activeId={activeId || undefined}
      enableArcLabels={false}
      enableArcLinkLabels={false}
      innerRadius={0.85}
      padAngle={0}
      cornerRadius={0}
      activeOuterRadiusOffset={10}
      borderWidth={0}
      borderColor={{ from: "color" }}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsColor={{ from: "color" }}
      arcLabelsSkipAngle={10}
    />
  );
};

export default VacationPie;
