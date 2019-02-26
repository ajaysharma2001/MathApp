import React, { Component } from 'react';
import ReactTable from "react-table";
import 'react-table/react-table.css'
import { ReactTableDefaults } from "react-table";

class Tables extends Component {

    getData(length, width) {
        var data = [];
        for (var i = 0; i <= this.maxCutout(length, width); i += this.maxCutout(length, width) / 10) {
            let point = { 'x': i, 'f(x)': (length - 2 * i) * (width - 2 * i) * i, "f '(x)": (12 * i * i) + (-4 * width - 4 * length) * i + length * width, "f ''(x)": 4 * (6 * i - width - length) };
            data.push(point);
        }
        return data
    }

    getColumn(primeOn, doublePrimeOn) {
        var col = [{
            Header: 'x',
            accessor: 'x',
            width: 50
        }, {
            Header: 'f(x)',
            accessor: 'f(x)',
            width: this.getColumnWidth(this.props.showFirstDerivitive, this.props.showSecondDerivitive)
        }];
        if (primeOn) {
            col.push(
                {
                    Header: "f '(x)",
                    accessor: "f '(x)",
                    width: this.getColumnWidth(this.props.showFirstDerivitive, this.props.showSecondDerivitive)
                }
            );
        }
        if (doublePrimeOn) {
            col.push(
                {
                    Header: "f ''(x)",
                    accessor: "f ''(x)",
                    width: this.getColumnWidth(this.props.showFirstDerivitive, this.props.showSecondDerivitive)
                }
            );
        }
        return col;
    }

    getColumnWidth(primeOn, doublePrimeOn) {
        if(!primeOn && !doublePrimeOn) {
            return window.innerWidth / 2.5
        }
        if((!primeOn && doublePrimeOn) || (primeOn && !doublePrimeOn)) {
            return window.innerWidth / 5
        }
        return window.innerWidth / 7.5
    }

    maxCutout(length, width) {
        if (length > width) {
            return width / 2;
        }
        else {
            return length / 2;
        }
    }

    render() {
        Object.assign(ReactTableDefaults, {
            defaultPageSize: 11,
            minRows: 11,
            showPagination: false,
        });
        return (
            <div style={col}>
                <ReactTable
                    columns={this.getColumn(this.props.showFirstDerivitive, this.props.showSecondDerivitive)}
                    data={this.getData(this.props.length, this.props.width)}
                ></ReactTable>
            </div>
            /*
            <div style={rowStyle}>
                <div style={col}>
                    <ReactTable
                        columns={columns}
                        data={this.getData(this.props.length, this.props.width)}
                    ></ReactTable>
                </div>
                <div style={this.hidePrime(this.props.showFirstDerivitive)}>
                    <ReactTable
                        columns={columnsPrime}
                        data={this.getDataPrime(this.props.length, this.props.width)}
                    ></ReactTable>
                </div>
                <div style={this.hideDoublePrime(this.props.showSecondDerivitive)}>
                    <ReactTable
                        columns={columnsDoublePrime}
                        data={this.getDataDoublePrime(this.props.length, this.props.width)}
                    ></ReactTable>
                </div>

            </div>
            */
        );
    }
}

export default Tables;

const col = {
    width: '50%',
    marginTop: '20px',
    marginBottom: '20px',
    marginLeft: '10px',
    marginRight: '10px',
    display: 'flex',
    justifyContent: 'center',
}