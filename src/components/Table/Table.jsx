import Table1 from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Table.scss'
import { Avatar, AvatarGroup, Button } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

import xrp from '../../assets/xrp.png';
import btc from '../../assets/btc.png';
import eth from '../../assets/eth.png';
import tet from '../../assets/tet.png';
import enj from '../../assets/enj.png';

function createData(img, name, price, change, cap) {
    return { img, name, price, change, cap };
}

function Table() {
    const data = [
        createData(xrp, 'XRP', 0.5617, 1.57, 28),
        createData(btc, 'Bitcoin', 30165.43, -0.08, 582),
        createData(eth, 'Ethereum', 2215.50, -1.08, 267),
        createData(tet, 'Tether', 1.4544, 1.57, 28),
        createData(enj, 'Enjine Coin', 0.6129, 16.41, 629),
    ]

    return (
        <div className="table">
            <TableContainer style={{borderRadius: '20px'}} component={Paper}>
                <h2>Most Popular <span>Top Movers</span></h2>
                <hr className='table__hr' />
                <Table1 className='table__table1' sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <b>Asset</b>
                            </TableCell>
                            <TableCell align="left">
                                <b>Last Price</b>
                            </TableCell>
                            <TableCell align="left">
                                <b>24hr Change</b>
                            </TableCell>
                            <TableCell align="left">
                                <b>Market Cap</b>
                            </TableCell>
                            <TableCell align="left">

                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row, i) => (
                            <TableRow
                                key={i}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell className='table__row' component="th" scope="row">
                                    <img src={row.img} alt={row.img} />
                                    <b>{row.name}</b>
                                </TableCell>
                                <TableCell align="left">
                                    <b>${row.price.toLocaleString('de-DE')} <span>AUD</span></b>
                                </TableCell>
                                <TableCell align="left">
                                    <b style={row.change < 0 ? { color: '#F43F5E' } : { color: '#10B981' }}>{row.change}%</b>
                                </TableCell>
                                <TableCell align="left">
                                    <b>${row.cap}B</b>
                                </TableCell>
                                <TableCell align='left'>
                                    <Button variant="outlined" className='btn buyBtn'>buy</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table1>
                    <hr />
                <div className="table__avatar">
                    <AvatarGroup max={4}>
                        <Avatar alt="Remy Sharp" src={btc} />
                        <Avatar alt="Travis Howard" src={eth} />
                        <Avatar alt="Cindy Baker" src={tet} />
                        <Avatar alt="Cindy Baker" src={xrp} />
                    </AvatarGroup>
                    <b>View all markets </b>
                    <ArrowRightAltIcon className='icon' />
                </div>
            </TableContainer>
        </div>
    )
}

export default Table