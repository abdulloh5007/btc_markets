import Chart from "../../components/Chart/Chart"
import Find from "../../components/Find/Find"
import Header from "../../components/Header/Header"
import Start from "../../components/Start/Start"
import Table from "../../components/Table/Table"
import Trade from "../../components/Trade/Trade"
import Wallet from "../../components/Wallet/Wallet"
import Why from "../../components/Why/Why"

function Frame() {
  return (
    <div>
        <Header />
        <Table />
        <Why />
        <Trade />
        <Wallet />
        <Start />
        <Find />
        
        <Chart />
    </div>
  )
}

export default Frame