import moment from "moment";


export interface dateData {
    dateValue: string;
    dateFormat: string;
    className?: string;
}


export const GetDate = ({ ...props }: dateData) => {
    return (
        <div className={props.className ?? ''}>
            {moment(props.dateValue).format(props.dateFormat)}
        </div>
    );
};