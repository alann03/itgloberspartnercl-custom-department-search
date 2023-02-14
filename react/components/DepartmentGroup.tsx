import React from 'react';
import { useCssHandles } from 'vtex.css-handles';

import "./styles.css";

type Props = {
    departments: [Category],
    handleSetSlug: any
}

type Category = {
    id: number,
    name: string,
    slug: string
}

const DepartmentGroup = ({ departments, handleSetSlug }: Props) => {
    const onHandleSetSlug = (event: any) => {
        handleSetSlug(`${event.target.value}/$\{term\}&map=ft`)
    };

    const CSS_HANDLES = [
        "departmentGroup__container",
        "departmentGroup__element"
    ]

    const handles = useCssHandles(CSS_HANDLES)

    const departmentOptions: any = departments.map((department: Category) => {
        return (
            <option value={department.slug} key={department.id}>
                {department.name}
            </option>
        )
    })

    return (
        <div className={handles["departmentGroup__container"]}>
            <select
                className={handles["departmentGroup__element"]}
                onChange={onHandleSetSlug}
                defaultValue="value0">
                <option
                    disabled value="value0">
                    Seleccione una opción
                </option>
                {departmentOptions}
            </select>
        </div>
    )
}

export default DepartmentGroup;