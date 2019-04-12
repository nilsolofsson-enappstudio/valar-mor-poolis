const React = require('react'),
    EmployeeRow = require('../components/employee_row.jsx');

class EmployeeTable extends React.Component {
    render() {
        return (
            <div class="col-xs- col-lg-4 mb-5">
                <h2 class="got-text-slim my-3 white">{ this.props.title }</h2>
                <table class="table got-table">
                    <thead class="background-gold">
                        <tr class="color-white">
                            <th scope="col">Employee name</th>
                            <th scope="col">Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        <EmployeeRow name="Anton Estlund" points ="32"/>
                        <EmployeeRow name="Nils Olofsson" points ="24"/>
                        <EmployeeRow name="Ebba Dahlqvist" points ="22"/>
                    </tbody>
                </table>
            </div>
        );
    }
}

module.exports = EmployeeTable;
    