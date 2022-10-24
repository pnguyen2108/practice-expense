import { ExpenseItemModel } from "../../../models/ExpenseItem.model";
import { ExpenseItem } from "../ExpenseItem/ExpenseItem.component";
import { ExpensesStyle } from "./Expenses.styles";

type Props = {
    expenseItemList: ExpenseItemModel[];
};



export const Expenses = ({ ...props }: Props) => {
    return (
        <ExpensesStyle>
            {
                props.expenseItemList.length > 0 ?
                    props.expenseItemList.map((item, index) => <ExpenseItem key={index} {...item} />) : 'List is empty'
            }
        </ExpensesStyle>
    );
};