import "./Table.css";
import { IconTableWithHeadings } from "@codexteam/icons";

export class Table {
  tableHeading = [];

  NoOfRowsToDraw = 2;
  NoOfColsToDraw = 2;

  constructor(props) {
    if (!!props?.config?.heading?.length) {
      this.tableHeading = props?.config?.heading;
    }
    if (!!props?.config?.rows) {
      this.NoOfRowsToDraw = props?.config?.rows;
    }
    if (!!props?.config?.cols) {
      this.NoOfColsToDraw = props?.config?.cols;
    }
  }
  static get toolbox() {
    return {
      title: "Table",
      name: "Table",
      icon: IconTableWithHeadings,
    };
  }

  render() {
    return this.doDrawTable();
  }

  doDrawTable() {
    const divObj = document.createElement("div");
    divObj.contentEditable = "true";
    divObj.style = "outline: 0px solid transparent;";
    let table = document.createElement("table");
    let thead = document.createElement("thead");
    let tbody = document.createElement("tbody");
    thead.classList = "table-head";
    table.appendChild(thead);
    table.appendChild(tbody);
    if (this.tableHeading?.length > 0) {
      const currentRow = document.createElement("tr");
      for (let i = 0; i < this.tableHeading?.length; i++) {
        const RowHeader = document.createElement("th");
        RowHeader.innerHTML = this.tableHeading[i];
        currentRow.appendChild(RowHeader);
      }
      thead.appendChild(currentRow);
    }

    this.doAppendEmptyRows(this.NoOfColsToDraw, this.NoOfRowsToDraw, tbody);
    divObj.append(table);
    return divObj;
  }

  doAppendEmptyRows(colsCount, rowsCount, tbody) {
    for (let i = 0; i < rowsCount; i++) {
      const rows = document.createElement("tr");
      for (let j = 0; j < colsCount; j++) {
        const column = document.createElement("td");
        column.classList = "table-row";
        rows.appendChild(column);
      }
      tbody.appendChild(rows);
    }
  }
}
