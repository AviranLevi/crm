import React, { Component } from 'react';

class FilterPages extends Component { // Better naming: FilterBar, Separate into 2 more components
    render() {
        let filterData = Math.floor(this.props.filterData.length / 20)

        return (
            <div id="filter">
                <input name="text" onChange={this.props.inputChange} value={this.props.inputText} placeholder="Search"></input>
                <select name="searchCategory" value={this.props.searchCategory} className="dropdown-filter" onChange={this.props.inputChange}>
                    <option value="name">Name</option>
                    <option value="surname">Surname</option>
                    <option value="country">Country</option>
                    <option value="owner">Owner</option>
                </select>
                <div></div>

                <div id="pages">
                    <span id="prev-page" onClick={this.props.generatePreviousPage}><i className="fas fa-backward"></i></span>
                    <span> {this.props.currentPage}</span>
                    <span> - </span>
                    <span>{filterData} </span>
                    <span id="next-page" onClick={this.props.generateNextPage}><i className="fas fa-forward"></i></span>
                </div>

            </div>
        )
    }
}

export default FilterPages