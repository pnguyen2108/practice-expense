import { ExpenseItemModel } from "../../../models/ExpenseItem.model";
import { GetDate } from "../../GetDate/GetDate.component";
import { ExItem } from "./ExpenseItem.styles";
import { memo } from "react";

export const ExpenseItem = memo(({ ...props }: ExpenseItemModel) => {

    return (
        <ExItem>
            <div className="expense__item--date">
                <GetDate className="expense__item--month" dateValue={props.addedDate} dateFormat="MMMM" />
                <GetDate className="expense__item--year" dateValue={props.addedDate} dateFormat="YYYY" />
                <GetDate className="expense__item--day" dateValue={props.addedDate} dateFormat="DD" />
            </div>
            <div className="expense__item--description">
                <h2>{props.name}</h2>
                <div className="expense__item--price">${(+props.price).toFixed(2)}</div>
            </div>
        </ExItem>
    );
});