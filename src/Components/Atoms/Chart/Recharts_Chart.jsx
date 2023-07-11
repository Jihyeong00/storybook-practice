import {CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis} from "recharts";
import data from "./data";
import {Wrapper} from "./Nivo_Chart";

const Recharts_Chart = () => {
    console.log(data[0].data)
    return <Wrapper>
        <LineChart width={600} height={300} data={data[0].data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <Line type="monotone" dataKey="y" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="x" />
            <YAxis />
            <Tooltip />
        </LineChart>
    </Wrapper>
}

export default Recharts_Chart