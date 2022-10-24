import { useState } from "react";
import { FormControl, InputAdornment } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { CustomTextField, CustomOutlinedInput, CustomInputLabel, ErrorText } from "../ExpenseItemCreate/ExpenseItemCreate.styles";
import moment from "moment";
import { ExItemCreateStyle, ExItemCreateFormsStyle } from "./ExpenseItemCreate.styles";
import { ExpenseItemModel } from "../../../models/ExpenseItem.model";

interface Props {
    returnNewExpense: (data: ExpenseItemModel) => void;
};

const defaultValues = {
    name: '',
    price: 0,
    addedDate: moment().format("YYYY-MM-DD")
};

const lengthCheck = (el: string, minLength: number, maxLength: number): boolean => {
    return (el.length >= minLength && el.length <= maxLength);
};

export const ExpenseItemCreate = ({ ...props }: Props) => {
    const { control, handleSubmit, formState: { errors }, reset } = useForm<ExpenseItemModel>({ defaultValues });
    const [addNewExItem, setAddNewExItem] = useState<boolean>(false);

    const onClickAddNewExpense = (): void => {
        setAddNewExItem(!addNewExItem);
    };

    const onSubmitForm = (data: ExpenseItemModel) => {
        props.returnNewExpense(data);
        reset();
        onClickAddNewExpense();
    };

    return (
        <ExItemCreateStyle>
            {
                !addNewExItem ?
                    <button className="button__form" onClick={onClickAddNewExpense}>Add New Expense</button>
                    :
                    <form onSubmit={handleSubmit(onSubmitForm)}>
                        <ExItemCreateFormsStyle maxWidth='sm'>
                            <FormControl fullWidth sx={{ m: 1 }}>
                                <Controller
                                    name="name"
                                    control={control}
                                    rules={{
                                        required: "Name is required",
                                        validate: {
                                            lengthCheck: value => lengthCheck(value, 3, 20) || "Name should be between 3 and 10 characters long"
                                        }
                                    }}
                                    render={({ field }) =>
                                        <CustomTextField
                                            error={errors.name?.message ? true : false}
                                            {...field}
                                            InputLabelProps={{ shrink: true }}
                                            inputProps={{
                                                maxLength: 20
                                            }}
                                            autoFocus
                                            label="Name" />
                                    }
                                />

                                <ErrorText variant="caption" color="error.main">
                                    {errors.name?.message}
                                </ErrorText>
                            </FormControl>


                            <FormControl fullWidth sx={{ m: 1 }}>
                                <CustomInputLabel
                                    error={errors.price?.message ? true : false}
                                    htmlFor="price">Price*
                                </CustomInputLabel>

                                <Controller
                                    name="price"
                                    control={control}
                                    rules={{
                                        min: { value: 1, message: 'Price must be greater than zero' }
                                    }}
                                    render={({ field }) =>
                                        <CustomOutlinedInput
                                            {...field}
                                            error={errors.price?.message ? true : false}
                                            id="price"
                                            type="number"
                                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                            inputProps={{
                                                inputMode: 'numeric',
                                                step: '0.1'
                                            }}
                                            label="Amount"
                                        />
                                    }
                                />

                                <ErrorText variant="caption" color="error.main">
                                    {errors.price?.message}
                                </ErrorText>
                            </FormControl>

                            <FormControl fullWidth sx={{ m: 1 }}>
                                <Controller
                                    name="addedDate"
                                    control={control}
                                    render={({ field }) =>
                                        <CustomTextField
                                            InputLabelProps={{ shrink: true }}
                                            {...field}
                                            type='date'
                                            label="Date" />
                                    }
                                />

                            </FormControl>
                        </ExItemCreateFormsStyle>


                        <div className="expense__item--controls">
                            <button className="button__form" onClick={onClickAddNewExpense}>Cancel</button>
                            <button className="button__form" type="submit">Add Expense</button>
                        </div>
                    </form>
            }

        </ExItemCreateStyle>
    );
};
