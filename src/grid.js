// Import default ag-grid styles
require("ag-grid/src/styles/ag-grid.scss");

require('./styles.scss');

var Grid = require('ag-grid').Grid;
require('ag-grid-enterprise');

// create cols, one for each letter
var columnDefs = [];
'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').forEach( function(letter) {
    columnDefs.push({field: letter});
});

// create 100 rows, and fill with random numbers
var rowData = [];
for (var i = 0; i<100; i++) {
    var item = {};
    columnDefs.forEach( function(colDef) {
        item[colDef.field] = Math.floor(Math.random() * 100000);
    });
    rowData.push(item);
}

var gridOptions = {

    // we do not hide the menu icons, so easier to see any style changes that impact the icons
    suppressMenuHide: true,

    defaultColDef: {
        // make all cols more narrow
        width: 100,
        filter: 'number'
    },

    // enable these, so they can be demonstrated
    enableSorting: true,
    enableFilter: true,
    enableStatusBar: true,
    enableRangeSelection: true,

    suppressMenuHide: true,
    enableColResize: true,

    columnDefs: columnDefs,
    rowData: rowData
};

new Grid(document.querySelector('#myGrid'), gridOptions);