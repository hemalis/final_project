const tableData = () => {
    const searchData = [];
    const tableEl = document.getElementById('portexe-data-table');
    Array.from(tableEl.children[1].children).forEach(_bodyRowEL => {
        searchData.push(Array.from(_bodyRowEL.children).map(_cellEl => {
            return _cellEl.innerHTML;
        }));
    })
    return searchData;
}

const search = (arr, searchTerm) => {
    if(!searchTerm) return arr;
    return arr.filter(_row => {
        return _row.find(_item => _item.toLowerCase().includes(searchTerm.toLowerCase()));
    });
}

const refreshTable = (data) => {
    const tableBody = document.getElementById('portexe-data-table').children[1];
    tableBody.innerHTML = '';

    data.forEach(_row => {
        const curRow = document.createElement('tr');
        _row.forEach(_dataItem => {
            const curCell = document.createElement('td');
            curCell.innerText = _dataItem;
            curRow.appendChild(curCell);
        });
        tableBody.appendChild(curRow);
    });
}

const createSearchInputElement = () => {
    const el = document.createElement('input');
    el.classList.add('portexe-search-input');
    el.id = 'portexe-search-input';
    return el;
}

const inti = () => {
    document.getElementById('portexe-search-root').appendChild(createSearchInputElement());

    const initialTableData = tableData();

    const searchInput = document.getElementById('portexe-search-input');
    searchInput.addEventListener('keyup', (e) => {
        refreshTable(search(initialTableData, e.target.value));
    });
}

inti();