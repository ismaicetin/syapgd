import * as React from "react";
export type ItemType = { name: string, mailReceivedDate: string, solutionSentDate?: string, isBackgroundColorRed?: boolean }
interface Props {
    source: ItemType[]
}
const Grid: React.FC<Props> = ({ source }) => {
    let content = source?.map((item: ItemType, index: number) => {
        let itemStyle = item?.isBackgroundColorRed ? { backgroundColor: "red" } : {}
        return (
            <tr key={index} style={itemStyle}>
                <td>{item?.name}</td>
                <td>{item?.mailReceivedDate}</td>
                <td>{item?.solutionSentDate}</td>
            </tr>
        );
    });
    return (
        <table>
            <tbody>
                {content}
            </tbody>
        </table>
    );
}



export default Grid