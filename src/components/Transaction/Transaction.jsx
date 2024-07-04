import css from "./Transaction.module.css";

const Transaction = (items) => {
    return (
        <>
        <table className={css.table}>
            <thead className={css.thead}>
                <tr>
                    <th className={css.th}>
                        Type
                    </th>
                    <th className={css.th}>
                        Amount
                    </th>
                    <th className={css.th}>
                        Currency
                    </th>
                </tr>
            </thead>

            <tbody>
                {items.map((item) => {
                    return (
                        <tr key={item.id} className={css.tr}>
                        <td className={css.tdType}>{item.type}</td>
                        <td className={css.td}>{item.amount}</td>
                        <td className={css.td}>{item.currency}</td>
                    </tr>
                    )
                })}
            </tbody>
        </table>
        </>
    )
}

export default Transaction;