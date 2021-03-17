const moment = require ('moment');
var helpers = require('handlebars-helpers')();
var util = require('handlebars-utils');
var utils = require('../node_modules/handlebars-utils');



module.exports = {
    formatDate: function (date, format) {
        return moment(date).format(format)
    },

    formatDate2: function (d) {
        return moment(d).format("DD MMMM YYYY")
    },

    ifCond : function (v1, operator, v2, options) { 
        switch (operator) {
            case '==':
                return (v1 == v2) ? options.fn(this) : options.inverse(this);
            case '===':
                return (v1 === v2) ? options.fn(this) : options.inverse(this);
            case '!==':
                return (v1 !== v2) ? options.fn(this) : options.inverse(this);
            case '<':
                return (v1 < v2) ? options.fn(this) : options.inverse(this);
            case '<=':
                return (v1 <= v2) ? options.fn(this) : options.inverse(this);
            case '>':
                return (v1 > v2) ? options.fn(this) : options.inverse(this);
            case '>=':
                return (v1 >= v2) ? options.fn(this) : options.inverse(this);
            case '&&':
                return (v1 && v2) ? options.fn(this) : options.inverse(this);
            case '||':
                return (v1 || v2) ? options.fn(this) : options.inverse(this);
            default:
                return options.inverse(this);
        }
    },

        forEach : function(array, options) {
        var data = utils.createFrame(options, options.hash);
        var len = array.length;
        var buffer = '';
        var i = -1;
      
        while (++i < len) {
          var item = array[i];
          data.index = i;
          item.index = i + 1;
          item.total = len;
          item.isFirst = i === 0;
          item.isLast = i === (len - 1);
          buffer += options.fn(item, {data: data});
        }
        return buffer;
      },
      stripTags: function (input){
        return input.replace(/<(?:.|\n)*?>/gm, '')
    },

    }



