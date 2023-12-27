import { toast } from "react-toastify";
import { useGetCaptainsQuery } from "../../redux/slices/captainsApiSlice";
import Button from "../common/Button";
import CustomSelect from "../common/CustomSelect";
import { useState } from "react";
import { useGetSectorsQuery } from "../../redux/slices/sectorApiSlice";

export default function AssignSector() {
  const [chosenCaptainId, setChosenCaptainId] = useState("");
  const [chosenSectorFullName, setChosenSectorFullName] = useState("");

  let {
    data: captains,
    isFetching: isFetchingCaptains,
    isSuccess,
  } = useGetCaptainsQuery();

  let {
    data: sectors,
    isFetching: isFetchingSectors,
    isSuccess: isSuccessSectors,
  } = useGetSectorsQuery();

  if (isSuccess) {
    console.log({ captains: captains?.body });
    captains = captains?.body;
  }

  if (isSuccessSectors) {
    console.log({ sectors: sectors?.body });
    sectors = sectors?.body;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      captainId: chosenCaptainId,
      baseName: chosenSectorFullName.split("$")[0],
      suffixName: chosenSectorFullName.split("$")[1],
    });

    try {
      toast.success("تم تعيين القائد بنجاح");
    } catch (err) {
      toast.error("حدث خطأ أثناء تعيين القائد");
      console.log(err);
      toast.error(JSON.stringify(err));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="assign-sector-to-captain">
      <CustomSelect
        name={"choose-sector"}
        label={"أختر القطاع"}
        data={
          isFetchingSectors
            ? [{ sectorId: "", fullName: "جاري التحميل" }]
            : !sectors
            ? [{ sectorId: "", fullName: "لا يوجد قطاعات" }]
            : sectors?.map((sector) => ({
                ...sector,
                fullName: sector.baseName + " " + sector.suffixName,
                valueName: sector.baseName + "$" + sector.suffixName,
              }))
        }
        displayMember={"fullName"}
        valueMember={"valueName"}
        selectedValue={chosenSectorFullName}
        required={true}
        onChange={(e) => {
          setChosenSectorFullName(e.target.value);
        }}
      />
      <CustomSelect
        name={"choose-captain-for-sector"}
        label={"أختر قائد"}
        data={
          isFetchingCaptains
            ? [{ captainId: "", fullName: "جاري التحميل" }]
            : !captains
            ? [{ captainId: "", fullName: "لا يوجد قادة" }]
            : captains
                ?.filter((captain) => captain.type === "unit")
                ?.map((captain) => ({
                  ...captain,
                  fullName:
                    captain.firstName +
                    " " +
                    captain.middleName +
                    " " +
                    captain.lastName,
                }))
        }
        displayMember={"fullName"}
        valueMember={"captainId"}
        selectedValue={chosenCaptainId}
        required={true}
        onChange={(e) => {
          setChosenCaptainId(e.target.value);
        }}
      />
      {isFetchingCaptains && (
        <p
          style={{
            direction: "rtl",
          }}
        >
          جاري التحميل
        </p>
      )}

      <Button className="change-captain-role__btn Button--medium Button--regular">
        إضافة
      </Button>
    </form>
  );
}
