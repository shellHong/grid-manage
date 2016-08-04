function CellRenderer(e){this.init(e)}function EnumCellRenderer(e){this.init(e)}function NumberCellRenderer(e){this.init(e)}function CheckboxCellRenderer(e){this.init(e)}function EmailCellRenderer(e){this.init(e)}function WebsiteCellRenderer(e){this.init(e)}function DateCellRenderer(e){this.init(e)}function SortHeaderRenderer(e,t){this.columnName=e,this.cellRenderer=t}CellRenderer.prototype.init=function(e){for(var t in e)this[t]=e[t]},CellRenderer.prototype._render=function(e,t,r,n){for(r.rowIndex=e,r.columnIndex=t;r.hasChildNodes();)r.removeChild(r.firstChild);return r.isEditing=!1,this.column.isNumerical()&&EditableGrid.prototype.addClassName(r,"number"),"boolean"==this.column.datatype&&EditableGrid.prototype.addClassName(r,"boolean"),EditableGrid.prototype.addClassName(r,"editablegrid-"+this.column.name),r.setAttribute("data-title",this.column.label),this.render(r,"string"==typeof n&&"html"!=this.column.datatype?null===n?null:htmlspecialchars(n,"ENT_NOQUOTES").replace(/  /g," &nbsp;"):n)},CellRenderer.prototype.render=function(e,t,r){var n=r&&"string"==typeof t&&"html"!=this.column.datatype?null===t?null:htmlspecialchars(t,"ENT_NOQUOTES").replace(/  /g," &nbsp;"):t;e.innerHTML=n?n:""},CellRenderer.prototype.getDisplayValue=function(e,t){return t},EnumCellRenderer.prototype=new CellRenderer,EnumCellRenderer.prototype.getLabel=function(e,t){var r=null;if("undefined"!=typeof t){t=t?t:"";var n=this.column.getOptionValuesForRender(e);if(n&&t in n&&(r=n[t]),null===r){var i="number"==typeof t&&isNaN(t);r=i?"":t}}return r?r:""},EnumCellRenderer.prototype.render=function(e,t){var r=this.getLabel(e.rowIndex,t);e.innerHTML=r?"html"!=this.column.datatype?htmlspecialchars(r,"ENT_NOQUOTES").replace(/\s\s/g,"&nbsp; "):r:""},EnumCellRenderer.prototype.getDisplayValue=function(e,t){return null===t?null:this.getLabel(e,t)},NumberCellRenderer.prototype=new CellRenderer,NumberCellRenderer.prototype.render=function(e,t){var r=this.column||{},n=null===t||"number"==typeof t&&isNaN(t),i=n?r.nansymbol||"":t;"number"==typeof i&&(null!==r.precision&&(i=number_format(i,r.precision,r.decimal_point,r.thousands_separator)),null!==r.unit&&(i=r.unit_before_number?r.unit+" "+i:i+" "+r.unit)),e.innerHTML=i,n?EditableGrid.prototype.addClassName(e,"nan"):EditableGrid.prototype.removeClassName(e,"nan")},CheckboxCellRenderer.prototype=new CellRenderer,CheckboxCellRenderer.prototype._render=function(e,t,r,n){if(r.firstChild&&("function"!=typeof r.firstChild.getAttribute||"checkbox"!=r.firstChild.getAttribute("type")))for(;r.hasChildNodes();)r.removeChild(r.firstChild);return r.rowIndex=e,r.columnIndex=t,EditableGrid.prototype.addClassName(r,"editablegrid-"+this.column.name),r.setAttribute("data-title",this.column.label),this.render(r,n)},CheckboxCellRenderer.prototype.render=function(e,t){if(t=!(!t||0==t||"false"==t),e.firstChild)return void(e.firstChild.checked=t);var r=document.createElement("input");r.setAttribute("type","checkbox"),r.element=e,r.cellrenderer=this;var n=new CellEditor;n.editablegrid=this.editablegrid,n.column=this.column,r.onclick=function(t){e.rowIndex=this.cellrenderer.editablegrid.getRowIndex(e.parentNode),e.isEditing=!0,n.applyEditing(e,!!r.checked)},e.appendChild(r),r.checked=t,r.disabled=!this.column.editable||!this.editablegrid.isEditable(e.rowIndex,e.columnIndex),EditableGrid.prototype.addClassName(e,"boolean")},EmailCellRenderer.prototype=new CellRenderer,EmailCellRenderer.prototype.render=function(e,t){e.innerHTML=t?"<a href='mailto:"+t+"'>"+t+"</a>":""},WebsiteCellRenderer.prototype=new CellRenderer,WebsiteCellRenderer.prototype.render=function(e,t){e.innerHTML=t?"<a href='"+(t.indexOf("//")==-1?"http://"+t:t)+"'>"+t+"</a>":""},DateCellRenderer.prototype=new CellRenderer,DateCellRenderer.prototype.render=function(e,t){var r=this.editablegrid.checkDate(t);"object"==typeof r?e.innerHTML=r.formattedDate:e.innerHTML=t?t:"",e.style.whiteSpace="nowrap"},SortHeaderRenderer.prototype=new CellRenderer,SortHeaderRenderer.prototype.render=function(e,t){if(t){var r=document.createElement("a");e.appendChild(r),r.columnName=this.columnName,r.style.cursor="pointer",r.innerHTML=t,r.editablegrid=this.editablegrid,r.renderer=this,r.onclick=function(){return;var e,t,r},this.editablegrid.sortedColumnName==this.columnName&&(e.appendChild(document.createTextNode(" ")),e.appendChild(this.editablegrid.sortDescending?this.editablegrid.sortDownElement:this.editablegrid.sortUpElement)),this.cellRenderer&&this.cellRenderer.render(e,t)}else this.cellRenderer&&this.cellRenderer.render(e,t)};