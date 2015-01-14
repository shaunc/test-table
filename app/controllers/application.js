import Ember from 'ember';
import ColumnDefinition from 'ember-cli-ember-table/components/ember-table';

export default Ember.Controller.extend({

  content: _.range(0,100).map( function(i) { 
    return _.range(0,100);
  }),
  columns: _.range(0,100).map(function(i){
      return ColumnDefinition.create({
        header: '' + i,
        headerCellViewClass: 'header-cell',
        tableCellViewClass: 'table-cell',
        getCellContent: (function(i){return function(row){return row.content[i];}})(i)
      });
    })
});
