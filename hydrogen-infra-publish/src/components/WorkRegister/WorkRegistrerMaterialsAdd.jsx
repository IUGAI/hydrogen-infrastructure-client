import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

function WorkRegistrerMaterialsAdd() {
    return (
        <table>
        <tr>
          <td style={{ width: "50%" }}>자재-1</td>
          <td style={{ textAlign: "center", color: "#5E76BA" }}>
            수량
          </td>
          <td style={{ textAlign: "center", width: "5%" }}>
            <FaMinus size={24} color="#5E76BA" />
          </td>
          <td
            style={{
              width: "20%",
              textAlign: "center",
            }}
          >
            2
          </td>
          <td style={{ textAlign: "center", width: "5%" }}>
            <FaPlus size={20} color="#5E76BA" />
          </td>
        </tr>
        <tr>
          <td style={{ width: "50%" }}>자재-2</td>
          <td style={{ textAlign: "center", color: "#5E76BA" }}>
            수량
          </td>
          <td style={{ textAlign: "center", width: "5%" }}>
            <FaMinus size={24} color="#5E76BA" />
          </td>
          <td
            style={{
              width: "20%",
              textAlign: "center",
            }}
          >
            4
          </td>
          <td style={{ textAlign: "center", width: "5%" }}>
            <FaPlus size={20} color="#5E76BA" />
          </td>
        </tr>
        <tr>
          <td style={{ width: "50%" }}>자재-3</td>
          <td style={{ textAlign: "center", color: "#5E76BA" }}>
            수량
          </td>
          <td style={{ textAlign: "center", width: "5%" }}>
            <FaMinus size={24} color="#5E76BA" />
          </td>
          <td
            style={{
              width: "20%",
              textAlign: "center",
            }}
          >
            10
          </td>
          <td style={{ textAlign: "center", width: "5%" }}>
            <FaPlus size={20} color="#5E76BA" />
          </td>
        </tr>
      </table>
    )
}

export default WorkRegistrerMaterialsAdd
