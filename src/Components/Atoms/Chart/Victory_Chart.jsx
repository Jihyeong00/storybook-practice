import {VictoryAxis, VictoryChart, VictoryLine} from "victory";
import data from "./data";
import {Wrapper} from "./Nivo_Chart";

export const VictoryChartApp = () => {

    return <Wrapper style={{padding:'20px'}}>
        <VictoryChart domainPadding={20}
        >
            <VictoryAxis
                dependentAxis
                // tickFormat specifies how ticks should be displayed
                tickFormat={(x) => (`${x / 1000}k`)}
            />
            <VictoryLine data={data[0].data}/>
        </VictoryChart></Wrapper>
}
