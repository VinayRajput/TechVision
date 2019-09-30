import React from 'react';

class Product extends React.Component {

    constructor () {
        super();
        this.state = {
            id: 11,
            name: 'raman',
            gender: 'male',
            list: [],
            processedData: [],
            edit_index: -1,
            sortOrder: 1
        }
        this.frm_fetchData();
    }

    frm_fetchData = () => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(res => res.json())
            .then(data => this.setState({ list: data }))
    }

    filterData = () => {
        let keyword = this.refs.filterBy.value.toLocaleLowerCase();
        let list = this.state.list;
        if (keyword.length > 0) {
            let filtered = list.filter(item => item.title.toLocaleLowerCase().indexOf(keyword) !== -1);
            this.setState({ processedData: filtered });
        } else {
            this.setState({ processedData: [] });
        }
    }

    sortData = (keyword) => {
        keyword = keyword || this.refs.sortBy.value.toLocaleLowerCase();
        let sortOrder = this.state.sortOrder;
        this.setState({ sortOrder: (sortOrder * -1) });
        let list = this.state.processedData;
        let sorted = list.sort((a, b) => {
            if (isNaN(a[keyword])) {
                return a[keyword].localeCompare(b[keyword]) * sortOrder;
            } else {
                if (a[keyword] == b[keyword])
                    return 0;
                else if (a[keyword] > b[keyword])
                    return 1 * sortOrder;
                else
                    return -1 * sortOrder;
            }

        });
        this.setState({ processedData: sorted });
    }

    render () {
        return (<div className="container">
            <div className="table table-striped" id="fetchedDataList" ref="fetchedDataList">
                <br /><br /><br />
                <div className="row">
                    <div className="col-md-12 col-xs-12  col-sm-12">
                        <input type="text" className="form-control" ref="filterBy" onChange={this.filterData} placeholder="Type a letter" />
                    </div>
                </div>
                <hr />
                <div style={{ display: (this.state.processedData.length > 0 ? 'block' : 'none') }}>
                    <div className="row">
                        <div className="col-md-2 col-xs-2  col-sm-2"><button type="button" className="btn btn-default" onClick={() => { this.sortData('id') }}>ID</button> </div>
                        <div className="col-md-3 col-xs-3 col-sm-3"><button type="button" className="btn btn-default" onClick={() => { this.sortData('albumId') }}>Album ID </button></div>
                        <div className="col-md-5 col-xs-5 col-sm-5"><button className="btn btn-default" type="button" onClick={() => { this.sortData('title') }}>Title </button></div>
                    </div>
                    <hr />
                    {this.state.processedData.map((item, i) =>
                        <div className="row" key={i}>
                            <div className="col-md-2 col-xs-2 col-sm-2">{item.id} </div>
                            <div className="col-md-3 col-xs-3 col-sm-3"> <a href={item.url}><img src={item.thumbnailUrl} alt={item.title} className="img-responsive img-fluid img-thumbnail" /> </a></div>
                            <div className="col-md-5 col-xs-5 col-sm-5">  {item.title} </div>
                            {/* <div className="col-md-3">
                            <input type="button" value="Delete" onClick={() => this.frm_del(i)} />
                            <input type="button" value="Edit" onClick={() => this.frm_edit(i)} />
                            <input type="button" value="Mark" onClick={() => this.frm_check(i)} />
                        </div> */}
                        </div>
                    )}
                </div>
            </div>
        </div>)
    }
}

export default Product;