/// <reference path="crud.d.ts" />
import { RowID, RowElement }  from "./interface";
import * as CRUD from "../js/crud.js";

const row: RowElement =  {
    firstName: 'Guillaume',
    lastName: 'Salva',
}
const newRowID: RowID = CRUD.insertRow(row);
