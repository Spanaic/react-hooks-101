import React, { useContext } from 'react'
import { OperationLogContext } from '../contexts/AppContext'
import OperationLog from './OperationLog'


const OperationLogs = () => {
  const { operationLogState } = useContext(OperationLogContext)


  return (
    <>
      <h4>操作ログ一覧</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>内容</th>
            <th>日時</th>
          </tr>
        </thead>
        <tbody>
          {
            // NOTE: mapを使う時はindexでユニークな値を持たせる！
            operationLogState.operationLogs.map((operationLog, index) => {
              // operationLogはpropsで渡してあげる
              return <OperationLog key={index} operationLog={operationLog} />
            })
          }
        </tbody>
      </table>
    </>
  )
}

export default OperationLogs
