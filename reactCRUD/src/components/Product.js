import React from 'react';

class Product extends React.Component {

    constructor () {
        super();
        this.state = {
            id: 11,
            name: 'raman',
            gender: 'male',
            list: [
                { id: 1, pname: 'Dove', price: '45' },
                { id: 2, pname: 'Fortune', price: '55' },
                { id: 5, pname: 'Tshirt', price: '399' },
                { id: 6, pname: 'Tablet', price: '4000' },
                { id: 3, pname: 'Computer', price: '55' },
                { id: 7, pname: 'Table', price: '555' },
                { id: 4, pname: 'Comb', price: '12' },
                { id: 8, pname: 'Shirt', price: '855' }
            ],
            fetchedData: [],
            edit_index: -1
        }
    }

    frm_fetchData = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => this.setState({ fetchedData: data }))
    }

    frm_add = () => {
        var pname = this.refs.pname.value;
        var price = this.refs.price.value;

        var list = this.state.list; //read / assign the state variable to local variable 
        list.push({ pname: pname, price: price, ismark: false });

        //list.setState({list:list}) //update state 
        this.setState({ list }) //update state 

        console.log(pname + " " + price)
        console.log(this.state.list);

        this.refs.pname.value = "";
        this.refs.price.value = "";

    }
    frm_del = (i) => {
        var list = this.state.list; //read / assign the state variable to local variable 
        list.splice(i, 1);//remove the item 

        //list.setState({list:list}) //update state 
        this.setState({ list }) //update state 
    }
    frm_edit = (i) => {
        var list = this.state.list; //read / assign the state variable to local variable 
        this.setState({ edit_index: i });
        this.refs.pname.value = list[i].pname;
        this.refs.price.value = list[i].price;
    }

    frm_update = () => {
        var list = this.state.list; //read / assign the state variable to local variable 
        var ind = this.state.edit_index;

        var pname = this.refs.pname.value;
        var price = this.refs.price.value;

        list[ind].pname = pname;
        list[ind].price = price;

        this.setState({ list, edit_index: -1 });
        this.refs.pname.value = "";
        this.refs.price.value = "";
    }
    frm_check = (i) => {
        var list = this.state.list; //read / assign the state variable to local variable 
        list[i].ismark = !list[i].ismark;
    }
    frm_mark_del = () => {
        var list = this.state.list.filter(r => r.ismark === false);
        this.setState({ list });
    }

    filterData = () => {
        let keyword = this.refs.filterBy.value.toLocaleLowerCase();
        let list = this.state.list;
        if (!this.state.oldlist)
            this.setState({ oldlist: list });

        if (keyword.length > 2) {
            let filtered = list.filter(item => item.pname.toLocaleLowerCase().indexOf(keyword) !== -1);
            this.setState({ list: filtered });
        } else if (this.state.oldlist) {
            let list = this.state.oldlist;
            this.setState({ list });
        }
    }

    sortData = () => {
        let keyword = this.refs.sortBy.value.toLocaleLowerCase();
        let list = this.state.list;
        let sorted;
        if (!this.state.oldlist)
            this.setState({ oldlist: list });

        if (keyword.length > 1) {
            sorted = list.sort((a, b) => {
                if (isNaN(a[keyword])) {
                    return a[keyword].localeCompare(b[keyword]);
                } else {
                    return parseInt(a[keyword]) > parseInt(b[keyword]);
                }
            });

            this.setState({ list: sorted });
        } else if (this.state.oldlist) {
            let list = this.state.oldlist;
            this.setState({ list });
        }
    }

    render () {
        return (<div className="container">
            <hr />
            Data fetched from :
                <hr />

            <hr />
            <div className="table table-striped" id="oldProductsList" ref="oldProductsList" style={{display: (this.state.processedData.length>0 ? 'block':'none')}}>
                <div className="row">
                    <div className="col-md-4">
                        Filter By: <input type="text" ref="filterBy" onChange={this.filterData} />
                    </div>
                    <div className="col-md-4">
                        Sort By: <input type="text" ref="sortBy" /> <input type="button" value="Asc" /> <button type="button" onClick={this.sortData} >Sort</button>
                    </div>

                </div>

                <div className="row" >
                    <div className="col-md-2">Id </div>
                    <div className="col-md-2">Name </div>
                    <div className="col-md-5">Price </div>
                    <div className="col-md-3">Actions</div>
                </div>
                {this.state.list.map((item, i) =>
                    <div className="row" key={i}>
                        <div className="col-md-1">{item.id} </div>
                        <div className="col-md-2"> {item.pname} </div>
                        <div className="col-md-5">  {item.price} </div>
                        <div className="col-md-4">
                            <input type="button" value="Delete" onClick={() => this.frm_del(i)} />
                            <input type="button" value="Edit" onClick={() => this.frm_edit(i)} />
                            <input type="button" value="Mark" onClick={() => this.frm_check(i)} />
                        </div>
                    </div>
                )}
            </div>
        </div>)
    }
}

export default Product;