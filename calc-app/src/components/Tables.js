import React, { Component } from 'react';
import ReactTable from "react-table";
import 'react-table/react-table.css'
import { ReactTableDefaults } from "react-table";

class Tables extends Component {

    getData(length, width) {
        var data = [];
        for (var i = 0; i <= this.maxCutout(length, width); i += this.maxCutout(length, width) / 10) {
            let point = { 'x': i, 'f(x)': (length - 2 * i) * (width - 2 * i) * i };
            data.push(point);
        }
        return data
    }
    getDataPrime(length, width) {
        var data = [];
        for (var i = 0; i <= this.maxCutout(length, width); i += this.maxCutout(length, width) / 10) {
            let point = { 'x': i, "f '(x)": (12 * i * i) + (-4 * width - 4 * length) * i + length * width };
            data.push(point);
        }
        return data
    }
    getDataDoublePrime(length, width) {
        var data = [];
        for (var i = 0; i <= this.maxCutout(length, width); i += this.maxCutout(length, width) / 10) {
            let point = { 'x': i, "f ''(x)": 4 * (6 * i - width - length) };
            data.push(point);
        }
        return data
    }
    hidePrime(primeOn) {
        if (!primeOn) {
            return hide
        }
        return col
    }
    hideDoublePrime(doublePrimeOn) {
        if (!doublePrimeOn) {
            return hide
        }
        return col
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
            showPagination: false
        });

        const columns = [{
            Header: 'x',
            accessor: 'x'
        }, {
            Header: 'f(x)',
            accessor: 'f(x)'
        }]
        const columnsPrime = [{
            Header: 'x',
            accessor: 'x'
        }, {
            Header: "f '(x)",
            accessor: "f '(x)"
        }]
        const columnsDoublePrime = [{
            Header: 'x',
            accessor: 'x'
        }, {
            Header: "f ''(x)",
            accessor: "f ''(x)"
        }]
        return (
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
        );
    }
}

export default Tables;

const rowStyle = {
    display: 'flex',
    flexDirection: 'row'
}

const col = {
    textAlign: 'center',
    width: '50%',
    marginTop: '20px',
    marginBottom: '20px',
    marginLeft: '10px',
    marginRight: '10px',
    display: 'flex',
    justifyContent: 'center',
}

const hide = {
    display: 'none'
}