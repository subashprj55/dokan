const DataTable = ({ columns, data }: any) => {
  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full">
        <thead>
          <tr className="bg-gray-200">
            {columns.map((column: any, index: any) => (
              <th key={index} className="px-4 py-2">
                {column.Header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row: any, rowIndex: any) => (
            <tr
              key={rowIndex}
              className={rowIndex % 2 === 0 ? 'bg-gray-100' : 'bg-white'}
            >
              {columns.map((column: any, colIndex: any) => (
                <td key={colIndex} className="border px-4 py-2">
                  {row[column.accessor]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
export default DataTable
