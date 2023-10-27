import React, {useState} from 'react'
import Title from '../layouts/Title'
import DynamicForm from "./DynamicForm";


const Admin = () => {
    const [form0, setForm0] = useState(false);
    const [form1, setForm1] = useState(false);
    const [form2, setForm2] = useState(false);
    const [form3, setForm3] = useState(false);
    const [form4, setForm4] = useState(false);
    const [form5, setForm5] = useState(false);
    const [form6, setForm6] = useState(false);
    const [form7, setForm7] = useState(false);
    const [form8, setForm8] = useState(false);
    const [form9, setForm9] = useState(false);


    const handleEdit = (data) => {
        console.log('Edit:', data);
    };

    const handleDelete = (data) => {
        console.log(data)
    };

    const componentMaps = [
        {
            state: form0,
            value: <DynamicForm  value={"Education"}/>,
            tabName: "Ed"
        },
        {
            state: form1,
            value: <DynamicForm  value={"Volunteering"}/>,
            tabName: "Vo"
        },
        {
            state: form2,
            value: <DynamicForm  value={"Experience"}/>,
            tabName: "Ex"
        },
        {
            state: form3,
            value: <DynamicForm  value={"About"}/>,
            tabName: "Ab"
        },
        {
            state: form4,
            value: <DynamicForm  value={"Media"}/>,
            tabName: "Me"
        },
        {
            state: form5,
            value: <DynamicForm  value={"Contact"}/>,
            tabName: "Co"
        },
        {
            state: form6,
            value: <DynamicForm  value={"Home"}/>,
            tabName: "Ho"
        },
        {
            state: form7,
            value: <DynamicForm  value={"Features"}/>,
            tabName: "Fe"
        },
        {
            state: form8,
            value: <DynamicForm  value={"BackgroundImage"}/>,
            tabName: "Bi"
        },
        {
            state: form9,
            value: <DynamicForm  value={"Project"}/>,
            tabName: "Pr"
        }
    ]
    const getSetFormsSwitch = (index) => {
        const arr = new Array(10).fill(false);
        arr[index] = true
        return setForm0(arr[0]) &
            setForm1(arr[1]) &
            setForm2(arr[2]) &
            setForm3(arr[3]) &
            setForm4(arr[4]) &
            setForm5(arr[5]) &
            setForm6(arr[6]) &
            setForm7(arr[7]) &
            setForm8(arr[8]) &
            setForm9(arr[9])
    }


    return (
        <section id="admin" className="w-full py-20 border-b-[1px] border-b-black">
            <div className="flex justify-center items-center text-center">
                <Title title="PANEL CONTROL" des="Lending Page"/>
            </div>
            <div>
                <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-10">
                    {new Array(10).fill(1).map((item, index) => {
                        return <li
                            className={`${
                                componentMaps[index].state
                                    ? "border-designColor rounded-lg"
                                    : "border-transparent"
                            } resumeLi`}
                            onClick={() => getSetFormsSwitch(index)}
                        >
                            {componentMaps[index].tabName}
                        </li>
                    })}
                </ul>
            </div>
            {componentMaps.map((item, index) => {
                return <>{item.state && item.value}</>
            })}


        </section>
    );
}

export default Admin