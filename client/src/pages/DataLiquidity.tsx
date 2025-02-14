import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// Sample data - replace this with your actual data
const data = [
  { date: '2024-01', liquidity: 4000 },
  { date: '2024-02', liquidity: 3000 },
  { date: '2024-03', liquidity: 5000 },
  { date: '2024-04', liquidity: 2780 },
  { date: '2024-05', liquidity: 1890 },
  { date: '2024-06', liquidity: 2390 },
];

const DataLiquidity = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Data Liquidity Dashboard</h1>
      <div className="bg-white p-4 rounded-lg shadow">
        <LineChart width={800} height={400} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line 
            type="monotone" 
            dataKey="liquidity" 
            stroke="#8884d8" 
            name="Liquidity"
          />
        </LineChart>
      </div>
    </div>
  )
}

export default DataLiquidity