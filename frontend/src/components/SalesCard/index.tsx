import NotifyButton from '../NotifyButton'
import './Styles.css'

function SalesCard() {
    return (
        <div className="dsmeta-container">
            <div className="dsmeta-card">
                <h2 className="dsmeta-sales-title">Vendas</h2>
                <div>
                    <div className="dsmeta-form-control-container">
                        <input className="dsmeta-form-control" type="text" />
                    </div>
                    <div className="dsmeta-form-control-container">
                        <input className="dsmeta-form-control" type="text" />
                    </div>
                </div>

                <div>
                    <table className="dsmeta-sales-table">
                        <thead>
                            <tr>
                                <th className="show992">ID</th>
                                <th className="show576">Data</th>
                                <th>Vendor</th>
                                <th className="show992">Visits</th>
                                <th className="show992">Sales</th>
                                <th>Total</th>
                                <th>Notify</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="show992">#341</td>
                                <td className="show576">08/07/2022</td>
                                <td>Anakin</td>
                                <td className="show992">20</td>
                                <td className="show992">18</td>
                                <td>$ 19000.00</td>
                                <td>
                                    <div className="dsmeta-red-btn-container">
                                        <NotifyButton />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="show992">#341</td>
                                <td className="show576">08/07/2022</td>
                                <td>Markus</td>
                                <td className="show992">20</td>
                                <td className="show992">19</td>
                                <td>$ 20000.00</td>
                                <td>
                                    <div className="dsmeta-red-btn-container">
                                        <NotifyButton />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="show992">#381</td>
                                <td className="show576">08/07/2022</td>
                                <td>Joseph</td>
                                <td className="show992">18</td>
                                <td className="show992">14</td>
                                <td>$ 15300.00</td>
                                <td>
                                    <div className="dsmeta-red-btn-container">
                                        <NotifyButton />

                                    </div>
                                </td>
                            </tr>
                        </tbody>

                    </table>
                </div>

            </div>
        </div >
    )
}
export default SalesCard