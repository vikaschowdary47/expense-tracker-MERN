import React from 'react'

export function TransactionList() {
    return (
        <div>
            <h3>History</h3>
            <ul className="list">
                <li className="minus">
                    Cash <span>-Rs400</span>
                    <button className="btn-danger btn">delete</button>
                </li>
            </ul>
        </div>
    )
}
