import { ResponsiveLine } from '@nivo/line'
import data from './data'
import styled from "styled-components";

const MyResponsiveLine = () => {
console.log(data)
    return <Wrapper>
        <ResponsiveLine
        data={data}
        margin={{top: 50, right: 110, bottom: 50, left: 60}}
        xScale={{type: 'point'}}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 10,
            tickRotation: 0,
        }}
        axisLeft={{
            tickValues:[150000,300000,450000], // 가로 경계값 설정
            tickRotation: 0,
            legendOffset: -40,
            legendPosition: 'middle',
            ticks: 4
        }}
        pointSize={10}
        pointColor={{theme: 'background'}}
        pointBorderWidth={2}
        pointBorderColor={{from: 'serieColor'}}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 10,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    /></Wrapper>
}
export default MyResponsiveLine


export const Wrapper = styled.div`
  width: 413px;
  height: 291px;
`